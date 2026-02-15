import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data);
    //         console.log(data);
    //     })
    // }, [])
  return (
    <div className='bg-gray-500 p-4 text-center text-3xl font-bold text-white'>Github Followers: {data.followers}
    <img width={300} src={data.avatar_url} alt="Avatar" />
    <br />
    {data.bio}
    <br />
    {data.blog}
    </div>
  )
}

export default Github

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();
}