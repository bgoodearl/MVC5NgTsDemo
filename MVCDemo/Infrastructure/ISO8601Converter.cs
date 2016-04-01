using Newtonsoft.Json.Converters;

namespace MVCDemo.Infrastructure
{
    public class ISO8601Converter : IsoDateTimeConverter
    {
        public ISO8601Converter()
        {
            DateTimeFormat = "yyyy-MM-ddTHH:mm:ss.fffK";
        }
    }
}
