using Microsoft.EntityFrameworkCore;
using PlataformaTccSuporte.Data;
using PlataformaTccSuporte.Models.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.Repository
{
    public interface IExpensesRepository
    {
        public void CreateExpense();
        public Task<List<ExpensesViewModel>> GetExpenses(DateTime init, DateTime final);
        public Task<String> InsertExpense(Expenses expenses);
    }
    public class ExpensesRepository : BaseRepository<Expenses>,IExpensesRepository
    {
        public ExpensesRepository(PlataformaTccSuporteContext context):base(context)
        {
        }

        public void CreateExpense()
        {
            var rnd = new Random();
            int[] values = { 2000, 5000, 3000, 4000, 6000, 600, 200, 1000, 200 };
            DateTime[] dates = { DateTime.Parse("01/10/2020"), DateTime.Parse("01/10/2019"), DateTime.Parse("01/08/2020"), DateTime.Parse("01/05/2020"), DateTime.Parse("01/12/2020"), DateTime.Parse("01/10/2021") };
            for (var i = 0; i < 10; i++)
            {
                new Expenses(Guid.NewGuid().ToString(), "testando", values[rnd.Next(0, values.Length - 1)],dates[rnd.Next(0, dates.Length-1)]);
            }
        }
        public Task<List<ExpensesViewModel>> GetExpenses(DateTime init, DateTime final)
        {
            var response = dbSet.Where(t => final >= t.Date && init <= t.Date).Select(x=>new ExpensesViewModel(x.Value,x.ExpenseCategory.Name, x.Date)).ToListAsync();
            return response;
        }
        public async Task<String> InsertExpense(Expenses expenses)
        {
            dbSet.Add(expenses);
            var response = await context.SaveChangesAsync();
            return response.ToString();
        }
       
    }
}
