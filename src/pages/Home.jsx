import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Add from '../components/Add'
import View from '../components/View'

function Home() {
  const[uploadVideoServerResponse,setUploadVideoServerResponse] = useState({})
  return (
    <>
       <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
      <div className="add-videos">
        <Add setUploadVideoServerResponse={setUploadVideoServerResponse} />
      </div>
      <Link to={'/watchhistory'} style={{textDecoration:'none',color:'white'}}><h4 className='border shadow p-3 rounded'>Watch history</h4></Link>
    </div>
    <div className="container-fluid w-100 mt-5 mb-5 d-flex justify-content-between align-items-center">
      
      <div className=" add-videos col-lg-9">
      <h4 className='mb-5 ' style={{fontSize:'40px'}}>All Stories</h4>
        <View uploadVideoServerResponse={uploadVideoServerResponse}/>
      </div>
      
    </div>

    </>
  )
}

export default Home