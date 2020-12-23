﻿using PlataformaTccSuporte.Models;
using PlataformaTccSuporte.Models.Repository;
using PlataformaTccSuporte.Models.ViewModel;
using PlataformaTccSuporte.Servicos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class AccountController : Controller
    {
        private readonly UserManager<User> UserManager;
        private readonly SignInManager<User> SignInManager;
        private readonly IDadosBancariosRepository dadosBancariosRepository;

        public AccountController(UserManager<User> UserManager, SignInManager<User> SignInManager,IDadosBancariosRepository dadosBancariosRepository)
        {
            this.UserManager = UserManager;
            this.SignInManager = SignInManager;
            this.dadosBancariosRepository = dadosBancariosRepository;
        }

        [HttpPost]
        [ActionName("Register")]
        public async Task Register(RegisterViewModel rvm)
        {
            if (ModelState.IsValid)
            {
                if (await UserManager.FindByEmailAsync(rvm.User.Email) == null)//se usuario não existe
                {
                    User user = new User() {
                        Id = Guid.NewGuid().ToString(),
                        Nome = rvm.User.Nome,
                        UserName = rvm.User.Nome,
                        Email = rvm.User.Email,
                        Cpf = rvm.User.Cpf,
                        Salario = 0
                    };
                    var result = await UserManager.CreateAsync(user, rvm.Password);
                    if (result.Succeeded)
                    {
                        if (SignInManager.IsSignedIn(User) && User.IsInRole("Admin"))
                        {
                            //return RedirectToAction("ListUsers", "Administration");
                        }
                        //await SignInManager.SignInAsync(user, isPersistent: false);
                       // return RedirectToAction("Index", "Home");
                    }
                    foreach (var error in result.Errors)
                    {
                        ModelState.AddModelError(" ", error.Description);
                    }
                }
            }            
        }
        [HttpPost]
        [ActionName("LogIn")]
        public async Task LogIn(LogInViewModel livm, string returnUrl)
        {
            if (ModelState.IsValid)
            {
                User user = await UserManager.FindByEmailAsync(livm.Email);
                if (user != null)
                {
                    
                    var passValid = await UserManager.CheckPasswordAsync(user, livm.Password);
                    if (passValid)
                    {
                        if (!user.EmailConfirmed)//Verifica se conta está confirmada, se não retorna a mensagem
                        {
                            ModelState.AddModelError("", "Email ainda não confirmado");
                            
                        }
                        await SignInManager.SignInAsync(user, false);
                        if (!string.IsNullOrEmpty(returnUrl))//se usuario tentou abrir um recurso
                        {
                            
                        }
                        else
                        {
                            
                        }
                    }
                    else
                    {
                        ModelState.AddModelError("", "Senha Incorreta!");
                    }
                }
                else
                {
                    ModelState.AddModelError("", "Usuário não encontrado!");
                }

            }            
        }

        [ActionName("Logout")]
        public async Task Logout()
        {
            await SignInManager.SignOutAsync();            
        }
      
        [Authorize]
        [HttpGet]
        [ActionName("Profile")]
        public async Task<ProfileViewModel> Profile()
        {
            var user = await UserManager.GetUserAsync(User);
            var model = new ProfileViewModel(user);
            if (user.ContaBancoId!=null)//conta encontrada
            {
                var dadosBan = dadosBancariosRepository.GetDadosBancarios(user.ContaBancoId);
                model.dadosBancarios = dadosBan;
            }            
            return model;
        }

        [Authorize]
        [HttpGet]
        [ActionName("EditProfile")]
        public async Task<ProfileViewModel> EditProfile()
        {
            var user = await UserManager.GetUserAsync(User);
            var model = new ProfileViewModel(user);
            return model;
        }
        [HttpPost]
        [ActionName("EditProfile")]
        public async Task<ProfileViewModel> EditProfile(ProfileViewModel profileViewModel)
        {
            var user = await UserManager.FindByIdAsync(profileViewModel.user.Id);
            if (user == null)
            {
                ViewBag.ErrorMessage = $"Usuario não encontrado";
                //return View("NotFound");
            }
            user.Nome = profileViewModel.user.Nome;
            user.UserName = profileViewModel.user.Nome;
            user.Email = profileViewModel.user.Email;
            var result = await UserManager.UpdateAsync(user);
            if (result.Succeeded)
            {
                //return RedirectToAction("Profile");
                return profileViewModel;
            }
            else
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("", error.Description);
                }
                return profileViewModel;
            }
        }

        public async Task cadastraUserFromStartup(User user, string pass)
        {
            await UserManager.CreateAsync(user, pass);
        }
        [HttpGet]
        [ActionName("SendConfirmEmail")]
        public async Task SendConfirmEmail(string Id)
        {
            var user = await UserManager.FindByIdAsync(Id);
            if (user == null)
            {
                ViewBag.ErrorMessage = $"Usuario não encontrado";
                //return View("NotFound");
            }
            var token = await UserManager.GenerateEmailConfirmationTokenAsync(user);
            var link = Url.Action("VerifyAccount", "Account",new { userId=user.Id,token=token}, Request.Scheme);
            var nome = user.Nome;
            var destinatario = user.Email;
            var assunto = "Verificação de email para Conta TccSuporte";
            var Mensagem = "Olá, para confirmarmos sua conta e permitir acesso, precisamos que verifique sua conta clicando no link a seguir: \n"
                + link + "/" + user.Id + "\n"+"Este Email possui um tempo de validade de 2 horas.";
            user.TVerifyEmail = DateTime.Now;
            await UserManager.UpdateAsync(user);//salva hora do envio de email
            IServicoEmail serviceMail = new MailService();
            var resp = await serviceMail.EnviarEmail(nome, destinatario, Mensagem, assunto);
            //return RedirectToAction("ListUsers", "Administration");
        }
        
        [HttpGet]
        [ActionName("VerifyAccount")]
        public async Task VerifyAccount(string userId,string token){
            var user = await UserManager.FindByIdAsync(userId);
            if (user == null)
            {
                ViewBag.ErrorMessage = $"Usuario não encontrado";
                //return View("NotFound");
            }
            var model = new VerifyAccountViewModel()
            {
                userId=userId,
                token=token
            };
            var time = DateTime.Now;
            var userMailTime = user.TVerifyEmail;
            var timeDif = time.Subtract(userMailTime).TotalMinutes;
            if (timeDif>120)//diferença de tempo maior que 2 horas
            {
                ViewBag.VerrifyTimeError= "Tempo limite de email expirado";
                ModelState.AddModelError("", "Tempo limite de email expirado");
                //return View(model);
            }
            else
            {
                //return View(model);
            }
            //return View();
        }
        [HttpPost]
        [ActionName("VerifyAccount")]
        public async Task<VerifyAccountViewModel> VerifyAccount(VerifyAccountViewModel model)
        {
            var user = await UserManager.FindByIdAsync(model.userId);
            if (user == null)
            {
                ViewBag.ErrorMessage = $"Usuario não encontrado";
                //return View("NotFound");
            }
            var result= await UserManager.ConfirmEmailAsync(user,model.token);
            if (!result.Succeeded)
            {
                foreach(var error in result.Errors)
                {
                    ModelState.AddModelError("",error.Description);
                }                
                ModelState.AddModelError("", "Erro ao confirmar e-mail");
                return model;
            }
            return model;
        }

        [HttpGet]
        [ActionName("EditDadosBancarios")]
        public async  Task<EditDadosBancariosViewModel> EditDadosBancarios()
        {
            var user = await UserManager.GetUserAsync(User);//pega usuario logado para evitar passagem usuários por get
            if (user == null)
            {
                ViewBag.ErrorMessage = $"Usuario não encontrado";
                //return View("NotFound");
            }
            if (user.ContaBancoId==null)//se usuario ainda não cadastrou dados bancarios
            {
                var dBancarios = new DadosBancarios()
                {
                    Id = Guid.NewGuid().ToString()                    
                };
                user.ContaBanco = dBancarios;
                user.ContaBancoId = dBancarios.Id;
                dadosBancariosRepository.CreateDadosBancarios(dBancarios);
                await UserManager.UpdateAsync(user);
            }
            var dadosBancarios = dadosBancariosRepository.GetDadosBancarios(user.ContaBancoId);//pega conta de um usuario
            var model = new EditDadosBancariosViewModel
            {
                User = user,
                DadosBanco= dadosBancarios
            };
            return model;
        }
        [HttpPost]
        [ActionName("EditDadosBancarios")]
        public void EditDadosBancarios(EditDadosBancariosViewModel model)
        {
            dadosBancariosRepository.UpdateDadosBancarios(model.DadosBanco);
            //return RedirectToAction("Profile", "Account");
        }
        [HttpPost]
        [ActionName("CheckEmailExists")]
        public async Task<bool> CheckEmailExists(string email)
        {
            if (await UserManager.FindByEmailAsync(email) !=null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

    }

}
