import React from 'react'
import {
    HubConnectionBuilder,
    HttpTransportType,
    IHttpConnectionOptions,
    HubConnectionState,
} from '@microsoft/signalr'

function useSignalR(webSocketURI: string, options?: IHttpConnectionOptions) {
    // Override default connection options if exist
    const connectionOptions: IHttpConnectionOptions = {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
        ...options,
    }

    const [connection, setConnection] = React.useState(() =>
        new HubConnectionBuilder()
            .withUrl(webSocketURI, connectionOptions)
            .withAutomaticReconnect()
            .build()
    )

    React.useEffect(() => {
        if (connection.state === HubConnectionState.Disconnected) {
            connection.start()
        }

        // Stop connection on unmount
        return () => {
            if (connection.state !== HubConnectionState.Disconnected) {
                connection.stop()
            }
        }
    }, [connection])

    return { connection, setConnection }
}

export default useSignalR
