import React, { useState, useEffect } from 'react';
import Cards from '../Card/Card';
import  './home.scss';
import { Container,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function Home() {
  const [data, setData] = useState([]);
  const [fetched, setFetched] = useState(false);
  console.log('render sayısı')

  useEffect(() => {
    if(!fetched){
      fetch('https://api.tvmaze.com/shows')
        .then(res => {
          console.log(res)
          return res.json();
        })
        .then(data => {
            setData(data)
            setFetched(true)
          console.log(data)
        })
      }
  }, []);
if(fetched){
  return (
    <>
          <Row className="title">
                <h1>Film Listeleri</h1>
          </Row>
    <Container className="container">
       
      {
        data && Object.keys(data).map((videoKey,idx)=><div key={idx}
      > <Cards info={data[videoKey]}/></div>)}       
    </Container>
     </>
  );}
  if(!fetched){
    return(
      <div>Loading...</div>
    )
  }
}
export default Home