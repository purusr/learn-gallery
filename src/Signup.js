import { useState } from 'react'
import axios from 'axios'
const Signup = ()=>{
    const [firstname, setFirstname] = useState()
    const [email, setEmail] = useState()
    const [lastname, setLastname] = useState()
    const [password, setPassword] = useState()
    const [password2, setPassword2] = useState()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/user/signup', {
         email:email, firstName: firstname, lastName:lastname, password:password,confirmPassword:password2
        }).then((res) => console.log(res)).catch((error) => console.log(error))
    }
    return(
        <div className="container text-center">
        <div style={{ padding: '50px' }}>
        <form>
            <div className="text-center"  style={{ width: '400px', display: 'inline-block', padding:'5px' }}>
            <input onChange={(e) => setFirstname(e.target.value)} value={firstname} className="form-control" placeholder="Firstname"></input>
            </div>
            <br/>
            <div className="text-center"  style={{ width: '400px', display: 'inline-block', padding:'5px' }}>
            <input onChange={(e) => setLastname(e.target.value)} value={lastname} className="form-control" placeholder="Lastname"></input>
            </div>
            <br/>
            <div className="text-center"  style={{ width: '400px', display: 'inline-block', padding:'5px' }}>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" placeholder="E-mail"></input>
            </div>
            <br/>
            <div className="text-center"  style={{ width: '400px', display: 'inline-block', padding:'5px'}}>
            <input onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" placeholder="Password"></input>
            </div>
            <br/>
            <div className="text-center"  style={{ width: '400px', display: 'inline-block', padding:'5px'}}>
            <input onChange={(e) => setPassword2(e.target.value)} value={password2} className="form-control" placeholder="Confirm Password"></input>
            </div>
            <br/>
            <button onClick={(e) => handleSubmit(e)} className="btn btn-primary pa-10" type="submit">Sign Up</button>
        </form>
        </div>
        </div>
    )
}

export default Signup
