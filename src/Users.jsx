import { useEffect, useState } from "react"

export default function Users(){
    const [users , setUsers]= useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return(
        <div>
            <h3>users:{users.length}</h3>
        </div>
    )
}
/**
 * যে ডেটা কে লোড করবো সে ডেটাকে সে ডেটার  state ডিক্লেয়ার 
 * 2. useEffect with callback and  dependency array
 * 3.fetch use  করব ডেটা লোড করার জন্য
 */