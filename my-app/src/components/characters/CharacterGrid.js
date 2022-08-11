import React from 'react'
import CharacterItem from './CharacterItem'
import spineer from '../../img/spinner.gif'


const CharacterGrid = ({items,isLoading}) => {
  return isLoading ? (<img src={spineer} style={{width:"200px" ,margin:'auto', display:"block"}}  alt = "Loading" />) : (<section className="cards">
    {items.map((item)=> {
        return <CharacterItem key={item.char_id} item={item}></CharacterItem>
    })}
  </section>)
}

export default CharacterGrid