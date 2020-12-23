using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models
{
    public class UserScope
    {
        public virtual User user { get; set; }
        public String UserId { get; set; }
        public String ScopeId { get; set; }
        public virtual Scope scope { get; set; }
    }
}
