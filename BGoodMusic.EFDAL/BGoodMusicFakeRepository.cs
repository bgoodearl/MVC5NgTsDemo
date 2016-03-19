using BGoodMusic.EFDAL.Interfaces;
using BGoodMusic.Models;
using System;
using System.Data.Entity;
using System.Linq;
using System.Text;

namespace BGoodMusic.EFDAL
{
    public class BGoodMusicFakeRepository : IDisposable, IBGoodMusicRepository
    {
        static BGoodMusicFakeContext _context = null;

        public BGoodMusicFakeRepository()
        {
            if (_context == null)
                _context = new BGoodMusicFakeContext();
        }


        //***************************
        #region IBGoodMusicRepository

        public Rehearsal AddRehearsal(Rehearsal rehearsal)
        {
            int topId = _context.Rehearsals.OrderByDescending(r => r.Id).Select(r => r.Id).FirstOrDefault();
            rehearsal.Id = (topId + 1);
            _context.Rehearsals.Add(rehearsal);
            return rehearsal;
        }

        public Rehearsal FindRehearsal(int id)
        {
            return _context.Rehearsals.Find(id);
        }

        public StringBuilder GetInitializationMessages()
        {
            return _context.InitializationMessages;
        }


        public IQueryable<Rehearsal> GetRehearsals()
        {
            return _context.Rehearsals;
        }

        public bool RehearsalExists(int id)
        {
            return _context.Rehearsals.Count(r => r.Id == id) > 0;
        }

        public void RemoveRehearsal(Rehearsal rehearsal)
        {
            _context.Rehearsals.Remove(rehearsal);
        }

        public int SaveChanges()
        {
            return -1;
        }

        public void SetRehearsalEntityState(Rehearsal rehearsal, EntityState state)
        {
            //_context.Entry(rehearsal).State = state;
        }

        #endregion


        //*****************
        #region IDisposable
        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    //_context.Dispose();
                    //_context = null;
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        #endregion IDisposable
    }
}
