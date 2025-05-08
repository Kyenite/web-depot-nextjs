'use client';
import { callback } from "chart.js/helpers";
import { signIn } from "next-auth/react";

export default function redirection() {
    return (
        <>
            <div className="w-full h-screen bg-white py-40">
                <div className="w-full max-w-xl mx-auto p-4 text-black">
                    <div className="text-center text-4xl font-bold py-4 text-blue-600">
                        Web Depot
                    </div>
                    <div className="border-1 border-black">
                        <div className="text-center text-xl font-bold p-4">
                            Admin Redirection Form
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div>Click Confirm to Redirect</div>
                            <div className="pb-4">
                                <div >
                                    <button className="w-full px-4 py-2 mt-4 bg-blue-600 text-lg text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
                                    onClick={() => signIn(undefined, {callbackUrl: "/dashboard"})}>
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}