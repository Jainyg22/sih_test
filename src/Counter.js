import {use, useState} from 'react'

function Counter(){
    // let x=0; // dubara render nhi ho rha page isiliye local variable me dikkat aa rhi h

    const [x,setX]=useState(0); // pass initial value of x returns[var,stateSetterFn]
    const [isEditing,setIsEditing]=useState(false);
    const [todos,setTodos]=useState(['todo 1','todo 2'])
    let z=5
    return (
        <>      
            {/*    
            count Z : {z}
            <button onClick={()=> z+=1}>Inc</button>
            <br />

            Count X : {x} is{(x%2==0) ? 'Even' : 'Odd'}
            <button onClick={()=> setX(x+1)}>Inc</button>
            <button onClick={()=> setX(x-1)}>Dec</button>
            <br />
            {
                (isEditing)?<input/> : <p>Some to do</p>
            }
            <button onClick={()=>setIsEditing(!isEditing)}> Click</button> */}
            <ul>
                {todos.map((todo)=> <li>{todo}</li>)}
                <button onClick={()=>setTodos([...todos,'another one'])}>Click</button>
            </ul>
        </>
    )
}
export default Counter;