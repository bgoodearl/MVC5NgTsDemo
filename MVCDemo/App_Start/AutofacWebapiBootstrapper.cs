using Autofac;
using Autofac.Integration.WebApi;
using System.Reflection;
using System.Web.Http;
using BMEI = BGoodMusic.EFDAL.Interfaces;
using BME = BGoodMusic.EFDAL;

namespace MVCDemo
{
    public class AutofacWebapiBootstrapper
    {
        public static void Initialize(HttpConfiguration config)
        {
            var builder = new ContainerBuilder();
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
            builder.RegisterWebApiFilterProvider(config);

            builder.RegisterType<BME.RepositoryFactory>()
                .AsImplementedInterfaces()
                .As<BMEI.IRepositoryFactory>();

            var container = builder.Build();

            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);

        }

    }
}