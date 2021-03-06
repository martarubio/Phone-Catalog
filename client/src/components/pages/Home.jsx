import React, {useEffect, useState} from 'react'
import PhoneService from '../../services/phone.service'

const phoneService = new PhoneService()

export default function Home() {

  const [phones, setPhones] = useState([])

  useEffect (() => {
    phoneService.getAllPhones()
    .then(response => {setPhones (response.data)})
    .catch(err => console.log (err))
  }, [])

  return (
    phones ?
    
    <div>
{phones.map((elm, idx) => {
  return (
    <>
    <div key={idx}></div>
<div>

<h1>{elm.name}</h1>
<h2>{elm.manufacturer}</h2>
<p>{elm.description}</p>
<h4>{elm.color}</h4>
<h4>{elm.price}</h4>

</div>
</>

  )
})
}

    </div>
    :
    <div>
    <h1>Loading...</h1>
    </div>
  )
}



