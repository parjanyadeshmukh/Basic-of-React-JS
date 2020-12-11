import React from 'react';
import ReactDOM from 'react-dom';
import  NewFunction  from './newfile'
import {Name, a } from './newfile'
const currentdate=new Date().toLocaleDateString();
const currenttime=new Date().toLocaleTimeString();


const nameDetails = {
  name:'parjanya',
  age:20,

}


//array of objects

const b = [
  {
    name:'parjanya',
    age:20
  },
  {
    name:'megha',
    age:20
  },
  {
    name:'shree',
    age:20
  }
]
const Megha1 = ()=>{
  //object of objects
const a = {
  'megha':{
    name:'megha',
    age:12
  },
  'parjanya':{
    name:'parjanya',
    age:10

  }
  
}


b.map(names =>console.log(names),'array')
 Object.entries(a).map(name=>console.log(name,'name-1')) 
  console.log(Object.keys(a) ,'keys')
  console.log(Object.values(a) ,'values')
  console.log(Object.entries(a) ,'entries')
  return (
    <>
    <h1>Second function</h1>
  <p>function done success</p>

    </>
  )

}
 


ReactDOM.render(
  <>
  <h1>Visitor Application System</h1>
  <h2>The current date is {currentdate}</h2>
  <h2>The current time is {currenttime}</h2>
  {Megha1()}
  
  </>
  ,document.getElementById('root')
); 