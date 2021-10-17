using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using WebApplication1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MonController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public MonController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select * from dbo.MON";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("KFC");
            SqlDataReader myReader;
            using(SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using(SqlCommand myCommand = new SqlCommand(query, myCon))
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
        public JsonResult Post(Mon mon)
        {
            string query = @"
                    insert into dbo.Mon(Mon_Name,Mota,Unit_ID,Size_ID,Cate_ID,Mon_Image,DonGia,KhuyenMai_ID) Values('" + mon.Mon_Name + "','" + mon.MoTa + "','" + mon.Unit_ID + "','" + mon.Size_ID + "','" + mon.Cate_ID + "','" + mon.Mon_Image + "','" + mon.DonGia + "','" + mon.KhuyenMai_ID + @"')";
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


        [HttpPut]
        public JsonResult Put(Mon mon)
        {
            string query = @"
                    update dbo.MON 
                    SET Mon_Name = '" + mon.Mon_Name + @"'
                    ,Mon_ID = '" + mon.Mon_ID + @"'
                    ,MoTa = '" + mon.MoTa + @"'
                    ,Unit_ID = '" + mon.Unit_ID + @"'
                    ,Size_ID = '" + mon.Size_ID + @"'
                    ,Cate_ID = '" + mon.Cate_ID + @"'
                    ,Mon_Image = '" + mon.Mon_Image + @"'
                    ,DonGia = '" + mon.DonGia + @"'
                    ,KhuyenMai_ID = '" + mon.KhuyenMai_ID + @"'
                    Where Mon_ID = '" + mon.Mon_ID + @"'
                    ";
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
            return new JsonResult("Update succesfull");
        }

        [HttpDelete("{maMon}")]
        public JsonResult Delete(string maMon)
        {
            string query = @"
                    delete from dbo.MON where Mon_ID = '" + maMon + @"'";
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
            return new JsonResult("Delete succesfull");
        }
        [Route("LayMon/{Mon_ID}")]
        public JsonResult LayTenMon(string Mon_ID)
        {
            string query = @"
                    select * from dbo.MON where Mon_ID = '" + Mon_ID + @"'";
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
        [Route("LayCategory/{Cate_Name}")]
        public JsonResult LayDanhSach(string Cate_Name)
        {
            string query = @"
                    select * from dbo.MON INNER JOIN CATEGORY ON CATEGORY.Cate_ID = MON.Cate_ID  where CATEGORY.Cate_Name = '" + Cate_Name + @"'";
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
    }
}
