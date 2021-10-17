using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChiTietCongThucController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ChiTietCongThucController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select * from dbo.CTCONGTHUC";
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
        public JsonResult Post(ChiTietCongThuc CTCT)
        {
            string query = @"
                    insert into dbo.CTCONGTHUC(Stock_ID,Mota,SoLuongNLCan) Values('" + CTCT.Stock_ID + "','" + CTCT.MoTa + "','" + CTCT.SoLuongNLCan + @"')";
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
