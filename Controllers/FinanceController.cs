using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PlataformaTccSuporte.Models;
using PlataformaTccSuporte.Models.Repository;
using PlataformaTccSuporte.Models.ViewModel;

namespace PlataformaTccSuporte.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class FinanceController : Controller
    {
        private readonly IFinanceRepository financeRepository;
        private readonly IExpensesRepository expensesRepository;
        private readonly IExpenseCategoryRepository expenseCategoryRepository;
        private readonly IIncomingRepository incomingRepository;

        public FinanceController(IFinanceRepository financeRepository,IExpensesRepository expensesRepository, IIncomingRepository incomingRepository, IExpenseCategoryRepository expenseCategoryRepository)
        {
            this.financeRepository = financeRepository;
            this.incomingRepository = incomingRepository;
            this.expenseCategoryRepository = expenseCategoryRepository;
            this.expensesRepository = expensesRepository;
        }

        [HttpGet]
        [ActionName("CreateBalance")]
        public async Task<List<Finance>> CreateBalance()
        {
            var list = financeRepository.GetBalance();
            List<int> lastDay = new List<int>();
            for (int i = 0; i < 12; i++)
            {
                lastDay.Add(DateTime.DaysInMonth(DateTime.Now.Year, i + 1));
            }
            await financeRepository.CreateBalance(lastDay);
            Console.WriteLine("asnlkdasnldsa");
            return list;

        }

        [HttpGet]
        [ActionName("GetBalance")]
        public async Task<FinanceViewModel> GetBalance()
        {
            var finance = new FinanceViewModel();
            var ActualMonth = DateTime.Now.Month;
            var ActualYear = DateTime.Now.Year;
            var init = DateTime.Parse("01/" + ActualMonth + "/" + ActualYear);
            var final = DateTime.Parse(DateTime.DaysInMonth(ActualYear, ActualMonth) + "/" + ActualMonth + "/" + ActualYear);
            List<Expenses> expenses = await expensesRepository.GetExpenses(init, final);
            List<Income> Incomes = await incomingRepository.getIncomingPerDate(init, final);
            List<Finance> finances = financeRepository.GetBalance();
            if (expenses == null)
            {
                finance.Expenses = new List<Expenses>();
            }
            else
            {
                finance.Expenses = expenses;
            }
            if (Incomes == null)
            {
                finance.Incomes = new List<Income>();
            }
            else
            {
                finance.Incomes = Incomes;
            }
            if (finances == null)
            {
                finance.finances = new List<Finance>();
            }
            else
            {
                finance.finances = finances;
            }

            return finance;
        }

        [HttpGet]
        [ActionName("GetFinances")]
        public async Task<FinanceViewModel> GetExpenses()
        {
            var finance = new FinanceViewModel();
            var ActualMonth = DateTime.Now.Month;
            var ActualYear = DateTime.Now.Year;
            var init = DateTime.Parse("01/" + ActualMonth + "/" + ActualYear);
            var final = DateTime.Parse(DateTime.DaysInMonth(ActualYear,ActualMonth) +"/" + ActualMonth + "/" + ActualYear);
            List<Expenses> expenses = await expensesRepository.GetExpenses(init, final);
            List<Income> Incomes = await incomingRepository.getIncomingPerDate(init, final);
            if (expenses == null)
            {
                finance.Expenses = new List<Expenses>();
            }
            else
            {
                finance.Expenses = expenses;
            }
            if (Incomes == null)
            {
                finance.Incomes = new List<Income>();
            }
            else
            {
                finance.Incomes = Incomes;
            }

            return finance;
        }

        /*[HttpGet]
        [ActionName("GetExpenses")]
        public List<ExpenseCategory> GetExpensesCategory()
        {

        }*/

    }
}