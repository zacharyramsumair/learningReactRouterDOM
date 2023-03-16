import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {

  let navigate = useNavigate()
  useEffect(()=>{
    setTimeout(() => {
      navigate('/')
    }, 1000);
  })
  return (
    <div>Error 404</div>
  )
}

export default Error