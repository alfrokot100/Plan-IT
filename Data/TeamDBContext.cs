using Microsoft.EntityFrameworkCore;
using TeamApp.Models;
using Task = TeamApp.Models.Task;

namespace TeamApp.Data
{
    public class TeamDBContext : DbContext
    {
        public TeamDBContext(DbContextOptions<TeamDBContext> options) : base(options)
        {
            
        }

        //Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=master;Database=TeamAppDB;Integrated Security=True;Encrypt=False;Trust Server Certificate=False;

        //Agerar som en bro mot tabellen i databasen
        public DbSet<User> Users { get; set; }
        public DbSet<Goal> Goals { get; set; }
        public DbSet<LogEntry> LogEntrys { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<Task> Tasks { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<Comment> Comments { get; set; }








    }
}
