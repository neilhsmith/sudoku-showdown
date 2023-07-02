using Microsoft.AspNetCore.Mvc;
using SudokuShowdown.API.Data;

namespace SudokuShowdown.API.Controllers;

[ApiController]
[Route("[controller]")]
public class TestController: Controller
{
  private readonly DataContext _context;

  public TestController(DataContext context)
  {
    _context = context;
  }

  [HttpGet]
  public IActionResult Get() {
    var value = _context.Tests.FirstOrDefault()?.Value;

    if (value == null) {
      return NotFound();
    }


    return Ok(new {
      Data = value
    });
  }
}