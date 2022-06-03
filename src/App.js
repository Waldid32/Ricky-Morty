import { useState } from "react";
import "./App.css";
import Character from "./components/Character";
import imgaRickMorty from "./img/rick-morty.png";

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Ryck & Morty</h1>
        {characters ? (
          <Character characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imgaRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar Personaje
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
