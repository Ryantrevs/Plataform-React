using PlataformaTccSuporte.Models.ViewModel;
using PlataformaTccSuporte.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.Repository
{
    public interface IScopeRepository
    {
        public List<ScopeViewModel> getScope(String id);
        public bool InsertRepository(String id, String taskId);
        public void ChangeTitle(String id, String titule);
    }
    public class ScopeRepository:BaseRepository<Scope>,IScopeRepository
    {
        public ScopeRepository(PlataformaTccSuporteContext context):base(context)
        {
        }

        public List<ScopeViewModel> getScope(String id)
        {
            return dbSet.Where(t=>t.TaskId==id).Select(x=>new ScopeViewModel(x.Titule, x.id)).ToList();
        }
        public bool InsertRepository(String id, String taskId)
        {
            var resultado = dbSet.Add(new Scope(id, "Insira seu titulo aqui", taskId)).State;
            context.SaveChanges();
            if (resultado.ToString() == "Added")
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public void ChangeTitle(String id, String titule)
        {
            var scope = dbSet.Where(t => t.id == id).FirstOrDefault();
            scope.Titule = titule;
            dbSet.Update(scope);
            context.SaveChanges();
        }
    }
}
