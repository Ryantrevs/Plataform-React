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
        private readonly IExpensesRepository expensesRepository;
        private readonly IExpenseCategoryRepository expenseCategoryRepository;
        private readonly IIncomeCategoryRepository incomeCategoryRepository;
        private readonly IIncomingRepository incomingRepository;
        private readonly UserManager<User> userManager;

        public FinanceController(IExpensesRepository expensesRepository, IIncomingRepository incomingRepository, IExpenseCategoryRepository expenseCategoryRepository,
                                 UserManager<User> userManager, IIncomeCategoryRepository incomeCategoryRepository)
        {
            this.incomingRepository = incomingRepository;
            this.expenseCategoryRepository = expenseCategoryRepository;
            this.expensesRepository = expensesRepository;
            this.userManager = userManager;
            this.incomeCategoryRepository = incomeCategoryRepository;
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
            //await financeRepository.CreateBalance(lastDay);
            Console.WriteLine("asnlkdasnldsa");
            return;

        }

        [HttpGet]
        [ActionName("GetBalance")]
        public async Task<FinanceViewModel> GetBalance()
        {

            var finance = new FinanceViewModel();
            var ActualYear = DateTime.Now.Year;
            var init = DateTime.Parse("01/" + 01 + "/" + ActualYear);
            var final = DateTime.Parse(DateTime.DaysInMonth(ActualYear, 12) + "/" + 12 + "/" + ActualYear);
            //List<FinanceViewModel> finan = financeRepository.GetBalance();
            finance.expensesViewModels = await expensesRepository.GetExpenses(init, final);
            finance.incomeViewModels = await incomingRepository.getIncomingViewModelPerDate(init, final);
            /*if (finan == null)
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
            */
            return finance;
        }

        [HttpGet]
        [ActionName("getExpenseCategory")]
        public List<ExpenseCategory> getExpenseCategory()
        {
            expenseCategoryRepository.EmployCategory();
            var list = expenseCategoryRepository.Categories();
            return list;
        }
        [HttpGet]
        [ActionName("getIncomingCategory")]
        public List<IncomeCategory> GetIncomingCategory()
        {
            incomeCategoryRepository.SalesCategory();
            var list = incomeCategoryRepository.Categories();
            return list;
        }

        [HttpPost]
        [ActionName("NewExpense")]
        public async Task<String> newExpense([FromForm]Expenses expenses)
        {
            var user = await userManager.GetUserAsync(User);
            var category = await expenseCategoryRepository.getCategory(expenses.ExpenseCategory.Id);

            expenses.Id = Guid.NewGuid().ToString();
            expenses.user = user;
            expenses.ExpenseCategory = category;

            var response = await expensesRepository.InsertExpense(expenses);
            
            return expenses.ExpenseCategory.Id;
        }
        [HttpPost]
        [ActionName("NewIncome")]
        public async Task<String> newIncome([FromForm]Income income)
        {
            var user = await userManager.GetUserAsync(User);
            var category = await incomeCategoryRepository.getCategory(income.incomeCategory.Id);
            income.Id = Guid.NewGuid().ToString();
            income.user = user;
            income.incomeCategory = category;
            var response = incomingRepository.insertIncoming(income);

            return income.incomeCategory.Id;

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