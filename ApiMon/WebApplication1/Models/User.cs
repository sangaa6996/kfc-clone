using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string HoTen { get; set; }
        public string SDTKH { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        [JsonIgnore] public string PassWord { get; set; }
        public string DiaChi { get; set; }

    }
}
