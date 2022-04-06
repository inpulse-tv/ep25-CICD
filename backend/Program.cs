using Newtonsoft.Json;
using MySqlConnector;
using System.Data;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(setup => setup.AddDefaultPolicy(policy => policy.WithOrigins("http://localhost:9000", "https://sandwichpouletmayonnaise.com")));
builder.Configuration.AddEnvironmentVariables(prefix: "PouletMayo_");

var app = builder.Build();

var dbHost = app.Configuration["Db:Host"];
var dbUser = app.Configuration["Db:User"];
var dbDatabase = app.Configuration["Db:Database"];
var dbPassword = app.Configuration["Db:Password"];

app.MapGet("api/entreesdujour", () =>
{
    var connectionStringBuilder = new MySqlConnectionStringBuilder
    {
        Server = dbHost,
        UserID = dbUser,
        Password = dbPassword,
        Database = dbDatabase
    };

    using (var connection = new MySqlConnection(connectionStringBuilder.ConnectionString))
    {
        try
        {
            connection.Open();

            var selectCmd = connection.CreateCommand();
            selectCmd.CommandText = "SELECT * FROM Entrees WHERE jour = DAYOFWEEK(NOW());";

            DataTable dt = new DataTable();
            using (var reader = selectCmd.ExecuteReader())
            {
                dt.Load(reader);
            }

            return Results.Text(JsonConvert.SerializeObject(dt));
        }
        catch (Exception ex)
        {
            return Results.Json(new { error = ex.Message });
        }
    }
});

app.UseCors();

app.Run();