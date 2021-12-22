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
  const images = ["https://images.unsplash.com/photo-1612090295951-656aaeac99d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80", "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxneW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"]

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