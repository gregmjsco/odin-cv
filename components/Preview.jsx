export default function Preview({formData}) {
    return (
        <>
            <h1>Preview Section</h1>;
            <div>

            <p>First Name: {formData.userName}</p>
            <p>Email: {formData.email}</p>
            <p></p>
            
            </div>
            </>
        ) 
        }