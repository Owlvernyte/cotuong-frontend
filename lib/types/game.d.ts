interface ICoordination {
    x: number
    y: number
}

type CoordinationType = ICoordination

enum SignalREvent {
    LoadBoard = 'LoadBoard',
    Moved = 'Moved',
    MoveFailed = 'MoveFailed',
    Ended = 'Ended',
    Chatted = 'Chatted',
    Joined = 'Joined',
    Left = 'Left',
    HostLeft = 'HostLeft',
    RoomDeleted = 'RoomDeleted',
    Connected = "connected",
    Error = "error"
}
