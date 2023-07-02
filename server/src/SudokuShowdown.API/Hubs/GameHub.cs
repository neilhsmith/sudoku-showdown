using Microsoft.AspNetCore.SignalR;

namespace SudokuShowdown.API.Hubs;

public interface IGameClient
{

}

public class GameHub : Hub<IGameClient>
{}