using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models
{
    public class TaskList
    {
        public String Id { get; set; }
        public String Titule { get; set; }
        public List<Scope> Scopes { get; set; }
        public virtual List<UserTasklist> UserTasklist { get; set; }

        public TaskList(string id, string titule)
        {
            Id = id;
            Titule = titule;
        }

        public TaskList(String Titulo, Scope scope, User user)
        {
            this.Titule = Titulo;
            Scopes.Add(scope);
            
        }
        public TaskList()
        {

        }

        public TaskList(string titule)
        {
            Titule = titule;
        }
    }
}
