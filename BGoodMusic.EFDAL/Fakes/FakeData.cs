using BGoodMusic.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGoodMusic.EFDAL.Fakes
{
    internal class FakeData
    {
        internal static void InitializeFakeData(BGoodMusicFakeContext context, StringBuilder errorMessages)
        {
            AddFakeRehearsals(context, errorMessages);
        }

        internal static void AddFakeRehearsals(BGoodMusicFakeContext context, StringBuilder errorMessages)
        {
            int? rehearsalId = null;
            int? rehearsalIdx = null;
            try
            {
                DateTime today = DateTime.Now.Date;
                DayOfWeek dayOfWeekToday = today.DayOfWeek;
                int dayOfWeekTodayInt = (int)dayOfWeekToday;
                int offsetLastTuesday = 2 - dayOfWeekTodayInt;
                if (offsetLastTuesday >= 0)
                    offsetLastTuesday -= 7;
                DateTime firstRehearsalDay = today.AddDays(offsetLastTuesday).AddDays(-14);
                int id = 1;
                for (int n = 0; n < 8; n++)
                {
                    rehearsalIdx = n;
                    rehearsalId = id + n;
                    context.Rehearsals.Add(new Rehearsal
                    {
                        Date = firstRehearsalDay.AddDays(n * 7),
                        Duration = new TimeSpan(1, 30, 0),
                        Id = id + n,
                        Location = "The usual place",
                        Time = new TimeSpan(18, 30, 0)
                    });
                }
            }
            catch (Exception ex)
            {
                errorMessages.AppendFormat("Rehearsal {1}, rIdx={2} - {3}: {4} {0}",
                    Environment.NewLine,
                    rehearsalId,
                    rehearsalIdx,
                    ex.GetType().Name,
                    ex.Message);
            }
        }
    }
}
