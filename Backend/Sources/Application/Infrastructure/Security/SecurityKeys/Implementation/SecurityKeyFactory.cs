using System.Text;
using Microsoft.IdentityModel.Tokens;
using Mmu.Ngs.WebApi.Infrastructure.Settings.Services;

namespace Mmu.Ngs.WebApi.Infrastructure.Security.SecurityKeys.Implementation
{
    public class SecurityKeyFactory : ISecurityKeyFactory
    {
        private readonly IAppSettingsProvider _appSettingsProvider;

        public SecurityKeyFactory(IAppSettingsProvider appSettingsProvider)
        {
            _appSettingsProvider = appSettingsProvider;
        }

        public SecurityKey Create()
        {
            var appSettings = _appSettingsProvider.GetAppSettings();
            var utf8EncodedSecret = Encoding.UTF8.GetBytes(appSettings.SecuritySettings.SecretKey);
            var result = new SymmetricSecurityKey(utf8EncodedSecret);

            return result;
        }
    }
}