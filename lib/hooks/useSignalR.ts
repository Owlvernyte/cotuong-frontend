import React from 'react'
import {
    HubConnectionBuilder,
    HttpTransportType,
    IHttpConnectionOptions,
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
        connection.start()

        // Stop connection on unmount
        return () => {
            connection.stop()
        }
    }, [])

    return { connection, setConnection }
}

export default useSignalR
