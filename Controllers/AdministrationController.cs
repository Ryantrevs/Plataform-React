using PlataformaTccSuporte.Models;
using PlataformaTccSuporte.Models.Repository;
using PlataformaTccSuporte.Models.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    //[Authorize(Roles = "Admin")]    
    public class AdministrationController : Controller
    {
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly UserManager<User> userManager;
        private readonly IBankDataRepository dadosBancariosRepository;
        public AdministrationController(RoleManager<IdentityRole> roleManager,UserManager<User> userManager, IBankDataRepository dadosBancariosRepository)
        {
            this.roleManager = roleManager;
            this.userManager = userManager;
            this.dadosBancariosRepository = dadosBancariosRepository;
        }
    
        [HttpPost]
        [ActionName("CreateRole")]
        public async Task CreateRole(RoleViewModel rvm)
        {
            if (ModelState.IsValid)
            {
                IdentityRole identityRole = new IdentityRole
                {
                    Name = rvm.RoleName
                };
                IdentityResult result = await roleManager.CreateAsync(identityRole);
                if (result.Succeeded)
                {
                    //return RedirectToAction("ListRoles", "Administration");

                }
                foreach(IdentityError error in result.Errors)
                {
                    ModelState.AddModelError("", error.Description);
                }
            }           
            
        }
        [HttpGet]
        [ActionName("ListRoles")]
        [Authorize]
        public List<IdentityRole> ListRoles()
        {
            var roles = roleManager.Roles.ToList();
            return roles;
        }
        [HttpGet]
        [ActionName("EditRole")]
        [Authorize]
        public async Task<RoleEditViewModel> EditRole(string Id)
        {
            var role=await roleManager.FindByIdAsync(Id);
            if (role==null)
            {
                ViewBag.ErrorMessage = $"Nivel de acesso não encontrado,  = {Id}";
                //return View("NotFound");
            }
            var model = new RoleEditViewModel
            {
                Id= role.Id,
                RoleName = role.Name
            };
            var usuarios = await userManager.GetUsersInRoleAsync(role.Name);
            foreach(var user in usuarios)
            {
                model.Users.Add(user.UserName);                
            }
            return model;
        }
        [HttpPost]
        [ActionName("EditRole")]
        public async Task EditRole(RoleEditViewModel revm)
        {
            var role = await roleManager.FindByIdAsync(revm.Id);
            if(role == null)
            {
                ViewBag.ErrorMessage = $"Nivel de acesso não encontrado";
                //return View("NotFound");
            }
            else
            {
                role.Name = revm.RoleName;
                var result = await roleManager.UpdateAsync(role);
                if (result.Succeeded)
                {
                    //return RedirectToAction("ListRoles");
                }
                foreach(var error in result.Errors)
                {
                    ModelState.AddModelError("", error.Description);
                }
            }
            return ;
        }
        [HttpPost]
        [ActionName("DeleteRole")]
        [Authorize(Policy = "DeleteRolePolicy")]
        public async Task DeleteRole(string Id)
        {
            var role = await roleManager.FindByIdAsync(Id);
            if (role == null)
            {
                ViewBag.ErrorMessage = $"Não foi possível exluir nivel de acesso, nivel não encontrado";
                //return View("NotFound");
            }
            else
            {
                var result = await roleManager.DeleteAsync(role);
                if (result.Succeeded)
                {
                    //return RedirectToAction("ListRoles");
                }
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("", error.Description);
                }
                //return View("ListRoles");
            }
        }




        [HttpGet]
        [ActionName("EditUsersInRole")]
        public async Task<List<UserRoleViewModel>> EditUsersInRole(string roleId)
        {
            ViewBag.roleId = roleId;
            var role = await roleManager.FindByIdAsync(roleId);

            if (role == null)
            {
                ViewBag.ErrorMessage = $"Nivel de acesso nao pode ser encontrado";
                //return View("NotFound");
            }
            var model = new List<UserRoleViewModel>();
            var userList = userManager.Users.ToList<User>();
            foreach (var user in userList)
            {
                var userRoleViewModel = new UserRoleViewModel
                {
                    UserId = user.Id,
                    UserName = user.UserName,
                    UserEmail = user.Email
                };
                if(await userManager.IsInRoleAsync(user, role.Name))
                {
                    userRoleViewModel.IsSelected = true;
                }
                else
                {
                    userRoleViewModel.IsSelected = false;
                }
                model.Add(userRoleViewModel);
            }
            return model;

        }
        [HttpPost]
        [ActionName("EditUsersInRole")]
        public async Task EditUsersInRole(List<UserRoleViewModel> model,string roleId)
        {
            var role = await roleManager.FindByIdAsync(roleId);
            if (role==null)
            {
                ViewBag.ErrorMessage = $"Impossivel alterar usuarios em nivel, Nivel de acesso não encontrado";
                return;
            }           
            for (int i = 0; i < model.Count; i++)
            {
                var user = await userManager.FindByIdAsync(model[i].UserId);
                IdentityResult result = null;

                if (model[i].IsSelected && !(await userManager.IsInRoleAsync(user, role.Name)))//usuario selecionado e não está no role
                {
                    result = await userManager.AddToRoleAsync(user, role.Name);

                }
                else if (!model[i].IsSelected && await userManager.IsInRoleAsync(user, role.Name))//usuario não selecionado e está no role
                {
                    result = await userManager.RemoveFromRoleAsync(user, role.Name);
                }
                else
                {
                    continue;
                }

                if (result.Succeeded)
                {
                    if (i < (model.Count - 1))
                        continue;
                    else
                        return;//RedirectToAction("EditRole", new { Id = roleId });
                }
            }
            return;//RedirectToAction("EditRole", new { Id = roleId });
            
        }
        [HttpGet]
        [ActionName("ListUsers")]
        public List<ListUsersViewModel> ListUsers()
        {
            var users = userManager.Users.ToList();
            List<ListUsersViewModel> list = new List<ListUsersViewModel>();
            foreach(var user in users)//gera view model com dados bancarios e ususarios
            {
                var model = new ListUsersViewModel();
                model.User = user;
                if (user.BankAccountId!=null)
                {
                    var dadosBancarios = dadosBancariosRepository.GetBankData(user.BankAccountId);
                    model.DadosBancarios = dadosBancarios;                                        
                }
                list.Add(model);
            }
            return list;
        }
        [HttpGet]
        [ActionName("EditUsers")]
        public async Task<EditUserViewModel> EditUser(string Id)
        {
            var user = await userManager.FindByIdAsync(Id);
            if (user == null)
            {
                ViewBag.ErrorMessage = $"Não é possivel editar usuario, usuário não encontrado";
                //return View("NotFound");
            }
            var userClaims = await userManager.GetClaimsAsync(user);
            var userRoles = await userManager.GetRolesAsync(user);

            var model = new EditUserViewModel
            {
                Id = user.Id,
                UserName = user.UserName,
                Email = user.Email,
                Salario=user.Salary,
                Claims = userClaims.Select(c => c.Value).ToList(),
                Roles = userRoles
            };

            return model;
        }
        [HttpPost]
        [ActionName("EditUsers")]
        public async Task<IActionResult> EditUser(EditUserViewModel model)
        {
            var user = await userManager.FindByIdAsync(model.Id);
            if (user == null)
            { 
                ViewBag.ErrorMessage = $"Não é possivel editar usuario, usuário não encontrado";
                return View("NotFound");
            }
            user.Email = model.Email;
            user.UserName = model.UserName;
            user.Nome = model.UserName;
            user.Salary = model.Salario;
            var result = await userManager.UpdateAsync(user);
            if (result.Succeeded)
            {
                return RedirectToAction("ListUsers");
            }
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError("", error.Description);
            }
            return View(model);
        }
        [HttpPost]
        public async Task EditUserSalario(User user)
        {

        }

        [HttpPost]
        public async Task<IActionResult> DeleteUser(string Id)
        {
            var user = await userManager.FindByIdAsync(Id);
            if (user == null)
            {
                ViewBag.ErrorMessage = $"Não foi possível exluir usuário, usuário não encontrado";
                return View("NotFound");
            }
            else
            {
                var result = await userManager.DeleteAsync(user);
                if (result.Succeeded)
                {
                    return RedirectToAction("ListUsers");
                }
                foreach(var error in result.Errors)
                {
                    ModelState.AddModelError("", error.Description);
                }
                return View("ListUsers");
            }
        }
        [HttpGet]
        public async Task<IActionResult> ManageUserRoles(string userId)
        {
            ViewBag.userId = userId;
            var user = await userManager.FindByIdAsync(userId);
            if (user==null)
            {
                ViewBag.ErrorMessage = $"Usuario não encontrado";
                return View("NotFound");
            }

            var model = new List<UserRolesViewModel>();
            var ListRoles = roleManager.Roles.ToList();
            foreach (var role in ListRoles)
            {
                var userRolesViewModel = new UserRolesViewModel
                {
                    RoleId = role.Id,
                    RoleName = role.Name                    
                };
                if (await userManager.IsInRoleAsync(user,role.Name))
                {
                    userRolesViewModel.IsSelected = true;
                }
                model.Add(userRolesViewModel);
            }
            return View(model);

        }
        [HttpPost]

        public async Task<IActionResult> ManageUserRoles(List<UserRolesViewModel> model,string userId)
        {
            var user = await userManager.FindByIdAsync(userId);

            if (user==null)
            {
                ViewBag.ErrorMessage = $"Ususario não encontrado";
                return View("NotFound");
            }
            var roles = await userManager.GetRolesAsync(user);
            var result = await userManager.RemoveFromRolesAsync(user, roles);//remove todos para depois adicionar apenas os necessários
            if (!result.Succeeded)
            {
                ModelState.AddModelError("", "Houve um problema ao assimilar niveis de acesso");
                return View(model);

            }

            result = await userManager.
                AddToRolesAsync(user, model.Where(x => x.IsSelected).Select(y => y.RoleName));
            //adiciona apenas os marcados com bool de IsSelected
            if (!result.Succeeded)
            {
                ModelState.AddModelError("", "Houve um erro ao assimilar níveis de acesso pertencentes ao usuário");
                return View(model);
            }

            return RedirectToAction("EditUser", new { Id = userId});
        }
        [HttpGet]
        public async Task<IActionResult> ManageUserClaims(string userId)
        {
            var user = await userManager.FindByIdAsync(userId);

            if (user == null)
            {
                ViewBag.ErrorMessage = $"Ususario não encontrado";
                return View("NotFound");
            }

            var existingUserClaims = await userManager.GetClaimsAsync(user);
            var model = new UserClaimsViewModel
            {
                UserId = userId
            };

            foreach (Claim claim in ClaimStore.AllClaims)
            {
                UserClaim userClaim = new UserClaim
                {
                    ClaimType = claim.Type
                };
                //se usuario possui claim com isSelected true
                if (existingUserClaims.Any(c=>c.Type == claim.Type))
                {
                    userClaim.IsSelected = true;
                }
                model.Claims.Add(userClaim);

            }
            return View(model);

        }
        [HttpPost]
        public async Task<IActionResult> ManageUserClaims(UserClaimsViewModel model)
        {
            var user = await userManager.FindByIdAsync(model.UserId);
            if (user == null)
            {
                ViewBag.ErrorMessage = $"Ususario não encontrado";
                return View("NotFound");
            }
            
            var claims = await userManager.GetClaimsAsync(user);
            var result = await userManager.RemoveClaimsAsync(user, claims);
            if (!result.Succeeded)
            {
                ModelState.AddModelError("", "Erro ao assimilar permissões ao ususario");
                return View(model);
            }
            result = await userManager.AddClaimsAsync(user,
                model.Claims.Where(c=>c.IsSelected).Select(c=>new Claim(c.ClaimType,c.ClaimType)));
            if (!result.Succeeded)
            {
                ModelState.AddModelError("", "Erro ao assimilar novas persmissões ao usuario");
                return View(model);
            }

            return RedirectToAction("EditUser",new { Id = model.UserId });
        }






    }
}
