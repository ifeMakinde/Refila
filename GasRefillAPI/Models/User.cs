namespace GasRefillAPI.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }=default!;
        public string PasswordHash { get; set; }= string.Empty;
        public string Role { get; set; }= "User"; // Default role
    }
}