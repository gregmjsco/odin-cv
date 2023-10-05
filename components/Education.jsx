function School() {
    return (
        <>
            <label htmlFor="school">
                School:
            </label>
            <input type="text" name="school" id="school" placeholder="Westway University" />
        </>
    )
}

function Title() {
    return (
        <>
            <label htmlFor="Title">
                Title of study:
            </label>
            <input type="text" name="title" id="title" placeholder="Bsc Computer Science" />
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