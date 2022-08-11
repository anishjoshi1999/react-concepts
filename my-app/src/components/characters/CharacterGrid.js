import React from 'react'
import CharacterItem from './CharacterItem'
// import  Spineer from '../ui/Spinner'


const CharacterGrid = ({items,isLoading}) => {
  return isLoading ? (<h1>Loading...</h1>) : (<section className="cards">
    {items.map((item)=> {
        return <CharacterItem key={item.char_id} item={item}></CharacterItem>
    })}
  </section>)
}

export default CharacterGrid