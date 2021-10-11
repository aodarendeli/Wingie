import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import  "./card.scss";
import { Button } from "react-bootstrap";
//import { useHistory } from "react-router";
import { Modal } from "react-bootstrap";
import { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import stars from '../../icons/star.png';

import DT_Action from '../../redux/actions/DT_Action'
import {useDispatch,useSelector} from 'react-redux'
function Cards(prop){
 // const history = useHistory();
 /* const redirect = () => {
    history.push('./ozgur')
  }*/
  const [lgShow, setLgShow] = useState(false);
  const dispatch=useDispatch()
  const filmData=useSelector((state)=>state.reducer1.data)
  useEffect(() => {
 console.log(filmData)
  }, [filmData])
// Redux u kartlara tıklandıgı zaman ısımlerı bastırmak ıcın kullandım. 
  return(

        <div class="x">
        <Row>
          <Card style={{ width: '24rem' }}
          onClick={()=>{
           dispatch(DT_Action(prop.info.name))
        // console.log(prop.info.name)
          }}>
            <Card.Img variant="top" src={`${ prop.info.image.medium }` }/>
            <Card.Body>
                <Card.Title>{prop.info.name} <hr/>Rating : {prop.info.rating.average} <img class="ımage" src={stars}></img> </Card.Title>
                <Card.Text class="deneme">
                Türler : {prop.info.genres}<br/>
                Çıkış Tarihi : {prop.info.premiered}<br/>
                Language : {prop.info.language}
                
                </Card.Text>
                <Button onClick={() => setLgShow(true)}>Detay</Button>
                <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                  {prop.info.name}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>{prop.info.summary}</Modal.Body>
              </Modal>

            </Card.Body>
            </Card>
      </Row>
        </div>
    );
}
export default Cards;