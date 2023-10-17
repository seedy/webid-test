"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode, useState } from "react"

interface ProviderProps {
    children: ReactNode
}


const Provider = ({ children }: ProviderProps) => {
    const [queryClient] = useState(() => new QueryClient())
    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}

export default Provider