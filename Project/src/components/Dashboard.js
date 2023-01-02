import React, {useState} from 'react';
// import Menu from './menu';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Menu = [

  {
    id: 3,
    image: "./ima/Blockchain.jpg",
      name: "Blockchain Developement",
      category: "CSE",
      join: "8 left",
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia deleniti cum."
  
      
    },
    {
        id: 1,
        image: "./ima/WebDev.jpg",
        name: "Web Technology",
        category: "CSE",
        join: "2 left",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia deleniti cum."
    
    
    },
    {
      id: 2,
      image: "./ima/android.jpg",
      name: "Android Developement",
      category: "CSE",
      join: "5 left",
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia deleniti cum."


    },
    {
      id: 4,
      image: "./ima/ML.jpg",
      name: "Machine Learning",
      category: "CSE",
      join: "1 left",
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia deleniti cum."
      
      
    },
    {
        id: 8,
        image: "./ima/Drone.jpg",
        name: "Drone Design",
        category: "ECE",
        join: "8 left",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia deleniti cum."
  
  
    },
    {
      id: 7,
      image: "./ima/green.jpg",
      name: "Green Engineering",
      category: "ME",
      join: "10 left",
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia deleniti cum."
      

    },
    {
      id: 9,
      image: "./ima/HomeAuth.jpg",
      name: "Authentication System",
      category: "ECE",
      join: "10 left",
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia deleniti cum."


    },
    {
      id: 5,
      image: "./ima/Automation.jpg",
      name: "Automation",
      category: "ME",
      join: "7 left",
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia deleniti cum."
    
    
    },
    {
      id: 6,
      image: "./ima/cycle.jpg",
      name: "Chainless Bicycle",
      category: "ME",
      join: "3 left",
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia deleniti cum."
  
  
  },
  

]

export default function Dashboard() {
  const [items, setItems] = useState(Menu);
  const filterItem = (category)=>{
    const updateItem = Menu.filter((currElem)=>{
      return currElem.category === category;
    })
    setItems(updateItem);
  }



  return (
    <>
      <div className="cont">
      <div className="dash-btn">
        <Button className="dashBtn" onClick={()=>filterItem('CSE')} variant="">CSE</Button>
        <Button className="dashBtn" onClick={()=>filterItem('ECE')} variant="">ECE</Button>
        <Button className="dashBtn" onClick={()=>filterItem('ME')} variant="">ME</Button>
        <Button className="dashBtn" onClick={()=>setItems(Menu)} variant="">ALL</Button>
      </div>

        <div className="cont2">
        <Row xs={1} md={2} lg={3} className="g-4 myRow">
        {items.map((elem)=>{
          const {id,name,image,category,join,description}=elem;
          return(
            <Col>
            <Card className="bg-dark">
              <Card.Img variant="top" src={image} className='image-fluid dash-img' />
              <Card.Body>
                <Card.Title className="text-light"><h5>{name}</h5></Card.Title>
                <Card.Text className="text-light" style={{fontSize: "16px"}} >{description}
                </Card.Text>
                <div className='join'>
                  <h5>{join}</h5>
                  <Button className="ms-auto enroll-btn" variant="">Enroll Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          )
        })}
        
        
    </Row>
        </div>
      </div>

    </>
  )
}
