import axios from "axios";
import { json } from "express/lib/response";
import React from "react";
import { SearchIcon, SearchBackground } from "../styles/Search.style";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      opt: [
        "",
        "Normal",
        "Fire",
        "Water",
        "Grass",
        "Electric",
        "Ice",
        "Fighting",
        "Poison",
        "Ground",
        "Flying",
        "Psychic",
        "Bug",
        "Rock",
        "Ghost",
        "Dark",
        "Dragon",
        "Steel",
        "Fairy",
      ],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    poke_search = 
    console.log("It works");
  }

  handleSubmit(event) {
    const pokemon_api = "https://pokeapi.co/api/v2/pokemon";
    let poke_search = "";
    axios.get(pokemon_api + poke_search)
    .then((res) => {
      const resu = res.data['results'];
      // const pokemon_index = resu.map((obj) => {obj.name});
      console.log(JSON.stringify(resu))
      .catch((err) => {
        console.log("Unknown Pokemon" + err);
      });
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <SearchBackground>
          <form onSubmit={this.handleSubmit}>
            <div>Search for Pokemon name</div>
            <input
              type="text"
              defaultValue="Search your pokemon"
              onChange={this.handleChange}
            />
            <button type="submit">
              <SearchIcon />
            </button>
            <br></br>
            <div>Choose Pokemon type</div>
            <select value="Type">
              {this.state.opt.map((opti) => (
                <option key={opti.toString()}>{opti}</option>
              ))}
            </select>
          </form>
        </SearchBackground>
      </div>
    );
  }
}

export default Search;
