using Microsoft.EntityFrameworkCore;
using SudokuShowdown.API.Models;

namespace SudokuShowdown.API.Data;

public static class SeedData
{
  public static void Initialize(IServiceProvider serviceProvider)
  {
    using (var context = new DataContext(
      serviceProvider.GetRequiredService<DbContextOptions<DataContext>>()
    ))
    {
      if (context.Tests.Any())
      {
        return;
      }

      context.Tests.Add(new Test {
        DateCreated = DateTime.Now,
        Value = "gggggg b"
      });
      context.SaveChanges();
    }
  }
}