using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.ViewModel
{
    public class FinanceViewModel
    {
        public List<ExpensesViewModel> expensesViewModels { get; set; }
        public List<IncomeViewModel> incomeViewModels { get; set; }

        public FinanceViewModel()
        {
        }

        public FinanceViewModel(List<ExpensesViewModel> expensesViewModels, List<IncomeViewModel> incomeViewModels)
        {
            this.expensesViewModels = expensesViewModels;
            this.incomeViewModels = incomeViewModels;
        }
    }
}
