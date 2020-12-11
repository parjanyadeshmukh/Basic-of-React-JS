import React from 'react';
import ReactDOM from 'react-dom';
const currentdate=new Date().toLocaleDateString();
const currenttime=new Date().toLocaleTimeString();

const functionName = props =>{
   console.log(name, 'name')
const {name,age} = props
    return (
        <>
        <h1>I have been exported </h1>
        <p>{name}</p>
        <p>{age}</p>
        </>
    )

}

const Name =props=> {
 const {name,age} = props
    return(
        <>
        <h2>i have been exported</h2>
        <p>{name}</p>
        <p>{age}</p>
        </>
    )
}
export default functionName
export{ Name}
const a='shree'
export {a}