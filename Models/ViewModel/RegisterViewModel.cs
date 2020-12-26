using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.ViewModel
{
    public class RegisterViewModel
    {
        public User User { get; set; }
      
        public string Password { get; set; }
        
        public string ConfirmPassword { get; set; }
    }
}
