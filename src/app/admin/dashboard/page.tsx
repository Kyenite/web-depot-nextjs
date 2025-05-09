'use client';
import { SessionProvider } from "next-auth/react";
import AuthRequired from "./requiredAuth";
import Dashboard from "./pages/Dashboard";

export default function Main() {
    return (
        <SessionProvider>
            <AuthRequired>
                <Dashboard />
            </AuthRequired>
        </SessionProvider>
    )
    
}