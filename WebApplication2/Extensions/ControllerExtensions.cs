using Microsoft.AspNetCore.Mvc;
using System;
using WebApplication1.Models;

namespace WebApplication1.Extensions
{
    public static class ControllerExtensions
    {
        public static ControllerResponse<T> CreateResponse<T>(this ControllerBase controller, T data)
        {
            if (data == null)
            {
                throw new Exception("Result was empty");
            }
            return new ControllerResponse<T> { Data = data };
        }

        public static ControllerResponse CreateResponse(this ControllerBase controller)
        {
            return new ControllerResponse { Data = "Success" };
        }
    }
}
