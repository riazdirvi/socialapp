using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string message = null)
        {
            StatusCode = statusCode;
            Message = message ?? GetDefaultMessageForStatusCode(statusCode);
        }
        public int StatusCode { get; set; }
        public string Message { get; set; }
       
        private string GetDefaultMessageForStatusCode(int statusCode)
        {
            return statusCode switch{
                400 => "A bade request, you have made",
                401 => "Authenticated, you are not",
                403 => "Authorized, you are not",
                404 => "Resource found, it was not",
                5000 => "Errors are the path to the dark side, errors lead anger, anger leads to hat, hat leads to carrier change..",
                _ => null
            };
        }
    }
}