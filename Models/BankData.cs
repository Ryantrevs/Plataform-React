using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models
{
    public class BankData
    {
        public string Id { get; set; }
        public int BancoNum  { get; set; }
        public string BankName { get; set; }
        public int Agency { get; set; }
        public int BankAccountNumber { get; set; }
        public virtual User User { get; set; }
        public BankData()
        {

        }
    }
}
