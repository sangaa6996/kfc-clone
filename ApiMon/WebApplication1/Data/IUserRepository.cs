using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Data
{
    public interface IUserRepository
    {
        User Create(User user);
        User GetUser(string Username);
        User GetID(int id);
    }
}
