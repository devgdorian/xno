using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Xno.Models;

namespace Xno.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        private UserManager<AppUser> _userManager = null;
        private SignInManager<AppUser> _signInManager = null;

        public TestController(ApplicationDbContext dbContext)
        {
            _db = dbContext;
            //_userManager = new UserManager<ApplicationUser>();
        }

        [HttpGet]
        public ActionResult<List<AppUser>> Get()
        {
            return _db.AppUsers.ToList();
        }
    }
}
