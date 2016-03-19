using System;

namespace MVCDemo.Infrastructure
{
    //thanks to http://stackoverflow.com/questions/2404247/datetime-to-javascript-date for ToJavaScriptMilliseconds
    public static class DateTimeJavaScript
    {
        private static readonly long DatetimeMinTimeTicks =
           (new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc)).Ticks;

        public static long ToJavaScriptMilliseconds(this DateTime dt)
        {
            return (long)((dt.ToUniversalTime().Ticks - DatetimeMinTimeTicks) / 10000);
        }

        public static DateTime UtcFromJavaScriptMilliseconds(int jsTimeMilliseconds)
        {
            return new DateTime(1970, 01, 01).ToUniversalTime().AddMilliseconds(jsTimeMilliseconds);
        }
    }
}