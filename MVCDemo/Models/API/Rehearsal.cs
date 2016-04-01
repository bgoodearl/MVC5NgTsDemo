using Newtonsoft.Json;
using MVCDemo.Infrastructure;
using System;

namespace MVCDemo.Models.API
{
    public class Rehearsal
    {
        public int Id { get; set; }

        [JsonConverter(typeof(ISO8601Converter))]
        public DateTime Date { get; set; }

        public string Time { get; set; }

        public string Duration { get; set; }

        public string Location { get; set; }

        public string Agenda { get; set; }
    }
}