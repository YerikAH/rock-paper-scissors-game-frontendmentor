import { useReducer, useState } from "react";
import { initialState } from "./reducers/app.reducer";
import { optionsMore } from "./reducers/app.reducer";
function App() {
  //0 = piedra
  //1 = papel
  //2 = tijera
  const [state, dispatch] = useReducer(optionsMore, initialState);
  const [randomNumber, setRandomNumber] = useState(0);

  const handleTijera = () => {
    console.log("señal", parseInt(Math.random * 2));
    setRandomNumber(parseInt(Math.random() * 2));
    dispatch({
      select: "TIJERA",
      randomNumber: randomNumber,
    });
    console.log(randomNumber);
  };
  const handlePapel = () => {
    setRandomNumber(parseInt(Math.random() * 2));
    console.log(randomNumber);
    dispatch({ select: "PAPEL", randomNumber: randomNumber });
  };
  const handlePiedra = () => {
    setRandomNumber(parseInt(Math.random() * 2));
    dispatch({ select: "PIEDRA", randomNumber: randomNumber });
    console.log(randomNumber);
  };
  const handleReset = () => {
    dispatch({ select: "RESET" });
  };

  return (
    <>
      {state.menu && (
        <div>
          <h2>Piedra papel o tijera</h2>
          <button onClick={handlePiedra}>Piedra</button>
          <button onClick={handlePapel}>Papel</button>
          <button onClick={handleTijera}>Tijera</button>
        </div>
      )}
      {!state.menu && (
        <p>
          Tu elegiste: {state.choice}, tu enemigo eligio:{state.enemy}, El
          resultado es: {state.result}
          <button onClick={handleReset}>Reset</button>
        </p>
      )}
    </>
  );
}

export default App;
