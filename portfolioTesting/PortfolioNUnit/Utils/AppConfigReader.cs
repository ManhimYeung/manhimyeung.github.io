using System.Configuration;

namespace LumaAutomatedWebTestingProject
{
    public static class AppConfigReader
    {
        public static readonly string BaseUrl = ConfigurationManager.AppSettings["base_url"];
    }
}
