using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.ViewModel
{
    public class ProfileViewModel
    {
        public User user { get; set; }
        public DadosBancarios dadosBancarios {get;set;}
        public ProfileViewModel(User User)
        {
            user = User;
        }
        public ProfileViewModel(User User,DadosBancarios dados)
        {
            user = User;
            dadosBancarios = dados;
        }
        public ProfileViewModel()
        {
                
        }

    }
}
