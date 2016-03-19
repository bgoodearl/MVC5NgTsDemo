using BGoodMusic.EFDAL.Interfaces;
using BGoodMusic.Models;
using System;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace BGoodMusic.Tests
{
    [TestClass]
    public class RepositoryTests
    {
        private int? initialRehearsalCount = null;
        private int getRepoCount = 0;
        private IBGoodMusicRepository GetRepository()
        {
            IRepositoryFactory repoFactory = new BGoodMusic.EFDAL.RepositoryFactory();
            IBGoodMusicRepository repo = repoFactory.GetRepository();
            getRepoCount++;
            if (getRepoCount == 1)
            {
                initialRehearsalCount = repo.GetRehearsals().Count();
            }
            return repo;
        }

        [TestMethod]
        public void CanInitializeRepository()
        {
            using (IBGoodMusicRepository repo = GetRepository())
            {
                Assert.IsNotNull(repo);
                string initMessages = repo.GetInitializationMessages().ToString();
                Assert.AreEqual(0, initMessages.Length);
                Assert.IsTrue(initialRehearsalCount.HasValue);
                Assert.AreEqual(8, initialRehearsalCount.Value);
            }
        }
    }
}
