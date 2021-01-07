using PlataformaTccSuporte.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.Repository
{
    public interface IExpenseCategoryRepository
    {
        public void InsertCategory(ExpenseCategory expenseCategory);
        public List<ExpenseCategory> Categories();
        public void EmployCategory();
    }
    public class ExpenseCategoryRepository: BaseRepository<ExpenseCategory>, IExpenseCategoryRepository
    {
        public ExpenseCategoryRepository(PlataformaTccSuporteContext context):base(context)
        { 
        }

        public void InsertCategory(ExpenseCategory expenseCategory)
        {
            dbSet.Add(expenseCategory);
            context.SaveChanges();
        }

        public List<ExpenseCategory> Categories()
        {
            List<ExpenseCategory> list = dbSet.Where(t => t.Id != null).ToList();
            return list;
        }
        public void EmployCategory()
        {

            if (dbSet.Where(t => t.Name == "Funcionarios").FirstOrDefault() == null) { 
                dbSet.Add(new ExpenseCategory(Guid.NewGuid().ToString(), "Funcionarios"));
                context.SaveChanges();
            }
        }
    }
}
