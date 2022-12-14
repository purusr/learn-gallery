import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import imgg from './pexels.jpg'

function Comments (){
  const {id} = useParams()
  const [comment, setComment] = useState();
  const [cmntimage, setCmntimage] = useState();


  useEffect(()=>{
    axios.get(`http://localhost:5000/getComment/${id}`).then(res => setCmntimage(res.data))
  }, [1])

console.log(cmntimage);
  const updateComment = (id) =>{
    axios.post(`http://localhost:5000/updateComments/${id}`, {comment: comment})
  }
    return(
         <div className="container text-center">
            <div className="row">
            <div class="col col-sm-3">
              <img src={imgg} alt="logo" style={{ width: '700px', height: '450px', padding: '20px' }}/>
              <br/>
            </div>
            <hr/>
            <div className='col'>
                <input onChange={(e) => setComment(e.target.value)} type='text' name='comment' value={comment}></input>
                <button onClick={()=>{updateComment()}}>Comment</button>
            </div>
            <div className='col text-start'>
              <p>This is a sample comment to display here.</p>
            </div>
            </div>
        </div>
    )
}

export default Comments
