using Microsoft.IdentityModel.Tokens;

namespace Mmu.Ngs.WebApi.Infrastructure.Security.SecurityKeys
{
    public interface ISecurityKeyFactory
    {
        SecurityKey Create();
    }
}