import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { addToHistory, deleteAVideo } from '../services/allAPI'
import Modal from 'react-bootstrap/Modal';

function Videocard({displayVideo , setDeleteVideoStatus}) {

  const [show , setShow] = useState(false)


  const handleClose = () => setShow(false);

  const handleShow = async() => {
    setShow(true)

    const {caption , embedLink} = displayVideo
    const today = new Date()
    let timestamp = new Intl.DateTimeFormat('en-GB',{year:'numeric' , month:'2-digit' , day:'2-digit' , hour:'2-digit' , minute:'2-digit', second:'2-digit'}).format(today)
    console.log(timestamp);

    let videoDetails = {
      caption, embedLink, timestamp
    }

   const response = await addToHistory(videoDetails)
   console.log(response);
  
  }

  const removeVideo = async (id)=>{
    const response = await deleteAVideo(id)
    setDeleteVideoStatus(true)
  }
   
  

  return (
    <>
    <Card style={{ width: '100%' , height:'390px' }} className='mb-4'>
      <Card.Img onClick={handleShow} height={'280px'} variant="top" src={displayVideo.url} />
      <Card.Body>
        <Card.Title></Card.Title>
        <h6>{displayVideo.caption}</h6>
        <button onClick={()=>removeVideo(displayVideo?.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="530" src={`${displayVideo.embedLink}?autoplay=1`} title={displayVideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
         
      </Modal>

    </>
  )
}

export default Videocard