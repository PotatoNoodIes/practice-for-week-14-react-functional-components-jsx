import notCharmander from "./images/bulbasaur.jpg"

function Showcase() {
    let favPokemon = 'Charmander';
    let pokeCharacteristics = {
        'type' : 'Fire',
        'move' : 'Flame'
    }

    let typeStyle = {
      backgroundColor : 'green',
      color: 'white'
    }

    let moveStyle = {
      backgroundColor : '#FFFFFF',
      color: '#00FF00'
    }
  return (
    <div>
        {favPokemon}'s
      <h1>Showcase Component</h1>
      <img src={notCharmander} alt="notFavPokemon" />
      <h2><span style={typeStyle}>{favPokemon}'s type is {pokeCharacteristics.type}</span> 
      <span style={moveStyle}>and one of their moves is {pokeCharacteristics.move}</span></h2>
    </div>
  );
}

export default Showcase;