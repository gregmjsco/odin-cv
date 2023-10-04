import "./General-Info.css"

function Name(){
    return (
        <>
            <label htmlFor="name">
                Name:
            </label>
            <input type="text" id="name" name="name" />
        </>
    );

}

function Email(){
    return (
        <>
            <label htmlFor="email">
                Email:
            </label>
            <input type="email" name="email" id="email" />
        </>
    );

}

function Phone(){
    return (
        <>
            <label htmlFor="phone">
                Phone:
            </label>
            <input type="tel" name="phone" id="phone" />
        </>
    );

}

export default function GeneralInfo() {
    return (
        <form>
            <Name />
            <Email />
            <Phone />
        </form>
    );
}