using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models
{
    public class IncomeCategory
    {
        public String Id { get; set; }
        public String Name { get; set; }
        public List<Income> Incomes { get; set; }

        public IncomeCategory()
        {
        }
        public IncomeCategory(string id, string name, List<Income> incomes)
        {
            Id = id;
            Name = name;
            Incomes = incomes;
        }

        public IncomeCategory(string id, string name)
        {
            Id = id;
            Name = name;
        }
    }
}
