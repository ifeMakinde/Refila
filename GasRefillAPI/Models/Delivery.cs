namespace GasRefillAPI.Models
{
    public class Delivery
    {
        public int Id { get; set; }

        public int OrderId { get; set; }   // Link to GasOrder

        public string DeliveryPerson { get; set; }= default!;

        public string Status { get; set; } = "Assigned"; 
        // Assigned → OnTheWay → Delivered

        public DateTime AssignedAt { get; set; } = DateTime.Now;
    }
}