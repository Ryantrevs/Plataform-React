using PlataformaTccSuporte.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.Repository
{
    public interface ISaleRepository
    {
        public void CreateSale(Sale s);
        public Sale GetSale(string id);
        public List<Sale> GetSales();
        public void UpdateSale(Sale sale);
        public void DeleteSale(Sale sale);
    }
    public class SaleRepository : BaseRepository<Sale>, ISaleRepository
    {
        private readonly PlataformaTccSuporteContext context;
        public SaleRepository(PlataformaTccSuporteContext context) : base(context)
        {
            this.context = context;
        }
        public void CreateSale(Sale s)
        {

            dbSet.Add(s);
            context.SaveChanges();
        }
        public Sale GetSale(string id)
        {
            Sale s = dbSet.Where(t => t.Id == id).SingleOrDefault();
            return s;
        }
        public List<Sale> GetSales()
        {
            return dbSet.Where(t => t.Id != null).ToList();
        }
        public void UpdateSale(Sale sale)
        {
            dbSet.Update(sale);
            context.SaveChanges();
        }
        public void DeleteSale(Sale sale)
        {
            dbSet.Remove(sale);
            context.SaveChanges();
        }

    }
}
