using PlataformaTccSuporte.Models.Repository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlataformaTccSuporte.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class JobController : Controller
    {

        private readonly IJobRepository JobRepository;
        public JobController(IJobRepository JobRepository)
        {
            this.JobRepository = JobRepository;
        }


        [HttpGet]
        public IActionResult Index()
        {
            var jobs = JobRepository.GetJobs();
            return View(jobs);
        }
    }
}
