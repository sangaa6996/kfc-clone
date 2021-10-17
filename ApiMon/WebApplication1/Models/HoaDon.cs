using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class HoaDon
    {
        public string MaHD { get; set; }
        public DateTime ngayGio { get; set; }
        public int tienBan { get; set; }
        public int tienGiam { get; set; }
        public int tienTra { get; set; }
        public string MaCTHD { get; set; }
    }
}
