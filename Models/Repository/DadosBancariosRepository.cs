using PlataformaTccSuporte.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.Repository
{
    public interface IDadosBancariosRepository
    {
        public void CreateDadosBancarios(DadosBancarios dadosBancarios);
        public void UpdateDadosBancarios(DadosBancarios dadosBancarios);
        public DadosBancarios GetDadosBancarios(string Id);        
    }
    public class DadosBancariosRepository :BaseRepository<DadosBancarios>, IDadosBancariosRepository
    {
        private readonly PlataformaTccSuporteContext context;

        public DadosBancariosRepository(PlataformaTccSuporteContext context) : base(context)
        {
            this.context = context;
        }
        public void CreateDadosBancarios(DadosBancarios dadosBancarios)
        {
            dbSet.Add(dadosBancarios);
        }
        public void UpdateDadosBancarios(DadosBancarios dadosBancarios)
        {
            dbSet.Update(dadosBancarios);
            context.SaveChanges();
        }
        public DadosBancarios GetDadosBancarios(string Id)
        {
            var dados = dbSet.Where(t => t.Id == Id).SingleOrDefault();
            return dados;
        }



    }
}
