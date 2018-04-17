using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mmu.Ngs.WebApi.Areas.Security.Web.Dtos
{
    public class LoginRequestDto
    {
        public string Name { get; set; }

        public string Password { get; set; }
    }
}
