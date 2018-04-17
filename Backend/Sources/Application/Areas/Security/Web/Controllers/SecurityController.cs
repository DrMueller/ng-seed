using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mmu.Ngs.WebApi.Areas.Security.Web.Dtos;

namespace Mmu.Ngs.WebApi.Areas.Security.Web.Controllers
{
    [Route("api/[controller]")]
    public class SecurityController : Controller
    {
        [HttpPost("LogIn")]
        public IActionResult LogIn([FromBody] LoginRequestDto loginRequest)
        {
            var challenge = Challenge();
            return Ok();
        }
    }
}
