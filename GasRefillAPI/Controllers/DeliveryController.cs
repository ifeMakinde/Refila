using Microsoft.AspNetCore.Mvc;
using GasRefillAPI.Data;
using GasRefillAPI.Models;
using System.Linq;

[ApiController]
[Route("api/delivery")]
public class DeliveryController : ControllerBase
{
    private readonly AppDbContext _context;

    public DeliveryController(AppDbContext context)
    {
        _context = context;
    }

    // ASSIGN DELIVERY TO ORDER
    [HttpPost("assign")]
    public IActionResult AssignDelivery(int orderId, string deliveryPerson)
    {
        var order = _context.GasOrders.Find(orderId);

        if (order == null)
            return NotFound("Order not found");

        var delivery = new Delivery
        {
            OrderId = orderId,
            DeliveryPerson = deliveryPerson,
            Status = "Assigned"
        };

        order.Status = "Approved";

        _context.Deliveries.Add(delivery);
        _context.SaveChanges();

        return Ok("Delivery assigned");
    }

    // UPDATE DELIVERY STATUS
    [HttpPut("update/{id}")]
    public IActionResult UpdateDeliveryStatus(int id, string status)
    {
        var delivery = _context.Deliveries.Find(id);

        if (delivery == null)
            return NotFound("Delivery not found");

        delivery.Status = status;

        // OPTIONAL: update order when delivered
        if (status == "Delivered")
        {
            var order = _context.GasOrders.Find(delivery.OrderId);
            if (order != null)
                order.Status = "Delivered";
        }

        _context.SaveChanges();

        return Ok("Delivery updated");
    }

    // GET ALL DELIVERIES
    [HttpGet]
    public IActionResult GetDeliveries()
    {
        var deliveries = _context.Deliveries.ToList();
        return Ok(deliveries);
    }
}