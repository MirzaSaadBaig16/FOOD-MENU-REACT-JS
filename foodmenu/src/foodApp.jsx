import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
const [menu, setMenu]= useState([])
const [search , setSearch ] =useState("")
 console.log(menu);

useEffect( ()=>{
  try {
    async function getmenu (){
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`)
      const data =await res.json()
      console.log(data);
       setMenu(data.data.recipes)
    }
    getmenu()
  } catch (error) {
    console.log(error);
  }
  },[search])
  return (
          <div>
          < Header />
          <SubHeader setSearch={setSearch}/>
          <Menu  menu={menu} />
          <Footer setMenu={setMenu}/>
          </div>
      );
}

function Header(){
  return(

    <h1 style={{textAlign:"center",color:"lightseagreen",fontSize:"2.6rem",}}>AHSAN REACT PIZZA CO.</h1>
  )
}

function SubHeader({setSearch}){
  return(
   <div className='subHeader'>
    <h2>Our Menu</h2>
    <input type="text" 
    placeholder='search what you want to eat'
    onChange={(e)=>setSearch(e.target.value)}
    />
   </div>
  )
}

function Menu({menu}){
  return(
    <div className='food-container'>

    {menu.map((c)=>(
      <CardComponent key={c.id} img={c.image_url} Title={c.title}/>
    ))}
    </div>
    // <CardComponent />
    )
}

function Footer(){
  return(

    <div className='footer'>
      <p>we're open 24/7 , come visit us or order online.</p>
      <button>order now</button>
    </div>
      )
}


function CardComponent({img,Title}){
  return (
    <Card className='menu-card' style={{ width: '18rem' }}>
      <Card.Img className='img' variant="top" src={img} />
      <Card.Body className='card-body'>
        <Card.Title className='card-title' >{Title}</Card.Title>
      </Card.Body>
    </Card>
  );
}




export default App;