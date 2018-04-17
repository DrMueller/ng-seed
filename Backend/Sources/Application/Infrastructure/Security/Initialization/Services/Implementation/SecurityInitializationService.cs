using System;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Microsoft.IdentityModel.Tokens;
using Mmu.Ngs.WebApi.Infrastructure.Security.SecurityKeys;
using Mmu.Ngs.WebApi.Infrastructure.Settings.Services;

namespace Mmu.Ngs.WebApi.Infrastructure.Security.Initialization.Services.Implementation
{
    public class SecurityInitializationService : ISecurityInitializationService
    {
        private readonly ISecurityKeyFactory _securityKeyFactory;
        private readonly IAppSettingsProvider _appSettingsProvider;

        public SecurityInitializationService(ISecurityKeyFactory securityKeyFactory, IAppSettingsProvider appSettingsProvider)
        {
            _securityKeyFactory = securityKeyFactory;
            _appSettingsProvider = appSettingsProvider;
        }

        public void InitializeSecurity(IServiceCollection services)
        {
            InitializeJwtAuthentication(services);
        }

        private TokenValidationParameters CreateTokenValidationParameters()
        {
            var securityKey = _securityKeyFactory.Create();

            return new TokenValidationParameters
            {
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateIssuerSigningKey = false,
                RequireExpirationTime = false,
                ValidateLifetime = true,
                ClockSkew = TimeSpan.Zero,
                IssuerSigningKey = securityKey
            };
        }

        private void InitializeJwtAuthentication(IServiceCollection services)
        {
            var tokenValidationParameters = CreateTokenValidationParameters();
            var azureAdSettings = _appSettingsProvider.GetAppSettings().AzureAdSettings;

            services.AddAuthentication(
                options =>
                {
                    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                    options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                }
            ).AddOpenIdConnect(
                options =>
                {
                    options.Authority = "https://login.microsoftonline.com/DrMuellersAD.onmicrosoft.com";
                    options.ClientId = azureAdSettings.ClientId;
                    options.ResponseType = OpenIdConnectResponseType.IdToken;
                    options.TokenValidationParameters = tokenValidationParameters;
                })
               .AddCookie();
        }
    }
}