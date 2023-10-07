import "./General-Info.css"

function Name(props){
    return (
        <>
            <label htmlFor="name">
                Name:
            </label>
            <input type="text" id="name" name="name" placeholder="John Smith..."/>
        </>
    );

}

function Email(props){
    return (
        <>
            <label htmlFor="email">
                Email:
            </label>
            <input type="email" name="email" id="email" placeholder="yourEmail@example.com"/>
        </>
    );

}

function Phone(props){
    return (
        <>
            <label htmlFor="phone">
                Phone:
            </label>
            <input type="tel" name="phone" id="phone" placeholder="01-2345-6789"/>
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