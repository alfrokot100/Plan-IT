using System.ComponentModel.DataAnnotations;

namespace TeamApp.DTOs.GoalDTO
{
    public class UpdateGoalDTO
    {
        [Required]
        public int UserID { get; set; }

        [Required]
        public int GoalID { get; set; }

        [Required]
        public string Title { get; set; }
        [Required]
        [StringLength(80)]
        public string Description { get; set; }

    }
}
