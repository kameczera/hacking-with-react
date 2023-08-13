import React, { useEffect, useState } from "react"

const Champions = () => {
    const [champions, setChampions] = useState([])

    const fetchChampions = () => {
      fetch("http://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion.json")
        .then(response => {
          return response.json()
        })
        .then(data => {
          let champions = [];
          Object.keys(data.data).map((champion) => {champions.push(champion)});
          setChampions(champions)
        })
    }

    useEffect(() => {
      fetchChampions()
    }, [])

    return(
      <div>
      {champions.length > 0 && (
        <ul>
          {champions.map(champion => (
            <li>{champion}</li>
          ))}
        </ul>
      )}
    </div>
    )
}

export default Champions;