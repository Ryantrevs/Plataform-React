using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.ViewModel
{
    public class FinanceViewModel
    {
        public List<Income> Incomes { get; set; }
        public List<Expenses> Expenses { get; set; }
        public List<Finance> finances { get; set; }
    }
}
