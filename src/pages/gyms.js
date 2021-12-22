import React, { useEffect, useState } from 'react';
import { api } from '../api';
  
const Gyms = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api.get("/api/gym")
        setData(data)
      } catch {
        return
      } finally {
        setLoading(false)
      }
    }
  }, [])

  return (
    <div>
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <h1>Gyms</h1>
    </div>
    <ul>
      {data.map(gym => {
        return <h3>{gym.name}</h3>
      })}
    </ul>
    </div>
  );
};
  
export default Gyms;