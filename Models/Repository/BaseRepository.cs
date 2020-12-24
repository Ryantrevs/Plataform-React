using Microsoft.EntityFrameworkCore;
using PlataformaTccSuporte.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.Repository
{
    public class BaseRepository<T> where T: class
    {
        protected readonly PlataformaTccSuporteContext context;
        protected readonly DbSet<T> dbSet;

        public BaseRepository(PlataformaTccSuporteContext context)
        {
            this.context = context;
            dbSet = context.Set<T>();
        }
    }
}
