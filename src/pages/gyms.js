import React, { useEffect, useState } from 'react';
import { api } from '../api';
import { GoLocation }  from 'react-icons/go'
import { SiMinutemailer } from 'react-icons/si'
  
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
    getData()
  }, [])
  const images = ["https://images.unsplash.com/photo-1605163598789-e6b9a7d43725?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3NHx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1606335543141-4928822daabe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTQ1fHxneW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"]

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
    <ul style={{ display: "grid", gridTemplateColumns: "50% 50%", padding: "10px 64px", gap: 30 }}>
      {data.map((gym, index) => {
        return <div>
          <img src={images[index]} alt={gym.name} style={{ height: "400px", marginBottom: 10, maxWidth: "100%" }} />
            <h2>{gym.name}</h2>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 15 }}>
              <p style={{ fontWeight: 600 }}>
                <GoLocation style={{ marginRight: 5 }} />
                Location
              </p>
              <p>
              {gym.location}
              </p>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 15 }}>
              <p style={{ fontWeight: 600 }}>
                <SiMinutemailer style={{ marginRight: 5 }} />
                Zip code
              </p>
              <p>
              {gym.zip_code}
              </p>
            </div>
            <div>
              <p style={{ fontWeight: 600 }}>
                Programms:
              </p> 
      
                {gym.programs?.map(programm => {
                  return <p style={{ marginLeft: 10 }}>
                    {programm.name}
                  </p>
                })}
            </div>
        </div>
      })}
    </ul>
    </div>
  );
};
  
export default Gyms;