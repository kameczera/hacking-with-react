import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import ChampionBox from "./ChampionBox";
import "./Champions.css";
import ChampionButton from "./ChampionButton";

const Champions = () => {
  const [champions, setChampions] = useState([]);

  const fetchChampions = () => {
    fetch(
      "http://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let champions = [];
        Object.entries(data.data).map((key) => {
          champions.push({
            name: key[0],
            s: key[1],
          });
        });
        setChampions(champions);
      });
  };

  useEffect(() => {
    fetchChampions();
  }, []);

  return (
    <div>
      <Header />
      <Menu selected="Champions" />
      <div className="lists">
        <div className="searchChampion">
          {champions.map((champion) => (
            <ChampionButton name={champion.name} />
          ))}
        </div>
        <table>
          <thead>
            <tr>
              <th align="left" scope="col" className="key-rank">
                Rank
              </th>
              <th align="left" scope="col" className="key-champion">
                Champion
              </th>
              <th align="left" scope="col" className="key-tier">
                Tier
              </th>
            </tr>
          </thead>
          <tbody>
            {champions.map((champion) => (
              <ChampionBox name={champion.name} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Champions;
