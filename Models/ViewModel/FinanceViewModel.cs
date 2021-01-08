using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.ViewModel
{
    public class FinanceViewModel
    {
        public List<IncomeViewModel> incomeViewModels { get; set; }
        public List<ExpensesViewModel> expensesViewModels { get; set; }
    }
}
