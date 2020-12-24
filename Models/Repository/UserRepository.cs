using PlataformaTccSuporte.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Models.Repository
{
    public interface IUserRepository
    {
        public Task CreateUser(User newUser);
        public User GetUser(String id);

    }
    public class UserRepository : BaseRepository<User>, IUserRepository
    {

        public UserRepository(PlataformaTccSuporteContext context):base(context)
        {
        }

        public User GetUser(String id)
        {
            User user = dbSet.Where(t => t.Id == id).SingleOrDefault();
            return user;
        }
        public async Task CreateUser(User newUser)
        {
            dbSet.Add(newUser);
            await context.SaveChangesAsync();
        }

    }
}
