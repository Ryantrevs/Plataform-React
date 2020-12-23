﻿using PlataformaTccSuporte.Models;
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
    public class RelatoriosController : Controller
    {
        private readonly UserManager<User> userManager;
        public RelatoriosController(UserManager<User> userManager)
        {
            this.userManager = userManager;
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<List<Income>> GenerateDataChartDespesasReceita()
        {

            List<Income> list = new List<Income>();            
            return list;
        }
        [HttpPost]
        public async Task<List<Expenses>> DespesasMensal()
        {
            double despesas;            
            var users = userManager.Users.ToList<User>();
            foreach(var user in users){//conta salario de todos os funcionarios
                despesas =+ user.Salary;
            }
            //mais despesas;
            List<Expenses> lista = new List<Expenses>();
            return lista; 
        }
        [HttpPost]
        public async Task<String> Teste()
        {
            string val = "teste";
            return val;
        }

        



    }
}
