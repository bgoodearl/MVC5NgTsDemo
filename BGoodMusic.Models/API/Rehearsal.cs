//using Newtonsoft.Json;
//using BGoodMusic.Models.Converters;
using System;

namespace BGoodMusic.Models.API
{
    public class Rehearsal
    {
        public int Id { get; set; }

        /// <summary>
        /// Using JsonConverter works in code, but adding ISO8601Converter class causes
        /// TypeScript converter to croak in call to assembly.GetTypes().
        /// </summary>
#if false
        [JsonConverter(typeof(ISO8601Converter))]
        public DateTime Date { get; set; }
#else
        public long Date { get; set; }
        //Placeholder for use on JavaScript side
        public Object EditDate { get; set; }
#endif

        public string Time { get; set; }

        public string Duration { get; set; }

        public string Location { get; set; }

        public string Agenda { get; set; }
    }
}