using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Extensions.SignalRService;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.Azure.Cosmos;
using TaylorHutchison.EffortApp.Models;

namespace TaylorHutchison.EffortApp.Functions
{
    public static class RoomFunctions
    {

        private static CosmosClient GetCosmosClient()
        {
            var connectionString = Environment.GetEnvironmentVariable("CosmosDBConnectionString");
            var options = new CosmosClientOptions()
            {
                SerializerOptions = new CosmosSerializationOptions()
                {
                    PropertyNamingPolicy = CosmosPropertyNamingPolicy.CamelCase
                }
            };
            return new CosmosClient(connectionString, options);
        }

        private static Container GetRoomContainer(CosmosClient client)
        {
            var databaseId = Environment.GetEnvironmentVariable("DatabaseId");
            var containerId = Environment.GetEnvironmentVariable("ContainerId");
            return client.GetContainer(databaseId, containerId);
        }


        [FunctionName("createroom")]
        public static async Task<IActionResult> CreateRoom(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            var room = JsonConvert.DeserializeObject<Room>(requestBody);
            if (!string.IsNullOrEmpty(room.Id))
            {
                using var client = GetCosmosClient();
                var container = GetRoomContainer(client);
                await container.CreateItemAsync<Room>(room, new PartitionKey(room.Id));
                return new OkResult();
            }
            return new BadRequestObjectResult("Room ID was not provided while trying to create a room");
        }
    }
}
