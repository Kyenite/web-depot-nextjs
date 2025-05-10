'use client';
import { useSession } from "next-auth/react";
import Dashboard from "./pages/Dashboard";
import { LoaderPinwheel } from "lucide-react";


export default function Main() {
    const { status } = useSession();

    if(status === "loading") {
        return (
        <div className="w-screen h-screen flex items-center justify-center">
          <span className="animate-spin animate-spin-slow text-blue-600"><LoaderPinwheel size={80} /></span>
        </div>
        )
    }

    return (
        <Dashboard />
    )
    
}