﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PlataformaTccSuporte.Models;
using PlataformaTccSuporte.Data;

namespace PlataformaTccSuporte.Models.Repository
{
    public interface IClientRepository
    {
        public void CreateClient(Client cli);
        public Client GetClient(string id);
        public Client GetClientByMail(string email);
        public List<Client> ListClients();
        public void UpdateClient(Client cli);

    }

    public class ClientRepository : BaseRepository<Client>, IClientRepository
    {
        private readonly PlataformaTccSuporteContext context;

        public ClientRepository(PlataformaTccSuporteContext context) : base(context)
        {
            this.context = context;
        }

        public void CreateClient(Client cli)
        {
            dbSet.Add(cli);
        }

        public Client GetClientByMail(string email)
        {
            Client cli = dbSet.Where(t => t.Mail == email).SingleOrDefault();
            return cli;
        }

        public Client GetClient(string id)
        {
            Client cli = dbSet.Where(t => t.Id == id).SingleOrDefault();
            return cli;
        }
        public List<Client> ListClients()
        {
            return dbSet.Where(t => t.Id != null).ToList();
        }
        public void UpdateClient(Client cli)
        {
            dbSet.Update(cli);
            context.SaveChanges();
        }

    }
}
