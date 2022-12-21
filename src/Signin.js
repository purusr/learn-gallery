import { useState } from "react"
import axios from "axios"

const Signin = ()=>{

const [email, setEmail] = useState()
const [loginpassword, setLoginPassword] = useState()
const handleSubmitLogin= (e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/user/signin', {email: email, password: loginpassword})
    .then((res) =>{
        console.log(res)
    }).catch((error) =>{
        console.log('An error occured')
    })

}
    return(
        <div className="container text-center">
        <div style={{ padding: '50px' }}>
        <form>
            <div className="text-center"  style={{ width: '400px', display: 'inline-block', padding:'5px' }}>
            <input onChange={(e) =>{setEmail(e.target.value)}} value={email} className="form-control" placeholder="E-mail"></input>
            </div>
            <br/>
            <div className="text-center"  style={{ width: '400px', display: 'inline-block', padding:'5px'}}>
            <input  onChange={(e) =>{setLoginPassword(e.target.value)}} value={loginpassword} className="form-control" placeholder="Password"></input>
            </div>
            <br/>
            <button onClick={(e) => handleSubmitLogin(e)} className="btn btn-primary pa-10" type="submit">Sign In</button>
        </form>
        </div>
        </div>
    )
}

export default Signin
