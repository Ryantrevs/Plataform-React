using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.ViewModel
{
    public class ListUsersViewModel
    {
        public User User { get; set; }
        public BankData DadosBancarios { get; set; }
        public ListUsersViewModel()
        {

        }
        public ListUsersViewModel(User user, BankData dadosBancarios)
        {
            User = user;
            DadosBancarios = dadosBancarios;
        }
    }
}
