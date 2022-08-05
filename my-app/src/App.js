import React, {useState,useEffect} from 'react';
function App() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth)
  const handleResize = () => {
    setwindowWidth(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener('resize',handleResize)

    return ()=> {
      window.addEventListener('resize',handleResize)
    }
  },[])

  return(
    <div>{windowWidth}</div>
  )
}

// First example of useState
// function App() {
//   const [resourceType, setResourceType] = useState('posts')
//   const [items,setItems] = useState([])

//   useEffect(()=>{
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//     .then(response => response.json())
//     .then(json=> setItems(json))
//   },[resourceType])

//   return(
//     <>
//     <div>
//       <button onClick={()=> setResourceType('posts')}>Posts</button>
//       <button onClick={()=> setResourceType('users')}>Users</button>
//       <button onClick={()=> setResourceType('comments')}>Comments</button>
//     </div>
//     <h1>{resourceType}</h1>
//     {items.map(item => {
//       return <pre>{JSON.stringify(item)}</pre>
//     })}
//       </>
//   )
// }
export default App;
