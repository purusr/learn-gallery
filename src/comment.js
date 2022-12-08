import { useEffect, useState } from 'react'

function Comment() {
    const [images, setImage] = useState()
  
    useEffect(() =>{
    fetch('https://picsum.photos/v2/list')
    .then(res => res.json())
    .then(d=> setImage(d))
    },[1])
  
    console.log(images);
  
    return (
  <div className='container-fluid'>
  <nav className="navbar navbar-expand-lg bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/"><img src={logo192} alt="logo" style={{ width: '70px', height: '70px' }}/>
      </a>
      <h3 className='navbar-brand'>Gallery App  </h3>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <div class="container text-center">
    <div class="row">
      {images && images.map(picsum =>{
        return(
        <div class="col-6 pa-10 col-sm-3">
          <a className="navbar-brand" href="/"><img src={picsum.download_url} alt="logo" style={{ width: '250px', height: '250px', padding: '20px' }}/></a>
        </div>
        )
      })
      }
    </div>
  </div>
  
  
  </div>
  
  
    )
  }
  
  export default Comment;
  