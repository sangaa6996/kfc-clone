using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Combo
    {
        public string Combo_ID { get; set; }
        public string Combo_Name { get; set; }
        public DateTime NgayTao { get; set; }
        public string Combo_Image { get; set; }
        public decimal DonGia { get; set; }
        public string KhuyenMai_ID { get; set; }
        public string MoTa { get; set; }
    }
}
