import { useState } from 'react';



export default function Education() {

    const [schoolText, setSchoolText] = useState("");
    const [titleText, setTitleText] = useState("");
    const [dateText, setDateText] = useState("");


    return (
        <form>
           <label htmlFor="school">
                School:
            </label>
            <input type="text" value={schoolText} name="school" id="school" placeholder="Westway University" />

            <label htmlFor="Title">
                Title of study:
            </label>
            <input type="text" value={titleText} name="title" id="title" placeholder="Bsc Computer Science" />

            <label htmlFor="date">
                Date of Study:
            </label>
            <input type="date" value={dateText} name="date" id="date"/>
        </form>
    )
}