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

        public ExpensesViewModel(double value, string category)
        {
            Value = value;
            Category = category;
        }
    }
}
