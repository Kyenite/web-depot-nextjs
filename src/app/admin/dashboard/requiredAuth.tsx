'use client';
import { SessionProvider, useSession, signIn } from "next-auth/react";
import { LoaderPinwheel } from "lucide-react";

export default function AuthRequired({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession();
    
    if(status === "authenticated") {
        return children
    }
    else if(status === "loading") {
        return (
        <div className="w-screen h-screen flex items-center justify-center">
          <span className="animate-spin animate-spin-slow text-blue-600"><LoaderPinwheel size={80} /></span>
        </div>
        )
    }
    else if(status === "unauthenticated") {
        signIn(undefined, {callbackUrl: "/admin/dashboard"})
    }

    return null
}