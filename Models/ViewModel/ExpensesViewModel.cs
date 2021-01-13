using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.ViewModel
{
    public class ExpensesViewModel
    {
        public double Value { get; set; }
        public String Category { get; set; }
        public DateTime Date { get; set; }

        public ExpensesViewModel(double value, string category)
        {
            Value = value;
            Category = category;
        }

        public ExpensesViewModel(double value, string category, DateTime date)
        {
            Value = value;
            Category = Category;
            Date = date;
        }
    }
}
