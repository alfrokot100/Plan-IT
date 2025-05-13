using TeamApp.Models;

namespace TeamApp.DTOs.UserDTO
{
    public class UserDTO
    {
        public int UserID { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public virtual ICollection<UserTask> UserTasks { get; set; }
    }
}
