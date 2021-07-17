using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Xno.Models.Db;

namespace Xno.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public TestController(ApplicationDbContext dbContext)
        {
            _db = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<AppUser>>> Get()
        {
            return await _db.AppUsers.ToListAsync();
        }
    }
}
