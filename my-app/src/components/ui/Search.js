import React ,{useState}from 'react'

const Search = ({getQuery}) => {
    const [text, settext] = useState('')
    const on_Change = (q) => {
        settext(q)
        getQuery(q)
    }

  return (
    <section className="search">
        <form action="">
            <input type="text" className='form-control' placeholder='Search Characters' autoFocus value={text} onChange={(event)=>{on_Change(event.target.value)}}/>
        </form>
    </section>
  )
}

export default Search