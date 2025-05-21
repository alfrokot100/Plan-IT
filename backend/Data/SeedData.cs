using TeamApp.Models;

namespace TeamApp.Data
{
    public class SeedData
    {
        public static void InitialiseDB(TeamDBContext context)
        {
            if (context.Users.Any() || context.Projects.Any() || context.Tasks.Any()) { return; }


            var team = new Team
            {
                Name = "Test-team",
                Description = "Detta är ett test-team"
            };
            context.Teams.Add(team);



            var seedUsers = new List<User> {
                    new() {
                        Username = "Alice",
                        PasswordHash = "hash1",
                        Team = team,
                        Email = "alice@example.com",
                        Role = "Developer",
                        Description = "Alice is a frontend developer working on project Alpha."
                    },
                    new() {
                        Username = "Bob",
                        PasswordHash = "hash2",
                        Team = team,
                        Email = "bob@example.com",
                        Role = "Developer",
                        Description = "Bob is a backend developer working on project Beta."
                    }
                    };
            context.Users.AddRange(seedUsers);

            var seedGoals = new List<Project> {
                new(){
                    Title = "Project Alpha",
                    Description = "Description for Project Alpha",
                    Deadline = DateTime.Now.AddDays(10),
                    User = seedUsers[0]
                },
                new(){
                    Title = "Project Beta",
                    Description = "Description for Project Beta",
                    Deadline = DateTime.Now.AddDays(20),
                    User = seedUsers[1]
                }
            };
            context.Projects.AddRange(seedGoals);

            var seedTasks = new List<Models.Task>
            {
                new()
                {
                    Goal = seedGoals[0],
                    Title = "Design UI",
                    Status = "Ej påbörjad",
                    Description = "Create mockups",
                    DueDate = new DateTime(2025, 5, 15)
                },
                new()
                {
                    Goal = seedGoals[0],
                    Title = "Design UI",
                    Status = "Ej påbörjad",
                    Description = "Create mockups",
                    DueDate = new DateTime(2025, 5, 15)
                },
                new()
                {
                    Goal = seedGoals[0],
                    Title = "Design UI",
                    Status = "Ej påbörjad",
                    Description = "Create mockups",
                    DueDate = new DateTime(2025, 5, 15)
                },
                new()
                {
                    Goal = seedGoals[1],
                    Title = "API Integration",
                    Status = "Påbörjad",
                    Description = "Connect backend",
                    DueDate = new DateTime(2025, 5, 14)
                },
                new()
                {
                    Goal = seedGoals[1],
                    Title = "Build Frontend",
                    Status = "Påbörjad",
                    Description = "React Project",
                    DueDate = new DateTime(2025, 5, 23)
                },
                new()
                {
                    Goal = seedGoals[1],
                    Title = "API Integration",
                    Status = "Påbörjad",
                    Description = "Connect backend",
                    DueDate = new DateTime(2025, 5, 14)
                },
                new()
                {
                    Goal = seedGoals[0],
                    Title = "Write Tests",
                    Status = "Avslutad",
                    Description = "Unit tests",
                    DueDate = new DateTime(2025, 5, 10)
                }
            };

            context.AddRange(seedTasks);

            var seedUserTasks = new List<UserTask> {
                new() { user = seedUsers[0], task = seedTasks[0] },
                new() { user = seedUsers[0], task = seedTasks[1] },
                new() { user = seedUsers[0], task = seedTasks[2] },
                new() { user = seedUsers[0], task = seedTasks[6] },

                new() { user = seedUsers[1], task = seedTasks[3] },
                new() { user = seedUsers[1], task = seedTasks[4] },
                new() { user = seedUsers[1], task = seedTasks[5] }
            };
            context.UserTasks.AddRange(seedUserTasks);

            context.SaveChanges();
        }
    }
}
