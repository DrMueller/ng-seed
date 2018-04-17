namespace Mmu.Ngs.WebApi.Infrastructure.Settings.Models.SubSettings
{
    public class AzureAdSettings
    {
        public string ClientId { get; set; }
        public string ClientSecret { get; set; }
        public string Domain { get; set; }
        public string Instance { get; set; }
        public string TenantId { get; set; }
    }
}