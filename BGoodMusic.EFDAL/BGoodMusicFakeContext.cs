using BGoodMusic.EFDAL.Fakes;
using BGoodMusic.Models;
using System.Data.Entity;
using System.Text;

namespace BGoodMusic.EFDAL
{
    public class BGoodMusicFakeContext
    {
        StringBuilder _initializationMessages = null;

        public BGoodMusicFakeContext()
        {
            this.Rehearsals = new FakeRehearalSet();
            _initializationMessages = new StringBuilder();
            FakeData.InitializeFakeData(this, _initializationMessages);
        }

        internal StringBuilder InitializationMessages {  get { return _initializationMessages; } }

        public IDbSet<Rehearsal> Rehearsals { get; set; }

    }
}
