import './App.css'
function Mainview({images}){

    return(
        <div className="container text-center">
            <div className="row">
                {images && images.map(picsum => {
                    return (
                        <div class="col-6 pa-10 col-sm-3 border border-1">
                            <a className="navbar-brand" href="/"><img src={picsum.image_url} alt="logo" style={{ width: '250px', height: '250px', padding: '20px' }} /></a>
                            <div className="row">
                                <div className="col">
                                <button className="iconbtn"><i class="fa fa-comments fa-3x"></i></button>
                                <h4>{picsum.comments.length}</h4>
                                </div>
                                <div className="col">
                                    <button className='iconbtn'><i class="fa fa-thumbs-up fa-3x"></i></button>
                                    <h4>{picsum.likes}</h4>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Mainview