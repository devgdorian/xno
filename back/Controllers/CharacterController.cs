using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Xno.Models.Db;

namespace Xno.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CharacterController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        private readonly string _userId;

        public CharacterController(ApplicationDbContext dbContext)
        {
            _db = dbContext;
        }

        [HttpGet]
        [Route("get-current")]
        public async Task<ActionResult<Character>> GetCurrent()
        {
            return await _db.Characters.FirstAsync();
        }
    }
}