using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.ViewModel
{
    public class FinanceViewModel
    {
        public DateTime InitialPeriod { get; set; }
        public DateTime FinalPeriod { get; set; }
        public List<ExpensesViewModel> expensesViewModels { get; set; }

        public FinanceViewModel()
        {
        }

        public FinanceViewModel(DateTime initialPeriod, DateTime finalPeriod)
        {
            InitialPeriod = initialPeriod;
            FinalPeriod = finalPeriod;
        }
    }
}
