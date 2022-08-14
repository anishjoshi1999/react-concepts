import React from 'react'
import {UserContext,ChannelContext} from './App'

function ComponentF(){
  return (
    <div>
      <UserContext.Consumer>
        {
          user => {
            return (
              <ChannelContext.Consumer>
                {
                  channel => {
                    return <h1>User context value {user},channel context value {channel} </h1>
                  }
                }
              </ChannelContext.Consumer>
            )
          }
        }
      </UserContext.Consumer>
    </div>
  )
}
export default ComponentF