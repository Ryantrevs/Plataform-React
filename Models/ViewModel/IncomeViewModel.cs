using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.ViewModel
{
    public class IncomeViewModel
    {
        public double Value { get; set; }
        public String Category { get; set; }
        public DateTime Date { get; set; }

        public IncomeViewModel(double value, string category)
        {
            Value = value;
            Category = category;
        }

        public IncomeViewModel(double value, string category, DateTime date) : this(value, category)
        {
            Date = date;
        }
    }
}
