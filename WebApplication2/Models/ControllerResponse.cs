using Newtonsoft.Json;

namespace WebApplication1.Models
{
    public class ControllerResponse<T>
    {
        [JsonProperty(PropertyName = "data", DefaultValueHandling = DefaultValueHandling.Ignore)]
        public T Data { get; set; }

        [JsonProperty(PropertyName = "error", DefaultValueHandling = DefaultValueHandling.Ignore)]
        public string Error { get; set; }
    }

    public class ControllerResponse : ControllerResponse<string>
    {
    }
}
