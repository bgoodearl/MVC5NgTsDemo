using BGoodMusic.EFDAL.Interfaces;
using MVCDemo.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using BMM = BGoodMusic.Models;
using BMMA = MVCDemo.Models.API;

namespace MVCDemo.Controllers.API
{
    [Route("api/rehearsals")]
    public class RehearsalsController : MDApiControllerBase
    {
        public RehearsalsController(IRepositoryFactory repositoryFactory)
            : base(repositoryFactory)
        {
        }

        // GET: api/Rehearsals
        public IList<BMMA.Rehearsal> GetRehearsals()
        {
            try
            {
                using (IBGoodMusicRepository repo = GetRepository())
                {
                    List<BMMA.Rehearsal> rlist =
                        repo.GetRehearsals()
                        .OrderBy(r => r.Id)
                        .Select(r => new BMMA.Rehearsal
                        {
                            Id = r.Id,
                            Agenda = r.Agenda,
                            //Date = r.Date.ToJavaScriptMilliseconds(),
                            Date = r.Date,
                            Duration = r.Duration != null ? string.Format("{0:0}:{1:00}", r.Duration.Value.Hours, r.Duration.Value.Minutes) : null,
                            Location = r.Location,
                            Time = string.Format("{0:0}:{1:00}", r.Time.Hours, r.Time.Minutes)
                        })
                        .ToList();
                    return rlist;

                }
            }
            catch (Exception ex)
            {
                throw HandleException("Rehearsals API Get()", ex, HttpStatusCode.InternalServerError);
            }
        }

        // GET: api/Rehearsals/5
        [HttpGet]
        [ResponseType(typeof(BMMA.Rehearsal))]
        [Route("api/rehearsals/{id}")]
        public IHttpActionResult GetRehearsal(int id)
        {
            using (IBGoodMusicRepository repo = GetRepository())
            {
                BMM.Rehearsal rehearsal = repo.FindRehearsal(id);
                if (rehearsal == null)
                {
                    return NotFound();
                }
                return Ok(MakeAPIModel(rehearsal));
            }
        }

        private BMMA.Rehearsal MakeAPIModel(BMM.Rehearsal rehearsal)
        {
            return (new BMMA.Rehearsal
                    {
                        Id = rehearsal.Id,
                        Agenda = rehearsal.Agenda,
                        Date = rehearsal.Date,
                        Duration = rehearsal.Duration != null ? string.Format("{0:0}:{1:00}", rehearsal.Duration.Value.Hours, rehearsal.Duration.Value.Minutes) : null,
                        Location = rehearsal.Location,
                        Time = string.Format("{0:0}:{1:00}", rehearsal.Time.Hours, rehearsal.Time.Minutes)
                    });
        }

        [HttpPost]
        [ResponseType(typeof(BMMA.Rehearsal))]
        [Route("api/rehearsals")]
        public IHttpActionResult SaveRehearsal([FromBody]BMMA.Rehearsal rehearsal)
        {
            try
            {
                using (IBGoodMusicRepository repo = GetRepository())
                {
                    BMM.Rehearsal dbRehearsal = repo.UpdateRehearsal(rehearsal);
                    if (dbRehearsal == null)
                    {
                        return NotFound();
                    }
                    return Ok(MakeAPIModel(dbRehearsal));
                }
            }
            catch (Exception ex)
            {
                throw HandleException("Rehearsals API Save()", ex, HttpStatusCode.InternalServerError);
            }
        }


    }
}