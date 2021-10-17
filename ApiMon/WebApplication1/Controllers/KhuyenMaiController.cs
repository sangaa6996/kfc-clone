using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KhuyenMaiController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public KhuyenMaiController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select * from dbo.KHUYENMAI";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("KFC");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }


        [HttpPost]
        public JsonResult Post(KhuyenMai KH)
        {
            string query = @"
                    insert into dbo.KHUYENMAI(KhuyenMai_Name,Mota,PhanTramKhuyenMai,NgayBatDau,NgayKetThuc) Values('" + KH.KhuyenMai_Name + "','" + KH.MoTa + "','" + KH.PhanTramKhuyenMai + "','" + KH.NgayBatDau + "','" + KH.NgayKetThuc + @"')";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("KFC");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Add succesfull");
        }
    }
}
