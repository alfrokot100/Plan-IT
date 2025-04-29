using TeamApp.Services;

namespace TeamApp.Endpoints.TeamEndpoints
{
    public class TeamEndpoints
    {
        public static void RegisterEndpoints(WebApplication app)
        {
            app.MapGet("/Users", async (UserService userservice) =>
            {
                var user = userservice.GetAllUsers();

                if(user == null) return Results.NotFound("Inga personer hittades");

                return Results.Ok(user);

            });
        }
    }
}
