namespace TeamApp.DTOs.TaskDTO
{
    public class TaskDTO
    {
        public int TaskID { get; set; }
        public string Title { get; set; }
        public string Status { get; set; }
        public DateTime? DueDate { get; set; }
    }
}
