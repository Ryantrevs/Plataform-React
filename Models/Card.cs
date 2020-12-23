using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models
{
    public class Card
    {
        public String id { get; set; }
        public String Titulo { get; set; }
        public String Descricao { get; set; }
        public int Porcentagem { get; set; }
        public List<String> Comentarios = new List<string>();
        public Scope Scope { get; set; }
        public String ScopeId { get; set; }

        public Card(String Titulo, String Descricao)
        {
            this.Titulo = Titulo;
            this.Descricao = Descricao;
        }
        public Card()
        {
        }

        public Card(string id, string titulo, string descricao,int porcentagem, string scopeId)
        {
            this.id = id;
            this.Titulo = titulo;
            Porcentagem = porcentagem;
            Descricao = descricao;
            ScopeId = scopeId;
        }
    }
}
