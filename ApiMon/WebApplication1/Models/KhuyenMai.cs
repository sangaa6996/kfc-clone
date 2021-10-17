using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class KhuyenMai
    {
        public string KhuyenMai_ID { get; set; }
        public string KhuyenMai_Name { get; set; }
        public string MoTa { get; set; }
        public double PhanTramKhuyenMai { get; set; }
        public DateTime NgayBatDau { get; set; }
        public DateTime NgayKetThuc { get; set; }
    }
}
