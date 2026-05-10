using Microsoft.EntityFrameworkCore;
using GasRefillAPI.Models; // 👈 IMPORTANT (where User is)

namespace GasRefillAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<GasOrder> GasOrders { get; set; }
        public DbSet<Delivery> Deliveries { get; set; }
    }
}