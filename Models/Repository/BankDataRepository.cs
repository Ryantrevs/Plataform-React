using PlataformaTccSuporte.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.Repository
{
    public interface IBankDataRepository
    {
        public void CreateBankData(BankData dadosBancarios);
        public void UpdateBankData(BankData dadosBancarios);
        public BankData GetBankData(string Id);        
    }
    public class BankDataRepository :BaseRepository<BankData>, IBankDataRepository
    {
        private readonly PlataformaTccSuporteContext context;

        public BankDataRepository(PlataformaTccSuporteContext context) : base(context)
        {
            this.context = context;
        }
        public void CreateBankData(BankData dadosBancarios)
        {
            dbSet.Add(dadosBancarios);
        }
        public void UpdateBankData(BankData dadosBancarios)
        {
            dbSet.Update(dadosBancarios);
            context.SaveChanges();
        }
        public BankData GetBankData(string Id)
        {
            var dados = dbSet.Where(t => t.Id == Id).SingleOrDefault();
            return dados;
        }



    }
}
