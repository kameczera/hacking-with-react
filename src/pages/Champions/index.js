import React, { useEffect, useState } from "react"
import Header from "../../components/Header"
import Menu from "../../components/Menu"

const Champions = () => {
    const [champions, setChampions] = useState([])

    const fetchChampions = () => {
      fetch("http://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion.json")
        .then(response => {
          return response.json()
        })
        .then(data => {
          let champions = [];
          Object.entries(data.data).map((key) => {
            champions.push({
              name: key[0],
              s: key[1],
            });
          });
          setChampions(champions);
        })
    }
    
    useEffect(() => {
      fetchChampions()
    }, [])

    console.log(champions);
    
    return(
      <div>
        <Header />
        <Menu selected = "champions"/>
        {champions.length > 0 && (
          <ul>
            {champions.map(champion => (
              <li key={champion.name}>{champion.name}</li>
            ))}
          </ul>
        )}
    </div>
    )
}

export default Champions;