import {Link} from 'react-router-dom';
function Mainview({images}){

    return(
        <div className="container text-center">
            <div className="row">
                {images && images.map(picsum => {
                    return (
                        <div class="col-6 pa-10 col-sm-3 border border-1">
                            <a className="navbar-brand" href="/"><img src={picsum.download_url} alt="logo" style={{ width: '250px', height: '250px', padding: '20px' }} /></a>
                            <div className="row">
                                <div className="col">
                                <a href='/comments'><i class="fa fa-comments fa-3x"></i></a>
                                <h4>2</h4>
                                </div>
                                <div className="col">
                                    <a><i class="fa fa-thumbs-up fa-3x"></i></a>
                                    <h4>3</h4>

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