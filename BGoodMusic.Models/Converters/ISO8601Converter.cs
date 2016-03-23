#if false
//To use this - add Newtonsoft.Json from NuGet and uncomment
using Newtonsoft.Json.Converters;

namespace BGoodMusic.Models.Converters
{
    public class ISO8601Converter : IsoDateTimeConverter
    {
        public ISO8601Converter()
        {
            DateTimeFormat = "yyyy-MM-ddTHH:mm:ss.fffK";
        }
    }
}
#endif