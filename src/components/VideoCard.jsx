import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'
import { addToHistory,deleteAVideo } from '../services/allAPI';

function VideoCard({displayData,setDeleteVideo,insideCategory}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = async () =>{
    setShow(true);
    //make api call 
    const {caption,embedLink} = displayData
    let today = new Date()
    let timeStamp = new Intl.DateTimeFormat('en-us',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute :'2-digit'}).format(today)
    
    let videoDetails ={
     caption,embedLink,timeStamp
    }
    await addToHistory(videoDetails)
   }

    //remove video

  const removeVideo = async (id)=>{
    const response = await deleteAVideo(id)
     setDeleteVideo(true)
     console.log(response);
    
   }
   
  return (
    <>
      <Card className='ms-5 mt-5  justify-content-between' style={{ width: '18rem' }}>
      <Card.Img onClick={handleShow} variant="top" height={'180px'}  src={`${displayData?.url}`} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
          <h5>{displayData?.caption}</h5>

       { 

       insideCategory?"":<button onClick={()=>removeVideo(displayData?.id)} className='btn'><i className="fa-solid fa-trash fa-fade text-danger"></i></button>
      
      
      }

        </Card.Title>
       
        
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width={"100%"} height="360" src={`${displayData?.embedLink}?autoplay=1`} title={displayData?.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard