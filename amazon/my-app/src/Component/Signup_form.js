
import {useState} from "react" ;
export default function SignupForm (){
    const [email ,setEmail] = useState("");
    const [password,setpassword]= useState("");
function handleSubmit(event){
    event.preventDefault();
    alert(`submitted with email:${email} and password:${password}`);
}
return (
    <div style ={{maxWidth: 400,margin:"2rem auto" , borderRadius:"10px"}}>
        <h1> Sign Up </h1>
        <form onSubmit = {handleSubmit}>
            <div style = {{marginBottom:"1rem"}}>
                <label>
                    Email
                    <input type="email" placeholder="you@example.com" onChange={(e) => setEmail(e.target.value)}/>

                </label>
            </div>
            <div style ={{marginBottom:"1rem"}}>
                <label>
                    password
                    <input type="password" placeholder="....." onChange={(e) =>setpassword(e.target.value)} />
                </label>
            </div>


            <button type="submit">Create account</button>
        </form>
    </div>
)
}