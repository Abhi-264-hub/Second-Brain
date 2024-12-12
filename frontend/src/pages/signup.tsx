import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup() {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signup() {
        const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username || !password) {
        alert("Both username and password are required.");
        return;
    }

    try {
        await axios.post(BACKEND_URL + "/api/v1/signup", {
            username,
            password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        navigate("/signin");
        alert("You have signed up!");
    } catch (error) {
        console.error("Signup error:", error);
        alert("Error signing up.");
    }
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={passwordRef} placeholder="Password" />
            <div className="flex justify-center pt-4">
                <Button onClick={signup} loading={false} variant="Primary" text="Signup" fullWidth={true} />
            </div>
        </div>
    </div>
}