'use client'
export const dynamic = 'force-dynamic';
import RequireAuth from "./requiredAuth";
import { SessionProvider } from "next-auth/react";

export default function main() {
    return (
        <>
            <SessionProvider>
                <RequireAuth />
            </SessionProvider>
        </>
    )
}