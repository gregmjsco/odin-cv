import "./General-Info.css"
import { useState } from 'react';



export default function GeneralInfo() {
    const [nameText, setNameText] = useState("");
    const [emailText, setEmailText] = useState("");
    const [phoneText, setPhoneText] = useState("");

    
    return (
        <>
            <label htmlFor="name">
                Name:
            </label>
            <input type="text" value={nameText} id="name" name="name" placeholder="John Smith..." required onChange={(e) => setNameText(e.target.value)} />

            <label htmlFor="email">
                Email:
            </label>
            <input type="email" value={emailText} name="email" id="email" placeholder="yourEmail@example.com" required onChange={(e) => setEmailText(e.target.value)}/>

            <label htmlFor="phone">
                Phone:
            </label>
            <input type="tel" value={phoneText} name="phone" id="phone" placeholder="01-2345-6789" required onChange={(e) => setPhoneText(e.target.value)} />
            <button type="submit"></button>
        </>

    );
}