using System.Web.Mvc;

namespace MVCDemo.Controllers
{
    [RoutePrefix("home")]
    [Route("{action}")]
    public class HomeController : Controller
    {
        [Route("~/")]
        [Route]
        [Route("index")]
        public ActionResult Index()
        {
            return View();
        }

        [Route("about")]
        public ActionResult About()
        {
            ViewBag.Message = "AngularJS SPA hosted by ASP.Net MVC and using TypeScript.";

            return View();
        }
    }
}