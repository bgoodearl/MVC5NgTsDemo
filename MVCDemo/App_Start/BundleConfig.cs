using System.Collections.Generic;
using System.IO;
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
                        "~/Scripts/angular-resource.js",
                        "~/Scripts/angular-route.js",
                        "~/Scripts/angular-sanitize.js"));

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            AddAppBundle(bundles, "~/bundles/appscripts", "app", appFiles);

            string disableBundleOptimizationsStr = System.Configuration.ConfigurationManager.AppSettings["webd1:disableBundleOptimizations"];
#if DEBUG
            bool disableBundleOptimizations = true;
            if (!string.IsNullOrWhiteSpace(disableBundleOptimizationsStr) && disableBundleOptimizationsStr.Equals("false", System.StringComparison.CurrentCultureIgnoreCase))
                disableBundleOptimizations = false;
#else
            bool disableBundleOptimizations = false;
            if (!string.IsNullOrWhiteSpace(disableBundleOptimizationsStr) && disableBundleOptimizationsStr.Equals("true", System.StringComparison.CurrentCultureIgnoreCase))
                disableBundleOptimizations = true;
#endif
            BundleTable.EnableOptimizations = !disableBundleOptimizations;
        }

        private static readonly string[] appFiles =
        {
            // Application root
            "app.module.js",
            "app.config.js",
            // Modules
            "blocks/blocks.module.js",
            "layout/layout.module.js",
            "naverror/naverror.module.js",
            "rehearsaledit/rehearsaledit.module.js",
            "rehearsallist/rehearsallist.module.js",
            "services/services.module.js",
            "test/test.module.js",
            // Services and Providers
            "blocks/appinfo.provider.js",
            "services/rehearsalData.service.js",
            // Controllers
            "layout/layout.controller.js",
            "naverror/naverror.controller.js",
            "rehearsaledit/rehearsaledit.controller.js",
            "rehearsallist/rehearsallist.controller.js",
            "test/test.controller.js",
            // Routing
            "naverror/naverror.routes.js",
            "rehearsaledit/rehearsaledit.routes.js",
            "rehearsallist/rehearsallist.routes.js",
            "test/test.routes.js",
            //Core module & Run
            "app.core.module.js",
            "app.run.js",
        };

        private static void AddAppBundle(BundleCollection bundles, string bundleName, string appDir, string[] bundleFiles)
        {
            var appDirFullPath = HttpContext.Current.Server.MapPath(string.Format("~/{0}", appDir));
            if (Directory.Exists(appDirFullPath))
            {
                var scriptBundle = new ScriptBundle(bundleName);
                List<string> filePaths = new List<string>();
                foreach (string file in bundleFiles)
                {
                    filePaths.Add(string.Format("~/{0}/{1}", appDir, file));
                }
                scriptBundle.Include(
                    filePaths.ToArray()
                    );
                bundles.Add(scriptBundle);
            }
        }
    }
}
