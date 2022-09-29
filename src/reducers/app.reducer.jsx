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
      } else if (action.randomNumber === 2) {
        return {
          choice: "tijera",
          enemy: "tijera",
          result: "Empate",
          menu: false,
        };
      } else if (action.randomNumber === 3) {
        return {
          choice: "tijera",
          enemy: "tiburon",
          result: "Perdiste",
          menu: false,
        };
      } else if (action.randomNumber === 4) {
        return {
          choice: "tijera",
          enemy: "lagarto",
          result: "Ganaste",
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
      } else if (action.randomNumber === 2) {
        return {
          choice: "papel",
          enemy: "tijera",
          result: "Perdiste",
          menu: false,
        };
      } else if (action.randomNumber === 3) {
        return {
          choice: "tijera",
          enemy: "tiburon",
          result: "Ganaste",
          menu: false,
        };
      } else if (action.randomNumber === 4) {
        return {
          choice: "tijera",
          enemy: "lagarto",
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
      } else if (action.randomNumber === 2) {
        return {
          choice: "piedra",
          enemy: "tijera",
          result: "Ganaste",
          menu: false,
        };
      } else if (action.randomNumber === 3) {
        return {
          choice: "tijera",
          enemy: "tiburon",
          result: "Perdiste",
          menu: false,
        };
      } else if (action.randomNumber === 4) {
        return {
          choice: "tijera",
          enemy: "lagarto",
          result: "Ganaste",
          menu: false,
        };
      }
    case "LAGARTO":
      if (action.randomNumber === 0) {
        return {
          choice: "lagarto",
          enemy: "piedra",
          result: "Perdiste",
          menu: false,
        };
      } else if (action.randomNumber === 1) {
        return {
          choice: "lagarto",
          enemy: "papel",
          result: "Ganaste",
          menu: false,
        };
      } else if (action.randomNumber === 2) {
        return {
          choice: "lagarto",
          enemy: "tijera",
          result: "Perdiste",
          menu: false,
        };
      } else if (action.randomNumber === 3) {
        return {
          choice: "lagarto",
          enemy: "tiburon",
          result: "Ganaste",
          menu: false,
        };
      } else if (action.randomNumber === 4) {
        return {
          choice: "lagarto",
          enemy: "lagarto",
          result: "Empate",
          menu: false,
        };
      }
    case "TIBURON":
      if (action.randomNumber === 0) {
        return {
          choice: "tiburon",
          enemy: "piedra",
          result: "Ganaste",
          menu: false,
        };
      } else if (action.randomNumber === 1) {
        return {
          choice: "tiburon",
          enemy: "papel",
          result: "Perdiste",
          menu: false,
        };
      } else if (action.randomNumber === 2) {
        return {
          choice: "tiburon",
          enemy: "tijera",
          result: "Ganaste",
          menu: false,
        };
      } else if (action.randomNumber === 3) {
        return {
          choice: "tiburon",
          enemy: "tiburon",
          result: "Empate",
          menu: false,
        };
      } else if (action.randomNumber === 4) {
        return {
          choice: "tiburon",
          enemy: "lagarto",
          result: "Perdiste",
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
