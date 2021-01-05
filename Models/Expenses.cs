using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models
{
    public class Expenses
    {
        public string Id { get; set; }
        public string Description { get; set; }
        public double Value { get; set; }
        public DateTime Date { get; set; }
        public Finance Finance { get; set; }
        public User user { get; set; }
        public ExpenseCategory ExpenseCategory { get; set; }

        public Expenses()
        {

        }

        public Expenses(string id, string description, double value, DateTime date)
        {
            Id = id;
            Description = description;
            Value = value;
            Date = date;
        }
    }
}
