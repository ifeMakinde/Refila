using Microsoft.AspNetCore.Mvc;
using GasRefillAPI.Data;
using GasRefillAPI.Models;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Security.Cryptography;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System;
using System.Linq;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _context;

    public AuthController(AppDbContext context)
    {
        _context = context;
    }

    // =========================
    // HASH PASSWORD METHOD
    // =========================
    private string HashPassword(string password)
    {
        byte[] salt = new byte[16];

        using (var rng = RandomNumberGenerator.Create())
        {
            rng.GetBytes(salt);
        }

        string hash = Convert.ToBase64String(
            KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 10000,
                numBytesRequested: 32
            )
        );

        return $"{Convert.ToBase64String(salt)}.{hash}";
    }

    // =========================
    // REGISTER
    // =========================
    [HttpPost("register")]
    public IActionResult Register(User user)
    {
        user.PasswordHash = HashPassword(user.PasswordHash);

        _context.Users.Add(user);
        _context.SaveChanges();

        return Ok("User registered successfully");
    }

    // =========================
    // LOGIN (simple version)
    // =========================
   [HttpPost("login")]
public IActionResult Login(string email, string password)
{
    var user = _context.Users.FirstOrDefault(u => u.Email == email);

    if (user == null)
        return Unauthorized("Invalid credentials");

    // ⚠️ (temporary simple check — we will improve later)
    if (user.PasswordHash != password)
        return Unauthorized("Invalid credentials");

    // =========================
    // CREATE JWT TOKEN
    // =========================

    var claims = new[]
    {
        new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
        new Claim(ClaimTypes.Email, user.Email),
        new Claim(ClaimTypes.Role, user.Role ?? "Customer")
    };

    var key = new SymmetricSecurityKey(
        Encoding.UTF8.GetBytes("SUPER_SECRET_KEY_12345")
    );

    var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

    var token = new JwtSecurityToken(
        claims: claims,
        expires: DateTime.Now.AddHours(2),
        signingCredentials: creds
    );

    var jwt = new JwtSecurityTokenHandler().WriteToken(token);

    return Ok(new
    {
        token = jwt,
        message = "Login successful"
    });
}
}