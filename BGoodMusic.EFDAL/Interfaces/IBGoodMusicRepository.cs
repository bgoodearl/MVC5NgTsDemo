using BGoodMusic.Models;
using System;
using System.Data.Entity;
using System.Linq;
using System.Text;

namespace BGoodMusic.EFDAL.Interfaces
{
    public interface IBGoodMusicRepository : IDisposable
    {
        Rehearsal AddRehearsal(Rehearsal rehearsal);
        Rehearsal FindRehearsal(int id);
        StringBuilder GetInitializationMessages();
        IQueryable<Rehearsal> GetRehearsals();

        bool RehearsalExists(int id);
        void RemoveRehearsal(Rehearsal rehearsal);
        int SaveChanges();
        void SetRehearsalEntityState(Rehearsal rehearsal, EntityState state);
    }
}
