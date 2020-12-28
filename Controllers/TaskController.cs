using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PlataformaTccSuporte.Models;
using PlataformaTccSuporte.Models.Repository;
using PlataformaTccSuporte.Models.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace PlataformaTccSuporte.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class TaskController : Controller
    {
        private readonly IUserRepository userRepository;
        private readonly ITaskListRepository taskListRepository;
        private readonly ICardRepository cardRepository;
        private readonly IScopeRepository scopeRepository;
        private readonly IUserTasklistRepository userTasklistRepository;
        private readonly UserManager<User> userManager;
        
        public TaskController(IUserRepository userRepository, ITaskListRepository taskListRepository, ICardRepository cardRepository, IScopeRepository scopeRepository, IUserTasklistRepository userTasklistRepository,UserManager<User> userManager)
        {
            this.userRepository = userRepository;
            this.taskListRepository = taskListRepository;
            this.cardRepository = cardRepository;
            this.scopeRepository = scopeRepository;
            this.userTasklistRepository = userTasklistRepository;
            this.userManager = userManager;
            
        }

        [HttpGet]
        [ActionName("Organization")]
        public async Task<List<TasksViewModel>> Organization()
        {
            User user2 = await userManager.FindByIdAsync("eafbf9ab-b705-4ba8-afa9-7dde116d4432"); //retorna Usuario Logado
            var lista = userTasklistRepository.GetListId(user2.Id);
            List<TasksViewModel> tasks = taskListRepository.getTasks(lista);
            return tasks;
        }

        [HttpPost]
        [ActionName("GetCard")]
        public Card GetCard([FromForm]String Id)
        {
            var task = cardRepository.GetCard(Id);
            return task;
            //return "teste controller";
        }

        [HttpPost]
        [ActionName("GetTasks")]
        public List<ScopeViewModel> GetTasks(String Id)
        {
            
            var list = scopeRepository.getScope(Id);
            var cards = cardRepository.getCards(list);
            return cards;
        }
        [HttpPost]
        [ActionName("InsertScope")]
        public String InsertScope(String taskId)
        {
            var id = Guid.NewGuid().ToString();
            var resultado = scopeRepository.InsertRepository(id, taskId);
            if(resultado == true)
            {
                return id;
            }
            else
            {
                return resultado.ToString();
            }
        }
        [HttpPost]
        [ActionName("InsertTaskList")]
        public async  Task<string> InsertTaskList(string Titulo)
        {
            var id = Guid.NewGuid().ToString();
            var task = taskListRepository.InsertTaskList(id, Titulo);
            var user = userRepository.GetUser("teste01");
            var user2 = await userManager.GetUserAsync(User);
            userTasklistRepository.InsertUserTasklist(task, user2);

            return id;
        }
        [HttpPost]
        [ActionName("ChangeScopeTitle")]
        public String changeScopeTitle(String titule, String id)
        {
            scopeRepository.ChangeTitle(id, titule);
            return id;
        }
        [HttpPost]
        [ActionName("ChangeCardScope")]
        public string ChangeCardScope(String IdCard, String ScopeId)
        {
            Card c = cardRepository.GetCard(IdCard);
            c.ScopeId = ScopeId;
            cardRepository.UpdateCard(c);
            return "tipo";
        }
        [HttpPost]
        [ActionName("InsertCard")]
        public String InsertCard (String ScopeId,String Titule, String Describe)
        {
            var id = Guid.NewGuid().ToString();
            cardRepository.InsertCard(Titule, ScopeId, Describe,id);
            return id;
        }
        public String DeleteCard(String Id)
        {
            cardRepository.DeleteCard(Id);
            return "funcionou";
        }
        [HttpPost]
        public String ChangeCard(String Id,String Titule,String Describe,int Porc)
        {
            var card = GetCard(Id);
            card.Titule = Titule;
            card.Describe = Describe;
            card.Percentage = Porc;
            cardRepository.UpdateCard(card);
            return "funcionou";
        }
        [HttpPost]
        public String ExcludeList(String Id)
        {
            userTasklistRepository.RemoveUserTaskList(Id);
            taskListRepository.RemoveTaskList(Id);
            return "teste";
        }
        [HttpPost]
        public String AddUserOnList(String Email, String Id)
        {
            userRepository.GetUser(Email);
            var task = taskListRepository.GetTask(Id);
            var user = userRepository.GetUser("teste01");
            userTasklistRepository.InsertUserTasklist(task, user);
            return "teste";
        }
        [HttpGet]
        public String UsersOnList(String Id)
        {
            userTasklistRepository.GetUserTaskList(Id);
            return "Teste";
        }
        [HttpPost]
        public String ExcludeUserOnList(String userId, String Id)
        {
            userTasklistRepository.RemoveUser(userId, Id);
            return "teste";
        }
        [HttpPost]
        public String UpdateTitule(String Id,String Titule)
        {
            taskListRepository.UpdateTaskList(Id, Titule);
            return "teste";
        }

    }
}
