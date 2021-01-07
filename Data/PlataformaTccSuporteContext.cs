using PlataformaTccSuporte.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace PlataformaTccSuporte.Data
{
    public class PlataformaTccSuporteContext:IdentityDbContext
    {
        public PlataformaTccSuporteContext(DbContextOptions options) : base(options)
        {

        }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<User>().HasMany(t => t.Sales);

            builder.Entity<BankData>().HasKey(t => t.Id);

            builder.Entity<User>().HasOne(t => t.BankAccount).WithOne(d => d.User).HasForeignKey<User>(t => t.BankAccountId).HasPrincipalKey<BankData>(t => t.Id);

            builder.Entity<Client>().HasKey(t => t.Id);
            builder.Entity<Client>().HasMany(t => t.Sales);
            builder.Entity<Client>().HasMany(t => t.Jobs);

            builder.Entity<Sale>().HasKey(t => t.Id);
            builder.Entity<Sale>().HasOne(t => t.User).WithMany(u => u.Sales).HasForeignKey(t => t.UserId).HasPrincipalKey(u => u.Id);
            builder.Entity<Sale>().HasOne(t => t.Client).WithMany(c => c.Sales).HasForeignKey(t => t.ClientId).HasPrincipalKey(c => c.Id);
            builder.Entity<Sale>().HasOne(t => t.Job).WithMany(j => j.Sales).HasForeignKey(t => t.JobId).HasPrincipalKey(j => j.Id);

            builder.Entity<Job>().HasKey(t => t.Id);
            builder.Entity<Job>().HasOne(t => t.Client).WithMany(c => c.Jobs).HasForeignKey(t => t.ClientId).HasPrincipalKey(c => c.Id);


            builder.Entity<Card>().HasKey(t => t.id);


            builder.Entity<TaskList>().HasKey(t => t.Id);
            builder.Entity<TaskList>().HasMany(t => t.Scopes).WithOne(t => t.taskList).HasForeignKey(t => t.TaskId);

            builder.Entity<Scope>().HasKey(t => t.id);
            builder.Entity<Scope>().HasMany(t => t.Cards).WithOne(t => t.scope).HasForeignKey(t => t.ScopeId);

            builder.Entity<UserScope>().HasKey(x => new { x.ScopeId, x.UserId });
            builder.Entity<UserScope>().HasOne(t => t.user).WithMany(x => x.UserScope).HasForeignKey(t => t.UserId);
            builder.Entity<UserScope>().HasOne(t => t.scope).WithMany(x => x.UserScope).HasForeignKey(t => t.ScopeId);

            builder.Entity<UserTasklist>().HasKey(x => new { x.TaskId, x.UserId });
            builder.Entity<UserTasklist>().HasOne(t => t.Users).WithMany(x => x.UserTasklist).HasForeignKey(y => y.UserId);
            builder.Entity<UserTasklist>().HasOne(t => t.TaskLists).WithMany(x => x.UserTasklist).HasForeignKey(y => y.TaskId);

            builder.Entity<Expenses>().HasKey(t => t.Id);
            builder.Entity<Expenses>().HasOne(t => t.ExpenseCategory).WithMany(t => t.Expenses);
            builder.Entity<Income>().HasKey(t => t.Id);

            builder.Entity<Finance>().HasKey(t => t.Id);
            builder.Entity<Finance>().HasMany(t => t.Incomes).WithOne(t => t.Finance);
            builder.Entity<Finance>().HasMany(t => t.Expenses).WithOne(t => t.Finance);


        }

    }
}
