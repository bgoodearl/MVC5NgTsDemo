using System.Text;
using System.Web.Mvc;

namespace MVCDemo.Controllers
{
    [RoutePrefix("music")]
    [Route("{action}")]
    public class MusicController : Controller
    {
        [Route("app/{part1?}/{part2?}/{part3?}/{part4?}")]
        public ActionResult App(string part1, string part2, string part3, string part4)
        {
            StringBuilder msg = new StringBuilder();
            ViewBag.Message = msg.ToString();
            return View();
        }
    }
}