using Microsoft.EntityFrameworkCore;
using PlataformaTccSuporte.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.Repository
{
    public interface IIncomeCategoryRepository
    {
        public void SalesCategory();
        public List<IncomeCategory> Categories();
        public Task<IncomeCategory> getCategory(string id);
    }
    public class IncomingCategoryRepository : BaseRepository<IncomeCategory>, IIncomeCategoryRepository
    {
        public IncomingCategoryRepository(PlataformaTccSuporteContext context):base(context)
        {
        }
        public List<IncomeCategory> Categories()
        {
            List<IncomeCategory> list = dbSet.Where(t => t.Id != null).ToList();
            return list;
        }
        public void SalesCategory()
        {
            if (dbSet.Where(t => t.Name == "Funcionarios").FirstOrDefault() == null)
            {
                dbSet.Add(new IncomeCategory(Guid.NewGuid().ToString(), "Vendas"));
                context.SaveChanges();
            }
        }
        public async Task<IncomeCategory> getCategory(string id)
        {
            return await dbSet.Where(t => t.Id == id).FirstOrDefaultAsync();
        }

    }
}
