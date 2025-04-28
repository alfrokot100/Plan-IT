using Microsoft.EntityFrameworkCore;
using TeamApp.Data;
using TeamApp.DTOs.CommentDTO;
using TeamApp.DTOs.GoalDTO;
using TeamApp.DTOs.TaskDTO;
using TeamApp.DTOs.TeamDTO;
using TeamApp.DTOs.UserDTO;

namespace TeamApp.Services
{
    public class UserService
    {
        private readonly TeamDBContext context;

        //Dependancy injection
        public UserService(TeamDBContext _context)
        {
            context = _context;   
        }

        public async Task<List<CommentDTO>> GetAllComments()
        {
            var commentList = await context.Comments.Select(c => new CommentDTO
            {
                CommentID = c.CommentID,
                Text = c.Text,
                CreatedAt = c.CreatedAt
            }).ToListAsync();
            return commentList;
        }

        public async Task<List<GoalTDO>> GetAllGoals()
        {
            var goalList = await context.Goals.Select(g => new GoalTDO
            {
                GoalID = g.GoalID,
                Title = g.Title,
                Description = g.Description,
                Deadline = g.Deadline
            }).ToListAsync();
            return goalList;
        }

        public async Task<List<TaskDTO>> GetAllTasks()
        {
            var taskList = await context.Tasks.Select(t => new TaskDTO
            {
                TaskID = t.TaskID,
                Title = t.Title,
                DueDate = t.DueDate,
                IsDone = t.IsDone
            }).ToListAsync();
            return taskList;
        }

        public async Task<List<TeamDTO>> GetAllTeams()
        {
            var teamList = await context.Teams.Select(t => new TeamDTO
            {
                TeamID = t.TeamID,
                Description = t.Description,
                Name = t.Name
            }).ToListAsync();
            return teamList;
        }

        public async Task<List<UserDTO>> GetAllUsers()
        {
            var userList = await context.Users.Select(u => new UserDTO
            {
                UserID = u.UserID,
                Username = u.Username,
                Email = u.Email,
                Role = u.Role
            }).ToListAsync();
            return userList;
        }

    }
}
