import React from 'react'
import ComponentC from './ComponentC';
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div>
      <UserContext.Provider value={"Anish"}>
        <ChannelContext.Provider value={'dhangadhi'}>
          <ComponentC></ComponentC>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App;