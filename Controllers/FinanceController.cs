using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
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
        private readonly UserManager<User> userManager;

        public FinanceController(IFinanceRepository financeRepository,IExpensesRepository expensesRepository, IIncomingRepository incomingRepository, IExpenseCategoryRepository expenseCategoryRepository,
                                 UserManager<User> userManager)
        {
            this.financeRepository = financeRepository;
            this.incomingRepository = incomingRepository;
            this.expenseCategoryRepository = expenseCategoryRepository;
            this.expensesRepository = expensesRepository;
            this.userManager = userManager;
        }

        [HttpGet]
        [ActionName("CreateBalance")]
        public async Task CreateBalance()
        {
            List<int> lastDay = new List<int>();
            for (int i = 0; i < 12; i++)
            {
                lastDay.Add(DateTime.DaysInMonth(DateTime.Now.Year, i + 1));
            }
            await financeRepository.CreateBalance(lastDay);
            Console.WriteLine("asnlkdasnldsa");
            return;

        }

        [HttpGet]
        [ActionName("GetBalance")]
        public async Task<List<FinanceViewModel>> GetBalance()
        {

            var finance = new List<FinanceViewModel>();
            var ActualMonth = DateTime.Now.Month;
            var ActualYear = DateTime.Now.Year;
            var init = DateTime.Parse("01/" + ActualMonth + "/" + ActualYear);
            var final = DateTime.Parse(DateTime.DaysInMonth(ActualYear, ActualMonth) + "/" + ActualMonth + "/" + ActualYear);
            List<FinanceViewModel> finan = financeRepository.GetBalance();
            if (finan == null)
            {
                finance = new List<FinanceViewModel>();
            }
            else
            {
                foreach (var item in finan)
                {
                    item.expensesViewModels = await expensesRepository.GetExpenses(item.InitialPeriod, item.FinalPeriod);
                }
                finance = finan;
            }

            return finance;
        }

        [HttpGet]
        [ActionName("GetCategory")]
        public List<ExpenseCategory> GetCategory()
        {
            expenseCategoryRepository.EmployCategory();
            var list = expenseCategoryRepository.Categories();
            return list;
        }

        [HttpPost]
        [ActionName("NewExpense")]
        public async Task<String> newExpense([FromForm]Expenses expenses)
        {
            var user = await userManager.GetUserAsync(User);
            Finance balance = financeRepository.GetUniqueBalance(expenses.Date);
            expenses.Id = Guid.NewGuid().ToString();
            expenses.Finance = balance;
            expenses.user = user;
            var response = await expensesRepository.InsertExpense(expenses);
            if (response == "1")
            {
                balance.Expenses.Add(expenses);
                financeRepository.updateExpense(balance);
            }
            return response;
        }
        [HttpPost]
        [ActionName("NewIncome")]
        public async Task<String> newIncome([FromForm]Income income)
        {
            var user = await userManager.GetUserAsync(User);
            Finance balance = financeRepository.GetUniqueBalance(income.Date);
            income.Id = Guid.NewGuid().ToString();
            var response = incomingRepository.insertIncoming(income);
            return response;

        }
        //public async Task<List<Expenses>> GetExpensesAsync([FromForm]String date)
        [HttpPost]
        [ActionName("GetExpenses")]
        public async Task<List<ExpensesViewModel>> GetExpensesAsync([FromForm]String date)
        {
            DateTime todayDate = DateTime.Parse(date);
            var finalDate = DateTime.Parse(DateTime.DaysInMonth(todayDate.Year, todayDate.Month) + "/" + todayDate.Month +"/"+ todayDate.Year);
            var initDate = DateTime.Parse("01/" + todayDate.Month + "/" + todayDate.Year);
            List<ExpensesViewModel> expenses = await expensesRepository.GetExpenses(initDate, finalDate);
            return expenses;
        }
        [HttpPost]
        [ActionName("GetIncoming")]
        public async Task<List<Income>> GetIncoming([FromForm]String date)
        {
            DateTime todayDate = DateTime.Parse(date);
            var finalDate = DateTime.Parse(DateTime.DaysInMonth(todayDate.Year, todayDate.Month) + "/" + todayDate.Month + "/" + todayDate.Year);
            var initDate = DateTime.Parse("01/" + todayDate.Month + "/" + todayDate.Year);
            List<Income> incomes = await incomingRepository.getIncomingPerDate(initDate, finalDate);
            return incomes;
        }
    }
}