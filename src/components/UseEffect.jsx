import "../styles/UseEffect.css"
import { useState, useEffect } from "react";
const UseEffect = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    //log the text Render each time the component renders
    useEffect(() => {
        console.log("Render")
    })

    //log the text hi when the component mounts
    useEffect(() => {
        console.log("Hi")
    }, [])
    
    //log the text my name and age when ever the name, age changes
    useEffect(() => {
        if (name && age) {
            console.log(`My name is ${name} and i am ${age} years old`)
        } else if (name) {
            console.log(`My new name is ${name}`)
        } else if (age) {
            console.log(`My new age is ${age}`)
        }
    }, [name, age])
    
    

    //Change the document title only after there has been a 1 sec delay since the last time the name was changed 
    useEffect(() => {
        const handler = setTimeout(() => { 
            if (name) {
                document.title = name
            }
        }, 1000)
        
        return () => {
            clearTimeout(handler)
        }
    })
    


    return <>
        <h1>UseEffect Exercises</h1>
        <ul>
            <li>Log the text Render each time the component re-renders</li>
            <li>Log the text Hi when the component mounts</li>
            <li>Log the text My name is {name} and i am {age} years old whenever the name or age changes </li>
            <li>Change the document title only after there has been a 1 sec delay since the last time the name was changed </li>
        </ul>
        <h2>Inputs</h2>
        <input type="text" placeholder="Enter the name"value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="number" placeholder="Enter the age" value={age} onChange={(e)=>setAge(e.target.value)} />
    </>
}
export default UseEffect;