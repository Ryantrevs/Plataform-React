using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.ViewModel
{
    public class ListUsersViewModel
    {
        public User User { get; set; }
        public DadosBancarios DadosBancarios { get; set; }
        public ListUsersViewModel()
        {

        }
        public ListUsersViewModel(User user, DadosBancarios dadosBancarios)
        {
            User = user;
            DadosBancarios = dadosBancarios;
        }
    }
}
