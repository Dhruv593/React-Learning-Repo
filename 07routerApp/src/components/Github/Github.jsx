import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch('https://api.github.com/users/Dhruv593')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //     setData(data)
  //   })
  // }, [])

  return (
    <div className='text-center bg-gray-600 text-white m-5 p-4 text-3xl'>
      <h1>Name: {data.name}</h1>
      <br />
      <p>Github Followers : {data.followers}</p>
      <br />
      <img src={data.avatar_url} alt="Github Profile Photo" width='200' />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Dhruv593')
  return response.json()
}
