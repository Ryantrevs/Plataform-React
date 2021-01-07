using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models
{
    public class Finance
    {
        public String Id { get; set; }
        public List<Expenses> Expenses { get; set; }
        public List<Income> Incomes { get; set; }
        public DateTime InitialPeriod { get; set; }
        public DateTime FinalPeriod { get; set; }

        public Finance(string id, DateTime initialPeriod, DateTime finalPeriod)
        {
            Id = id;
            InitialPeriod = initialPeriod;
            FinalPeriod = finalPeriod;
        }
    }

}
