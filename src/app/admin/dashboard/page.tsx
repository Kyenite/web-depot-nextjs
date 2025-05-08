'use client'
export const dynamic = 'force-dynamic';
import RequireAuth from "./requiredAuth";
import { SessionProvider } from "next-auth/react";
import Dashboard from "./pages/Dashboard";

export default function main() {
    return (
        <>
            <SessionProvider>
                <RequireAuth />
            </SessionProvider>
        </>
    )
}