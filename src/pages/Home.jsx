import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

    let navigate = useNavigate()
  return (
    <div>
      this is the home page
      <div>
        <button onClick={()=> navigate("/catalog")}>See all Movies</button>
      </div>
    </div>
  )
}

export default Home
