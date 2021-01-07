using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models
{
    public class ExpenseCategory
    {
        public String Id { get; set; }
        public String Name { get; set; }
        public List<Expenses> Expenses { get; set; }

        public ExpenseCategory(string id, string name)
        {
            Id = id;
            Name = name;
        }

        public ExpenseCategory(string id, string name, List<Expenses> expenses)
        {
            Id = id;
            Name = name;
            Expenses = expenses;
        }
        public ExpenseCategory()
        {

        }
    }
}
