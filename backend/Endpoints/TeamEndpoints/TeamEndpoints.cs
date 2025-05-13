using System.Reflection.Metadata.Ecma335;
using TeamApp.Services;
using TeamApp.DTOs;
using TeamApp.DTOs.TaskDTO;
using Microsoft.IdentityModel.Tokens;

namespace TeamApp.Endpoints.TeamEndpoints
{
    public class TeamEndpoints
    {
        public static void RegisterEndpoints(WebApplication app)
        {
            app.MapGet("/Users", async (UserService userservice) =>
            {
                var user =  await userservice.GetAllUsers();

                if(user == null) return Results.NotFound("Inga personer hittades");

                return Results.Ok(user);

            });
        }
    }
}
