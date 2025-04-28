namespace TeamApp.DTOs.TaskDTO
{
    public class TaskDTO
    {
        public int TaskID { get; set; }
        public string Title { get; set; }
        public bool IsDone { get; set; }
        public DateTime? DueDate { get; set; }
    }
}
