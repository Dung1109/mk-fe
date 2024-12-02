"use client";

import LoginPage from "@/components/login-01";
import { useEffect, useState } from "react";

export default function Page() {
    const [data, setData] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8080/secret", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Origin: "http://127.0.0.1:3000",
            },
        })
            .then((res) => res.text())
            .then((data) => {
                console.log("Response data:");

                setData(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="flex h-screen w-full items-center justify-center px-4">
            {data}
            <LoginPage />
        </div>
    );
}
