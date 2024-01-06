import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getAllHistory } from '../services/allAPI'

function WatchHistory() {

  const [history , setHistory] =useState([])

  const watchAllHistory = async()=>{
    const {data} = await getAllHistory()
    //  console.log(data);
     setHistory(data)
  }


console.log(history);

  useEffect(()=>{
    watchAllHistory()
  },[])
  return (
    <>
    <div className='container mt-5 d-flex justify-content-between'>
      <h3>watch history</h3>
      <Link to={'/home'} className='d-flex align-items-center' style={{textDecoration:'none',color:'white',
    fontSize:'20px'}}>back to home</Link>
</div>
<Table className='table mt-5 mb-5 container'>
  <thead>
    <tr>
      <th>#</th>
      <th>caption</th>
      <th>Url</th>
      <th>time stamp</th>
    </tr>
  </thead>
  <tbody>
    {
      history?.length>0?
      history.map((item, index)=>(
      <tr>
        <td>{index +1}</td>
    <td>{item.caption}</td>
    <td><a href={item.embedLink} target='_blank' >{item.embedLink}</a></td>
    <td>{item.timestamp}</td>
    </tr>
      )
    ):
    <p>nothing to display</p>}
  </tbody>
</Table>
    </>
  )
}

export default WatchHistory