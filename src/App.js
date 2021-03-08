import React from 'react'
import {render} from 'react-dom'
//import Item from './Item'
import './style.css'
import Item from './Item'




//component called app
const App = () => {
    const name = 'Ishaq' 
    const amount = 1
    return (
        <div> 
            <Item name={name} amount={amount}/>
        </div> 
    )
}
//creates the render, and where it will be posted
render(<App/>, document.getElementById('root'))