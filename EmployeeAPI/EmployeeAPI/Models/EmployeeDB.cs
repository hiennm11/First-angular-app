using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace EmployeeAPI.Models
{
    public class EmployeeDB : DbContext
    {
        public EmployeeDB() : base("EmployeeDB")
        {

        }

        public DbSet<Employee> Employees { get; set; }
    }
}