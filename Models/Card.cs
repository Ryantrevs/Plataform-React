using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models
{
    public class Card
    {
        public String Id { get; set; }
        public String Titule { get; set; }
        public String Describe { get; set; }
        public int Percentage { get; set; }

        public List<String> Comments = new List<string>();
        public Scope Scope { get; set; }
        public String ScopeId { get; set; }

        public Card(String Titule, String Describe)
        {
            this.Titule = Titule;
            this.Describe = Describe;
        }
        public Card()
        {
        }

        public Card(string id, string titulo, string describe,int percentage, string scopeId)
        {
            this.Id = id;
            this.Titule = titulo;
            Percentage = percentage;
            Describe = describe;
            ScopeId = scopeId;
        }
    }
}
