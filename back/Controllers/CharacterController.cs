using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Xno.Helpers;
using Xno.Models.Db;

namespace Xno.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CharacterController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public CharacterController(ApplicationDbContext dbContext)
        {
            _db = dbContext;
        }

        [HttpGet]
        [Authorize]
        [Route("get-current")]
        public async Task<ActionResult<Character>> GetCurrent()
        {
            string userId = User.FindFirst(p => p.Type == "id")?.Value;
            AppUser user = _db.AppUsers.Find(userId);

            return await _db.Characters.Where(p => p.User == user && p.IsCurrent).FirstAsync();
        }
    }
}