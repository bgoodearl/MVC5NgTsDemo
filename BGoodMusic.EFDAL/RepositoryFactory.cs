using BGoodMusic.EFDAL.Interfaces;

namespace BGoodMusic.EFDAL
{
    public class RepositoryFactory : IRepositoryFactory
    {
        public IBGoodMusicRepository GetRepository()
        {
            return new BGoodMusicFakeRepository();
        }
    }
}
