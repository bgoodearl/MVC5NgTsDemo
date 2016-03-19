using BGoodMusic.EFDAL.Interfaces;
using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace MVCDemo.Controllers.API
{
    public class MDApiControllerBase : ApiController
    {
        public MDApiControllerBase(IRepositoryFactory repositoryFactory)
        {
            if (repositoryFactory == null)
                throw new ArgumentNullException("repositoryFactory");
            RepositoryFactory = repositoryFactory;
        }

        protected IRepositoryFactory RepositoryFactory { get; private set; }

        protected IBGoodMusicRepository GetRepository()
        {
            return RepositoryFactory.GetRepository();
        }

        protected string BuildErrorResultAndLogException(string controllerAction, Exception ex)
        {
            StringBuilder result = new StringBuilder();
            StringBuilder logMsg = new StringBuilder();
            logMsg.AppendFormat("{1} | {2}: {3} {0}",
                Environment.NewLine,
                controllerAction,
                ex.GetType().Name,
                ex.Message);
            Exception ex2 = ex.InnerException;
            if (ex2 != null)
            {
                logMsg.AppendFormat("INNER {1}: {2} {0}",
                    Environment.NewLine,
                    ex2.GetType().Name,
                    ex2.Message);
                ex2 = ex.InnerException;
                if (ex2 != null)
                {
                    logMsg.AppendFormat("INNER {1}: {2} {0}",
                        Environment.NewLine,
                        ex2.GetType().Name,
                        ex2.Message);
                }
            }

            //Logger.Error(logMsg.ToString(), ex);

            return result.ToString();
        }

        protected HttpResponseException CreateHttpResponseException(HttpStatusCode resultStatusCode, string content, string reason)
        {
            if (string.IsNullOrWhiteSpace(content))
                content = "An error occurred, please try again or contact the administrator.";
            if (string.IsNullOrWhiteSpace(reason))
                reason = "Critical Exception";
            HttpResponseException ex = new HttpResponseException(resultStatusCode);
            ex.Response.Content = new StringContent(content);
            ex.Response.ReasonPhrase = reason;
            return ex;
        }

        protected HttpResponseException HandleException(string controllerAction,
            Exception ex, HttpStatusCode resultStatusCode)
        {
            string message = BuildErrorResultAndLogException(controllerAction, ex);
            string responseContent = string.Concat("An error occurred saving the changes, please try again or contact the administrator. ",
                message);
            return CreateHttpResponseException(resultStatusCode, responseContent, null);
        }

    }
}