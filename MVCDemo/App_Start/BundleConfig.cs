using System.Web;
using System.Web.Optimization;

namespace MVCDemo
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                        "~/Scripts/angular.js",
                        "~/Scripts/angular-route.js",
                        "~/Scripts/angular-sanitize.js"));

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

#if DEBUG
            string disableBundleOptimizationsStr = System.Configuration.ConfigurationManager.AppSettings["webd1:disableBundleOptimizations"];
            bool disableBundleOptimizations;
            if (!string.IsNullOrWhiteSpace(disableBundleOptimizationsStr) && disableBundleOptimizationsStr.Equals("true", System.StringComparison.CurrentCultureIgnoreCase))
                disableBundleOptimizations = true;
            else
                disableBundleOptimizations = false;
            BundleTable.EnableOptimizations = !disableBundleOptimizations;
#else
            BundleTable.EnableOptimizations = true;
#endif
        }
    }
}
