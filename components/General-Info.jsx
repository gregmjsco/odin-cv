import "./General-Info.css"
import { useState } from 'react';



export default function GeneralInfo() {
    const [nameText, setNameText] = useState("");

    
    return (
        <form>
            <label htmlFor="name">
                Name:
            </label>
            <input type="text" value={nameText} id="name" name="name" placeholder="John Smith..." required onChange={(e) => setNameText(e.target.value)} />

            <label htmlFor="email">
                Email:
            </label>
            <input type="email" name="email" id="email" placeholder="yourEmail@example.com"/>

            <label htmlFor="phone">
                Phone:
            </label>
            <input type="tel" name="phone" id="phone" placeholder="01-2345-6789"/>
        </form>
    );
}