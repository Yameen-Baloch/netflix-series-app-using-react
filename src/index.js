import React from 'react';
import ReactDom from 'react-dom';
import Card from './Cards';
import CardData from './CardData';
import './index.css';

function ncard(val){
  return(
  <Card 
      sname = {val.sname} 
      imgsrc = {val.imgsrc} 
      title = {val.title} 
      link = {val.link}
       />
  )
}

ReactDom.render(
  <>
    <h1 className='heading'>List Of top 5 Netflix Series.</h1>
      {CardData.map(ncard)}
  </>,
  document.getElementById('root')
)

