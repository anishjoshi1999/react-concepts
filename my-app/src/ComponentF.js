import React, { useContext } from 'react'
import { UserContext, ChannelContext } from './App'

function ComponentF() {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return (
    <>
      <h1>User context value {user},channel context value {channel} </h1>
    </>
  )
}
export default ComponentF