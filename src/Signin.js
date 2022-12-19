const Signin = ()=>{
    return(
        <div className="container text-center">
        <div style={{ padding: '50px' }}>
        <form>
            <div className="text-center"  style={{ width: '400px', display: 'inline-block', padding:'5px' }}>
            <input className="form-control" placeholder="E-mail"></input>
            </div>
            <br/>
            <div className="text-center"  style={{ width: '400px', display: 'inline-block', padding:'5px'}}>
            <input className="form-control" placeholder="Password"></input>
            </div>
            <br/>
            <button className="btn btn-primary pa-10" type="submit">Sign In</button>
        </form>
        </div>
        </div>
    )
}

export default Signin