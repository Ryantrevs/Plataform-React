using PlataformaTccSuporte.Models.ViewModel;
using PlataformaTccSuporte.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.Repository
{
    public interface ICardRepository
    {
        public Card GetCard(String id);
        public List<ScopeViewModel> getCards(List<ScopeViewModel> lista);
        public void UpdateCard(Card card);
        public void InsertCard(String titule, String ScopeId, String Descricao, String id);
        public void DeleteCard(String id);

    }
    public class CardRepository : BaseRepository<Card>,ICardRepository
    {
        public CardRepository(PlataformaTccSuporteContext context):base(context)
        {
        }

        public Card GetCard(String id)
        {
            return dbSet.Where(t => t.id == id).FirstOrDefault();
        }
        public List<ScopeViewModel> getCards(List<ScopeViewModel> lista)
        {
            List<CardViewModel> cards = new List<CardViewModel>();
            foreach(var item in lista)
            {
                var teste = dbSet.Where(x => x.ScopeId == item.Id).Select(x => new CardViewModel(x.title,x.id)).ToList();
                item.AddCards(teste);
            }
            return lista;
        }
        public void UpdateCard(Card card)
        {
            dbSet.Update(card);
            context.SaveChanges();
        }
        public void InsertCard(String titule, String ScopeId, String Descricao,String id)
        {
            Card card = new Card(id, titule, Descricao, 0, ScopeId);
            dbSet.Add(card);
            context.SaveChanges();
        }
        public void DeleteCard(String id)
        {
            dbSet.Remove(GetCard(id));
            context.SaveChanges();
        }
    }
}
