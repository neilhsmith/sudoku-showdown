using Microsoft.EntityFrameworkCore;
using SudokuShowdown.API.Models;

namespace SudokuShowdown.API.Data;

public class DataContext : DbContext
{
  public DataContext(DbContextOptions<DataContext> options) : base(options)
  {
  }

  public DbSet<Test> Tests { get; set; }
}