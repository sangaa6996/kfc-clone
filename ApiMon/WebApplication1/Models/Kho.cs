using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Kho
    {
        public string Stock_ID { get; set; }
        public string Stock_Name { get; set; }
        public string Supplier_ID { get; set; }
        public DateTime NgayNhap { get; set; }
        public int SoLuongTon { get; set; }
        public string MoTa { get; set; }
    }
}
