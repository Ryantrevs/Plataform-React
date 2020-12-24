using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.ViewModel
{
    public class RoleEditViewModel
    {
        public RoleEditViewModel()
        {
            Users = new List<string>();
        }
        public string Id{ get; set; }
        public string RoleName { get; set; }
        public List<string> Users { get; set; }



    }
}
