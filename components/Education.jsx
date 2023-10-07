import { useState } from 'react';

function School(props) {
    return (
        <>
            <label htmlFor="school">
                School:
            </label>
            <input type="text" name="school" id="school" placeholder="Westway University" />
        </>
    )
}

function Title(props) {
    return (
        <>
            <label htmlFor="Title">
                Title of study:
            </label>
            <input type="text" name="title" id="title" placeholder="Bsc Computer Science" />
        </>
    )
}

function Date(props) {
    return (
        <>
            <label htmlFor="date">
                Date of Study:
            </label>
            <input type="date" name="date" id="date"/>
        </>
    )
}


export default function Education() {
    return (
        <form>
            <School />
            <Title />
            <Date />
        </form>
    )
}