using System.ComponentModel.DataAnnotations;

namespace TeamApp.DTOs.TaskDTO
{
    public class CreateTaskDTO
    {
        [Required]
        public int UserID { get; set; }
        [Required]
        public int TaskID { get; set; }
        [Required]
        public string Title { get; set; }
        public bool? IsDone { get; set; }
    }
}
