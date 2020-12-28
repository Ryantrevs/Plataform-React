using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using PlataformaTccSuporte.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.Repository
{
    
    public static class UserRepository 
    {
        public  static async Task<User> FindByCpfAsync(this UserManager<User> um, string cpf)
        {
            return await um?.Users?.SingleOrDefaultAsync(x => x.Cpf== cpf);
        }

    }
}
