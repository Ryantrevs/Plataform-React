using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models
{
    public class Income
    {
        public string Id { get; set; }
        public string Description { get; set; }
        public double Value { get; set; }
        public DateTime Date { get; set; }
        public Finance Finance { get; set; }

    }
}
