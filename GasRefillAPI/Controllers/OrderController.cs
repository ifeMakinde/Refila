using Microsoft.AspNetCore.Mvc;
using GasRefillAPI.Data;
using GasRefillAPI.Models;
using Microsoft.AspNetCore.Authorization;
using System.Linq;
using System.Security.Claims;
[Authorize]
[ApiController]
[Route("api/orders")]
public class OrderController : ControllerBase
{
    private readonly AppDbContext _context;

    public OrderController(AppDbContext context)
    {
        _context = context;
    }

    // CREATE ORDER
  [HttpPost("create")]
public IActionResult CreateOrder(GasOrder order)
{
    var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

    if (userId == null)
        return Unauthorized();

    order.UserId = int.Parse(userId);
    order.Status = "Pending";

    _context.GasOrders.Add(order);
    _context.SaveChanges();

    return Ok("Order created successfully");
}
    // GET ALL ORDERS
    [HttpGet]
    public IActionResult GetAllOrders()
    {
        var orders = _context.GasOrders.ToList();
        return Ok(orders);
    }
    [HttpGet("user/{userId}")]
public IActionResult GetUserOrders(int userId)
{
    var orders = _context.GasOrders
        .Where(o => o.UserId == userId)
        .ToList();

    return Ok(orders);
}

    // UPDATE STATUS
    [HttpPut("update/{id}")]
    public IActionResult UpdateStatus(int id, string status)
    {
        var order = _context.GasOrders.Find(id);

        if (order == null)
            return NotFound("Order not found");

        order.Status = status;
        _context.SaveChanges();

        return Ok("Order updated");
    }
}