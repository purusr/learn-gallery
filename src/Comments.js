import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Comments (){
  const {id} = useParams()
  const [comment, setComment] = useState();
  const [cmntimage, setCmntimage] = useState();


  useEffect(()=>{
      setTimeout(()=>{
     axios.get(`http://localhost:5000/getComment/${id}`).then(res => setCmntimage(res.data))
  
      }, 2000)
  }, [comment,id])

console.log(cmntimage);
  const updateComment = (id) =>{
    axios.post(`http://localhost:5000/updateComments/${id}`, {comment: comment})
    setComment('')
  }

  return(
  cmntimage ?
        (
         <div className="container text-center">
            <div className="col">
              <div class=" row">
                <img src={cmntimage && cmntimage.image_url} alt="logo" style={{ width: '700px', height: '450px', padding: '20px' }}/>
                <br/>
              </div>
              <hr/>
            </div>
            <div className='row'>
              <div className='col'>
                  <input className='form-control' onChange={(e) => setComment(e.target.value)} type='text' name='comment' value={comment}></input>
                  <br/>
                  <button className='btn btn-primary' style={{ float: 'left' }} onClick={()=>{updateComment(id)}}>Comment</button>
              </div>
            </div>
            <br/>
            {cmntimage && cmntimage.comments.map( (cmntdata) =>
            <div className='row text-start'>
                <p> - {cmntdata}</p>
                <hr/>
            </div>
            )}
        </div>
    ) : (
      <h1 className='text-center'>Loading</h1>
  )  
  )
}

export default Comments
