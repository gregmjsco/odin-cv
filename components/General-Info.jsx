import "./General-Info.css"
import { useState } from 'react';



export default function GeneralInfo({formData, onFormChange}) {


    
    return (
        <>
            <label htmlFor="name">
                Name:
            </label>
            <input type="text" value={formData.userName} id="name" name="name" placeholder="John Smith..." required onChange={(e) => onFormChange('userName', e.target.value)} />

            <label htmlFor="email">
                Email:
            </label>
            <input type="email" value={formData.email} name="email" id="email" placeholder="yourEmail@example.com" required onChange={(e) => onFormChange('email', e.target.value)}/>

            <label htmlFor="phone">
                Phone:
            </label>
            <input type="tel" value={formData.phone} name="phone" id="phone" placeholder="01-2345-6789" required onChange={(e) => onFormChange('phone', e.target.value)} />
            <button type="submit"></button>
        </>

    );
}