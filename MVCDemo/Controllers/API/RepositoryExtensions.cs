using BGoodMusic.EFDAL.Interfaces;
using MVCDemo.Infrastructure;
using System;
using BMM = BGoodMusic.Models;
using BMMA = MVCDemo.Models.API;

namespace MVCDemo.Controllers.API
{
    public static class RepositoryExtensions
    {
        public static BMM.Rehearsal UpdateRehearsal(this IBGoodMusicRepository repo, BMMA.Rehearsal rehearsal)
        {
            BMM.Rehearsal dbR = repo.FindRehearsal(rehearsal.Id);
            if (dbR != null)
            {
                dbR.Agenda = rehearsal.Agenda;
                dbR.Date = rehearsal.Date;
                if (!string.IsNullOrWhiteSpace(rehearsal.Duration))
                    dbR.Duration = TimeSpan.Parse(rehearsal.Duration);
                dbR.Location = rehearsal.Location;
                if (!string.IsNullOrWhiteSpace(rehearsal.Time))
                    dbR.Time = TimeSpan.Parse(rehearsal.Time);
                repo.SaveChanges();
                return dbR;
            }
            return null;
        }
    }
}