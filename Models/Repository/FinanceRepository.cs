using Microsoft.EntityFrameworkCore;
using PlataformaTccSuporte.Data;
using PlataformaTccSuporte.Models.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.Repository
{
    public interface IFinanceRepository
    {
        public Task CreateBalance(List<int> lastDay);
        //'1'public List<FinanceViewModel> GetBalance();
        public Finance GetUniqueBalance(DateTime date);
        public void updateExpense(Finance finance);
    }
    public class FinanceRepository : BaseRepository<Finance>,IFinanceRepository
    {
        public FinanceRepository(PlataformaTccSuporteContext context):base(context)
        {
        }
        public async Task CreateBalance(List<int> lastDay)
        {
            List<Finance> list = new List<Finance>();
            var i = 1;
            foreach (var item in lastDay)
            {
                list.Add(new Finance(Guid.NewGuid().ToString(), DateTime.Parse("" + 01 + "/" + i + "/" + DateTime.Now.Year), DateTime.Parse("" + item + "/" + i + "/" + DateTime.Now.Year)));
                i++;
            }
            foreach(var item in list)
            {
                await dbSet.AddAsync(item);
            }
            await context.SaveChangesAsync();
        }
        /*public List<FinanceViewModel> GetBalance()
        {
            int previousYear = DateTime.Now.Year - 1;
            var PreviousTime = DateTime.Parse("" + 31 + "/" + 12 + "/" + previousYear);
            int nextYear = DateTime.Now.Year + 1;
            var NextTime = DateTime.Parse("" + 01 + "/" + 01 + "/" + nextYear);

            var response = dbSet.Where(t => t.FinalPeriod < NextTime && t.InitialPeriod > PreviousTime).Select(x=>new FinanceViewModel(x.,x.FinalPeriod)).ToList();
            return response;
        }*/
        public Finance GetUniqueBalance(DateTime date)
        {
            var response = dbSet.Where(t => t.FinalPeriod >= date  && t.InitialPeriod <= date).FirstOrDefault();
            return response;
        }
        public void updateExpense(Finance finance)
        {
            dbSet.Update(finance);
            context.SaveChanges();
        }


    }
}
