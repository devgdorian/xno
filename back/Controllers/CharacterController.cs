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
        [Route("current/get")]
        [Authorize]
        public async Task<ActionResult<Character>> GetCurrent()
        {
            // TODO user in basecontroller
            string userId = User.FindFirst(p => p.Type == "id")?.Value;
            AppUser user = _db.AppUsers.Find(userId);

            var character = await _db.Characters
                .Include(p => p.Race)
                .Include(p => p.Perks)
                .Include(p => p.Skillpoints)
                .ThenInclude(p => p.Skill)
                .Where(p => p.User == user && p.IsCurrent).FirstAsync();

            return Ok(new { 
                character = new {
                    name = character.Name,
                    healthstatus = character.HealthStatus.ToString(),
                    race = character.Race.Name,
                    perks = character.Perks,
                    Skillpoint = character.Skillpoints
                }
            });
        }

        [HttpGet]
        [Route("current/get-infos")]
        [Authorize]
        public async Task<JsonResult> GetCurrentInfos()
        {
            string userId = User.FindFirst(p => p.Type == "id")?.Value;
            AppUser user = _db.AppUsers.Find(userId);

            var character = await _db.Characters.Include(p => p.Race).Where(p => p.User == user && p.IsCurrent).SingleAsync();

            return new JsonResult(new { 
                name = character.Name,
                healthstatus = character.HealthStatus.ToString(),
                race = character.Race.Name,
            });
        }
    }
}