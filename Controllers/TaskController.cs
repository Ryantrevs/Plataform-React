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
        private readonly ITaskListRepository taskListRepository;
        private readonly ICardRepository cardRepository;
        private readonly IScopeRepository scopeRepository;
        private readonly IUserTasklistRepository userTasklistRepository;
        private readonly UserManager<User> userManager;
        
        public TaskController(ITaskListRepository taskListRepository, ICardRepository cardRepository, IScopeRepository scopeRepository, IUserTasklistRepository userTasklistRepository,UserManager<User> userManager)
        {
            
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
            var user = await userManager.GetUserAsync(User); //retorna Usuario Logado
            var lista = userTasklistRepository.GetListId(user.Id);
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
        public List<ScopeViewModel> GetTasks([FromForm]String Id)
        {
            
            var list = scopeRepository.getScope(Id);
            List<ScopeViewModel> scope = cardRepository.getCards(list);
            return scope;
        }
        [HttpPost]
        [ActionName("InsertScope")]
        public String InsertScope([FromForm]String taskId)
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
        public async  Task<string> InsertTaskList([FromForm]string Titulo)
        {
            var id = Guid.NewGuid().ToString();
            var task = taskListRepository.InsertTaskList(id, Titulo);
            var user = await userManager.GetUserAsync(User);
            userTasklistRepository.InsertUserTasklist(task, user);
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
        [HttpPut]
        [ActionName("UpdateCard")]
        public String ChangeCard([FromForm]Card card)
        {
            Console.WriteLine(card.describe);
            return card.ToString();
            /*var card = GetCard(Id);
            card.Title = Titule;
            card.Describe = Describe;
            card.Percentage = Porc;
            cardRepository.UpdateCard(card);
            return "funcionou";*/
        }
        [HttpPost]
        public String ExcludeList(String Id)
        {
            userTasklistRepository.RemoveUserTaskList(Id);
            taskListRepository.RemoveTaskList(Id);
            return "teste";
        }
        [HttpPost]
        public async Task<String> AddUserOnList(String Email, String Id)
        {   
            var task = taskListRepository.GetTask(Id);
            var user = await userManager.FindByEmailAsync(Email);
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
