
namespace MVCDemo.Models.API
{
    public class Rehearsal
    {
        public int Id { get; set; }

        /// <summary>
        /// Javascript Milliseconds
        /// </summary>
        public long Date { get; set; }

        public string Time { get; set; }

        public string Duration { get; set; }

        public string Location { get; set; }

        public string Agenda { get; set; }
    }
}