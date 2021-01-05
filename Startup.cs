using System;
using PlataformaTccSuporte.Models.Repository;
using PlataformaTccSuporte.Servicos;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using PlataformaTccSuporte.Data;
using Microsoft.AspNetCore.Identity;
using PlataformaTccSuporte.Models;
using System.Threading.Tasks;

namespace PlataformaTccSuporte
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllersWithViews();
            services.AddCors(options => options.AddDefaultPolicy(
                    buider => buider.AllowAnyOrigin()
                )); 
            services.AddTransient<IServicoEmail, MailService>();
            services.AddTransient<ITwilioService, TwilioService>();
            services.AddTransient<ITaskListRepository, TaskListRepository>();
            services.AddTransient<ICardRepository, CardRepository>();
            services.AddTransient<IScopeRepository, ScopeRepository>();
            services.AddTransient<IUserTasklistRepository, UserTasklistRepository>();
            services.AddTransient<IClientRepository, ClientRepository>();
            services.AddTransient<IJobRepository, JobRepository>();
            services.AddTransient<ISaleRepository, SaleRepository>();
            services.AddTransient<IBankDataRepository, BankDataRepository>();
            services.AddTransient<IFinanceRepository, FinanceRepository>();
            services.AddTransient<IExpensesRepository, ExpensesRepository>();
            services.AddTransient<IExpenseCategoryRepository, ExpenseCategoryRepository>();
            services.AddTransient<IIncomingRepository, IncomingRepository>();
            services.AddDbContext<PlataformaTccSuporteContext>(options => options.UseMySql(Configuration.GetConnectionString("bd")));
            services.AddIdentity<User, IdentityRole>(options =>
            {
                options.Password.RequiredLength = 4;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireDigit = false;
                options.Password.RequiredUniqueChars = 0;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.User.RequireUniqueEmail = true;
                options.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+/ ·ÈÌÛ˙‚ÍÓÙ˚„ı‚ÍÓÙ˚„ı";
                //options.SignIn.RequireConfirmedAccount=true;
                options.SignIn.RequireConfirmedEmail = true;


            })
                .AddEntityFrameworkStores<PlataformaTccSuporteContext>().AddDefaultTokenProviders();
            services.AddAuthorization(options =>
            {
                options.AddPolicy("DeleteRolePolicy", policy => policy.RequireClaim("Delete Role"));
            }
                );

            
            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IServiceProvider serviceProvider)
        {
            if (env.IsDevelopment())
            {
                app.UseExceptionHandler("/error-local-development");
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();
            app.UseCors();
            app.UseAuthentication();
            app.UseAuthorization();
            

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
            CreateUser(serviceProvider).Wait();
        }
        private async Task CreateUser(IServiceProvider serviceProvider)
        {
            var user = new User
            {
                Id = Guid.NewGuid().ToString(),
                Name = "admin",
                UserName = "admin",
                Email = "admin@gmail.com",
                EmailConfirmed = true
            };
            var userManager = serviceProvider.GetRequiredService<UserManager<User>>();
            await userManager.CreateAsync(user, "admin");
            //cadastraUserFromStartup();
            var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            string[] rolesNames = { "Admin", "User" };
            IdentityResult result;
            foreach (var namesRole in rolesNames)
            {
                var roleExist = await roleManager.RoleExistsAsync(namesRole);
                if (!roleExist)
                {
                    result = await roleManager.CreateAsync(new IdentityRole(namesRole));
                }
            }
            await userManager.AddToRoleAsync(user, "Admin");
        }
    }
}
