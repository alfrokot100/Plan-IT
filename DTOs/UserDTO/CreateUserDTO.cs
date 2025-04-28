using System.ComponentModel.DataAnnotations;

namespace TeamApp.DTOs.UserDTO
{
    public class CreateUserDTO
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 2)]
        public string Username { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 2)]
        public string Password { get; set; }
        public string? Role { get; set; }
    }
}
