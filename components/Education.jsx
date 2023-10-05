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


export default function Education() {
    return (
        <form>
            <School />
            <Title />
            <Date />
        </form>
    )
}