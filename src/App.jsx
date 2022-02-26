import React from 'react';
import Card from './Cards';
import CardData from './CardData';

const App = () =>(
   
  <>
    <h1 className='heading'>List Of top 5 Netflix Series.</h1>
      {CardData.map((val) =>{
  return(
      <Card 
        key = {val.id}
        sname = {val.sname} 
        imgsrc = {val.imgsrc} 
        title = {val.title} 
        link = {val.link}
        />
  )
})}
  </>

)

export default App;