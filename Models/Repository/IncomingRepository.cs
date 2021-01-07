﻿using Microsoft.EntityFrameworkCore;
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
        public String insertIncoming(Income income);
    }
    public class IncomingRepository : BaseRepository<Income>,IIncomingRepository
    {
        public IncomingRepository(PlataformaTccSuporteContext context) : base(context)
        {
        }

        public String insertIncoming(Income income)
        {
            dbSet.Add(income);
            var response = context.SaveChanges();
            return response.ToString();
        }

        public async Task<List<Income>> getIncomingPerDate(DateTime init,DateTime final)
        {
            List<Income> list = await dbSet.Where(t => t.Date >= init || t.Date <= final).ToListAsync();
            return list;
        }
    }
}
