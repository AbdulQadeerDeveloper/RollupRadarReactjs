import React, { useState } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { GoogleLogin } from 'react-google-login';
import { google } from 'googleapis';


function SignIn() {
    // Constants for Google Client and API Key
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_GOOGLE_CLIENT_SECRET;
    const scope = "https://www.googleapis.com/auth/spreadsheets";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear any existing errors
        const postData = { email, password };

        try {
            // Example: Insert your fetch logic here
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycby8K2_DDfcOu7av83vAMJNjSe5yZwZ3EHwKW5kzzPtUTtSFSBfXmivF9F5WG3F3lsrT/exec",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(postData)
                }
            );
            const data = await response.json();
            console.log(data);
            navigate("/account");
        } catch (error) {
            setError("Failed to login. Please try again later.");
            console.error(error);
        }
    };

    // google with login methed
    const onSuccess = async (response) => {
        console.log('Login Success: currentUser:', response.profileObj);
        appendDataToSheet([response.profileObj.email, new Date().toLocaleString()]); // Add Google user email and login time
        navigate("/account");
    };

    const onFailure = (response) => {
        console.error('Login Failed:', response);
        setError("Failed to login with Google.");
    };

    const appendDataToSheet = async (data) => {
        const sheets = google.sheets({ version: 'v4', auth: apiKey });
        const spreadsheetId = 'your_spreadsheet_id_here';

        try {
            await sheets.spreadsheets.values.append({
                spreadsheetId,
                range: 'Sheet1!A:B',
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: [data],
                },
            });
            console.log("Data added to the sheet successfully!");
        } catch (err) {
            console.error("Error writing to the sheet:", err);
            setError("Error writing to Google Sheets.");
        }
    };


    return (
        <div className='max-w-[350px] mx-auto min-h-[100vh] px-4 py-20'>
            <h1 className='text-center font-semibold text-3xl mb-6'>로그인</h1>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>이메일</label>
                    <div className='relative shadow-xl'>
                        <input
                            type="email"
                            required
                            id='email'
                            name='Email'
                            placeholder='이메일'
                            className='w-full p-3 border rounded-2xl'
                            onChange={(e) => setEmail(e.target.value)}
                            aria-label="Email"
                        />
                        <AiOutlineMail className='absolute right-3 top-3 text-gray-400' />
                    </div>
                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>비밀번호</label>
                    <div className='relative shadow-xl'>
                        <input
                            type="password"
                            required
                            id='password'
                            name='Password'
                            placeholder='비밀번호'
                            className='w-full p-3 border rounded-2xl'
                            onChange={(e) => setPassword(e.target.value)}
                            aria-label="Password"
                        />
                        <RiLockPasswordLine className='absolute right-3 top-3 text-gray-400' />
                    </div>
                </div>
                <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block w-full mb-4'>
                    로그인
                </button>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    scope={scope}
                    render={renderProps => (
                        <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="text-white bg-[#4285F4] hover:bg-[#357ae8] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block w-full">
                            Login with Google
                        </button>
                    )}
                />
            </form>
            <p className='mt-4 text-center text-gray-500 text-xs'>
                Don't have an account? <Link className='text-blue-500' to="/signup">회원 가입</Link>
            </p>
        </div>
    );
}

export default SignIn;
