using Autofac;
using Autofac.Integration.Mvc;
using System.Web.Mvc;
using BMEI = BGoodMusic.EFDAL.Interfaces;
using BME = BGoodMusic.EFDAL;

namespace MVCDemo
{
    public class AutofacBootstrapper
    {
        public static void Initialize()
        {
            DependencyResolver.SetResolver(new AutofacDependencyResolver(ConfigureContainer()));
        }

        private static IContainer ConfigureContainer()
        {
            var builder = new ContainerBuilder();
            builder.RegisterControllers(typeof(MvcApplication).Assembly);

            builder.RegisterType<BME.RepositoryFactory>()
                .AsImplementedInterfaces()
                .As<BMEI.IRepositoryFactory>();

            builder.RegisterFilterProvider();

            IContainer container = builder.Build();
            return container;

        }

    }
}