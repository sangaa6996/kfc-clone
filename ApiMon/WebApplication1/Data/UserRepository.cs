using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly UserContext _context;

        public UserRepository(UserContext context)
        {
            _context = context;
        }

        public User Create(User user)
        {
            _context.Users.Add(user);
            user.UserId = _context.SaveChanges();
            return user;
        }
        public User GetUser(string Username)
        {
            return _context.Users.FirstOrDefault(u => u.UserName == Username);
        }
        public User GetID(int id)
        {
            return _context.Users.FirstOrDefault(u => u.UserId == id);
        }

    }
}
