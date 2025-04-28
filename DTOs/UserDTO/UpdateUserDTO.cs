using System.ComponentModel.DataAnnotations;

namespace TeamApp.DTOs.UserDTO
{
    public class UpdateUserDTO
    {
        [Required]
        public int UserID { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 2)]
        public string Username { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
