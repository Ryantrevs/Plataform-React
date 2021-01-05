using Microsoft.EntityFrameworkCore;
using PlataformaTccSuporte.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.Repository
{
    public interface IIncomingRepository
    {
        public Task<List<Income>> getIncomingPerDate(DateTime init, DateTime final);
        public void insertIncoming(Income income);
    }
    public class IncomingRepository : BaseRepository<Income>,IIncomingRepository
    {
        public IncomingRepository(PlataformaTccSuporteContext context) : base(context)
        {
        }

        public void insertIncoming(Income income)
        {
            dbSet.Add(income);
            context.SaveChanges();
        }

        public async Task<List<Income>> getIncomingPerDate(DateTime init,DateTime final)
        {
            List<Income> list = await dbSet.Where(t => t.Date >= init || t.Date <= final).ToListAsync();
            return list;
        }
    }
}
