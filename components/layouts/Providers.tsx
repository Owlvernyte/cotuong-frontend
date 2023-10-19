'use client'

import React, { PropsWithChildren } from 'react'
import {
    QueryClientProvider,
    QueryClient,
    MutationCache,
} from '@tanstack/react-query'
import { SnackbarProvider, enqueueSnackbar } from 'notistack'

function Providers({ children }: PropsWithChildren) {
    const [client] = React.useState(
        new QueryClient({
            mutationCache: new MutationCache({
                onError(error, _variables, _context, mutation) {
                    if (mutation.options.onError) return

                    enqueueSnackbar(`${(error as any).message}`, {
                        variant: 'error',
                    })
                },
            }),
        })
    )
    
    return (
        <QueryClientProvider client={client}>
            <SnackbarProvider>{children}</SnackbarProvider>
        </QueryClientProvider>
    )
}

export default Providers
