using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models
{
    public class DadosBancarios
    {
        public string Id { get; set; }
        public int BancoNum  { get; set; }
        public string NomeBanco { get; set; }
        public int Agencia { get; set; }
        public int Conta { get; set; }
        public virtual User User { get; set; }
        public DadosBancarios()
        {

        }
    }
}
