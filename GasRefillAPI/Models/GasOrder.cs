namespace GasRefillAPI.Models
{
    public class GasOrder
    {
        public int Id { get; set; }

        public int UserId { get; set; }
        

        public string Address { get; set; }=default!;

        public string CylinderSize { get; set; }= default!;
        public string Status { get; set; } = "Pending";

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}