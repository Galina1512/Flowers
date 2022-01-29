import { useState } from 'react';
import { flowers } from './flowers'; 
import { data } from './data';
import icon1 from './icon-from.png';
import icon2 from './icon-to.png';
import './App.css';

function App() {
  const [pictura, setPictura] = useState(0);
  const {image, doc} = flowers[pictura];

  const [card, setCard] = useState(data);
  const [showMore, setShowMore] = useState(false);

  const predFlowers =()=>{
    setPictura((pictura=>{
      pictura --;
      if (pictura <0) {
        pictura = flowers.length-1
      }
      return pictura
    }))
  }

  const nextFlowers =()=>{
    setPictura((pictura=>{
      pictura ++;
      if (pictura > flowers.length-1) {
        pictura=0;
      }
      return pictura;
    }))
  }

  return (
    <div>
      <div  className="App">
      <h1 className='h1'>Цветы на подоконнике</h1>
      
      <div className='baner'>
        <button onClick={predFlowers} className='navigation btn1'><img src={icon1} width='50px' alt='icon'/> </button>
        <img src={image} alt='flowers' className='picinpic'/>
        <button onClick={nextFlowers} className='navigation btn2'><img src={icon2} width='50px' alt='icon'/> </button>
      </div >
      <h4>{doc} </h4>
      </div>

      <div className='cards'>
      {card.map((item =>{
        const{id, name, description, image, cost} = item;

        const removestate = (id) =>{
          let newState = card.filter(card => card.id !==id);
          setCard(newState)     
         }

            return(
            <div key={id} className='card'>
                <h1>{name} </h1>
                <img src={image} width='200px' alt='pictura'/>
                <div className='text'>
                  <p>{showMore ? description : description.substring(0, 75) +" ..."}
                  <button onClick={()=>setShowMore (!showMore) } className='btnshow'>{showMore ? "Показать меньше" : "Показать больше"} </button> </p>
                </div>
                <h2>Цена от {cost} руб. </h2>
                <button onClick={()=> removestate(id) } className='btn'>Удалить</button>
            </div>
          
        );
      }))}
    </div>
    <div className='cards'>
      <button onClick={()=>setCard([]) } className='btn'> Удалить все</button>
    </div>
    </div>
    );
    }

export default App;
