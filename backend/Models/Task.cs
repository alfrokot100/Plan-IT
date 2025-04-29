using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TeamApp.Models
{
    public class Task
    {
        [Key]
        public int TaskID { get; set; }

        // Foreign Keys + navigation properties

        [ForeignKey("Goal")]
        public int? GoalID_FK { get; set; }
        public virtual Goal? Goal { get; set; }

        [ForeignKey("User")]
        public int UserID_FK { get; set; }
        public virtual User User { get; set; }

        [Required]
        [StringLength(25, MinimumLength = 5)]
        public string Title { get; set; }
        [Required]
        [RegularExpression("^(Avslutad|Påbörjad|Pausad)$", ErrorMessage = "Ogiltig status")]
        public string Status { get; set; }

        [Required]
        public DateTime? DueDate { get; set; }

        public virtual ICollection<Comment> Comments { get; set; } = new List<Comment>();



    }
}
