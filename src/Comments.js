import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Comments (){
  const {id} = useParams()
  const [comment, setComment] = useState();
  const [cmntimage, setCmntimage] = useState();


  useEffect(()=>{
    axios.get(`http://localhost:5000/getComment/${id}`).then(res => setCmntimage(res.data))
  }, [comment,id])

console.log(comment);
  const updateComment = (id) =>{
    axios.post(`http://localhost:5000/updateComments/${id}`, {comment: comment})
  }
    return(
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
                  <button style={{ float: 'left' }} onClick={()=>{updateComment(id)}}>Comment</button>
              </div>
            </div>
            <br/>
            {cmntimage && cmntimage.comments.map( (cmntdata) =>
            <div className='row text-start'>
                <p> {cmntdata}</p>
            </div>
            )}
        </div>
    )
}

export default Comments
