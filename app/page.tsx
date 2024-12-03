"use client";

import LoginPage from "@/components/login-01";
import {useEffect, useState} from "react";

export default function Page() {
    const [data, setData] = useState("");
    const [data2, setData2] = useState("");
    const [data3, setData3] = useState("");
    const [token, setToken] = useState("");

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    useEffect( () => {
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

         fetch("http://127.0.0.1:8080/admin", {
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

                setData2(data);
            })
            .catch((err) => console.log(err));

         fetch("http://127.0.0.1:8080/user", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Origin: "http://127.0.0.1:3000",
            },
        })
            .then((res) => res.text())
            .then((data) => {
                console.log("Response user data:");

                setData3(data);
            })
            .catch((err) => console.log(err));

        fetch("http://127.0.0.1:8080/access_token", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Origin: "http://127.0.0.1:3000",
            },
        })
            .then((res) => res.text())
            .then((data) => {
                console.log("Response user data:");

                setToken(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div /*className="flex h-screen w-full items-center justify-center px-4"*/>
            {data}
            <br/>
            {data2}
            {/*<br/>*/}
            {/*{`User: ${data3}`}*/}
            {/*<br/>*/}
            {/*{`Token: ${token}`}*/}
        </div>
    );
}
