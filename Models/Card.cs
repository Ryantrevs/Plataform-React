using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models
{
    public class Card
    {
        public String id { get; set; }
        public String title { get; set; }
        public String describe { get; set; }
        public int percentage { get; set; }

        public List<String> Comments = new List<string>();
        public Scope scope { get; set; }
        public String ScopeId { get; set; }

        public Card(String Titule, String Describe)
        {
            this.title = Titule;
            this.describe = Describe;
        }
        public Card()
        {
        }

        public Card(string id, string titulo, string describe,int percentage, string scopeId)
        {
            this.id = id;
            this.title = titulo;
            percentage = percentage;
            describe = describe;
            ScopeId = scopeId;
        }
    }
}
