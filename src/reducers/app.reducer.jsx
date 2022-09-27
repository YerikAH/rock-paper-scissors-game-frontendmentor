export const initialState = { choice: "", enemy: "", result: "", menu: true };

export function optionsMore(state, action) {
  switch (action.select) {
    case "TIJERA":
      if (action.randomNumber === 0) {
        return {
          choice: "tijera",
          enemy: "piedra",
          result: "Perdiste",
          menu: false,
        };
      } else if (action.randomNumber === 1) {
        return {
          choice: "tijera",
          enemy: "papel",
          result: "Ganaste",
          menu: false,
        };
      } else {
        return {
          choice: "tijera",
          enemy: "tijera",
          result: "Empate",
          menu: false,
        };
      }

    case "PAPEL":
      if (action.randomNumber === 0) {
        return {
          choice: "papel",
          enemy: "piedra",
          result: "Ganaste",
          menu: false,
        };
      } else if (action.randomNumber === 1) {
        return {
          choice: "papel",
          enemy: "papel",
          result: "Empate",
          menu: false,
        };
      } else {
        return {
          choice: "papel",
          enemy: "tijera",
          result: "Perdiste",
          menu: false,
        };
      }
    case "PIEDRA":
      if (action.randomNumber === 0) {
        return {
          choice: "piedra",
          enemy: "piedra",
          result: "Empate",
          menu: false,
        };
      } else if (action.randomNumber === 1) {
        return {
          choice: "piedra",
          enemy: "papel",
          result: "Perdiste",
          menu: false,
        };
      } else {
        return {
          choice: "piedra",
          enemy: "tijera",
          result: "Ganaste",
          menu: false,
        };
      }
    case "RESET":
      return {
        choice: "",
        enemy: "",
        result: "",
        menu: true,
      };
    default:
      console.log("Upps");
      console.log(action.select);
      return state;
  }
}
