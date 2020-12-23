using PlataformaTccSuporte.Models.Repository;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models
{
    public class User : IdentityUser
    {
        public String Nome { get; set; }
        public string Cpf { get; set; } 
        public double Salario { get; set; } 
        public List<Sale> Sales { get; set; }
        public virtual List<UserTasklist> UserTasklist { get; set; }
        public virtual List<UserScope> UserScope { get; set; }
        public virtual DadosBancarios ContaBanco { get; set; }
        public DateTime TVerifyEmail { get; set; }
        public string ContaBancoId { get; set; }
        public User()
        {
            TVerifyEmail = new DateTime();    
        }

    }
}
