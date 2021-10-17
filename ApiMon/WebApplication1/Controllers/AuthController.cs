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
using WebApplication1.Data;
using WebApplication1.Dtos;
using WebApplication1.Helpers;

namespace WebApplication1.Controllers
{
    [Route("api")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IUserRepository _repository;
        private readonly JwtService _jwtService;

        public AuthController(IUserRepository repository, JwtService jwtService)
        {
            _repository = repository;
            _jwtService = jwtService;
        }

        [HttpPost("Dangki")]
        public IActionResult Dangki(DangKiDtos dto)
        {
            var user = new User
            {
                HoTen = dto.HoTen,
                SDTKH = dto.SDTKH,
                Email = dto.Email,
                UserName = dto.UserName,
                PassWord = BCrypt.Net.BCrypt.HashPassword(dto.PassWord),
                DiaChi = dto.DiaChi
            };
            return Created("Succces", _repository.Create(user));
        }
        [HttpPost("Dangnhap")]
        public IActionResult Dangnhap(Dangnhapdots dto)
        {
            var user = _repository.GetUser(dto.UserName);

            if (user == null) return BadRequest(new { message = "TK MK Sai" });

            if (!BCrypt.Net.BCrypt.Verify(dto.PassWord, user.PassWord))
            {
                return BadRequest(new { message = "TK MK Sai" });
            }

            var jwt = _jwtService.Generate(user.UserId);

            Response.Cookies.Append("jwt", jwt, new CookieOptions
            {
                HttpOnly = true
            });

            return Ok(new { message = "thanh cong"
            });
        }
        [HttpGet("user")]
        public IActionResult User()
        {
            try
            {
                var jwt = Request.Cookies["jwt"];

                var token = _jwtService.Verify(jwt);

                int UserId = int.Parse(token.Issuer);

                var user = _repository.GetID(UserId);

                return Ok(user);
            }
            catch (Exception _)
            {
                return Unauthorized();
            }
        }
        [HttpPost("logout")]
        public IActionResult Logout() 
        {
            Response.Cookies.Delete("jwt");

            return Ok(new
            {
                message = "thanh cong"
            });
        }



    }
}
