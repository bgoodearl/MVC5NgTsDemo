using BGoodMusic.Models;
using System.Linq;

namespace BGoodMusic.EFDAL.Fakes
{
    public class FakeRehearalSet : FakeDbSet<Rehearsal>
    {
        public override Rehearsal Find(params object[] keyValues)
        {
            return this.SingleOrDefault(x => x.Id == (int)keyValues.Single());
        }
    }
}
