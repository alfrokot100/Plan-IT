using System.ComponentModel.DataAnnotations;

namespace TeamApp.DTOs.GoalDTO
{
    public class CreateGoalDTO
    {
        [Required]
        public int UserID { get; set; }
        [Required]
        [StringLength(80)]
        public string Description { get; set; }
        public string? Priority { get; set; }

        [Required]
        public string Title { get; set; }
    }
}
