export const initialState = { choice: "", enemy: "", result: "", menu: true };

export function optionsMore(state, action) {
  switch (action.select) {
    case "SCISSORS":
      if (action.randomNumber === 0) {
        return {
          choice: "SCISSORS",
          enemy: "ROCK",
          result: "LOSE",
          menu: false,
        };
      } else if (action.randomNumber === 1) {
        return {
          choice: "SCISSORS",
          enemy: "PAPER",
          result: "WIN",
          menu: false,
        };
      } else if (action.randomNumber === 2) {
        return {
          choice: "SCISSORS",
          enemy: "SCISSORS",
          result: "TIED",
          menu: false,
        };
      } else if (action.randomNumber === 3) {
        return {
          choice: "SCISSORS",
          enemy: "SPOCK",
          result: "LOSE",
          menu: false,
        };
      } else if (action.randomNumber === 4) {
        return {
          choice: "SCISSORS",
          enemy: "LIZARD",
          result: "WIN",
          menu: false,
        };
      }

    case "PAPER":
      if (action.randomNumber === 0) {
        return {
          choice: "PAPER",
          enemy: "ROCK",
          result: "WIN",
          menu: false,
        };
      } else if (action.randomNumber === 1) {
        return {
          choice: "PAPER",
          enemy: "PAPER",
          result: "TIED",
          menu: false,
        };
      } else if (action.randomNumber === 2) {
        return {
          choice: "PAPER",
          enemy: "SCISSORS",
          result: "LOSE",
          menu: false,
        };
      } else if (action.randomNumber === 3) {
        return {
          choice: "PAPER",
          enemy: "SPOCK",
          result: "WIN",
          menu: false,
        };
      } else if (action.randomNumber === 4) {
        return {
          choice: "PAPER",
          enemy: "LIZARD",
          result: "LOSE",
          menu: false,
        };
      }
    case "ROCK":
      if (action.randomNumber === 0) {
        return {
          choice: "ROCK",
          enemy: "ROCK",
          result: "TIED",
          menu: false,
        };
      } else if (action.randomNumber === 1) {
        return {
          choice: "ROCK",
          enemy: "PAPER",
          result: "LOSE",
          menu: false,
        };
      } else if (action.randomNumber === 2) {
        return {
          choice: "ROCK",
          enemy: "SCISSORS",
          result: "WIN",
          menu: false,
        };
      } else if (action.randomNumber === 3) {
        return {
          choice: "ROCK",
          enemy: "SPOCK",
          result: "LOSE",
          menu: false,
        };
      } else if (action.randomNumber === 4) {
        return {
          choice: "ROCK",
          enemy: "LIZARD",
          result: "WIN",
          menu: false,
        };
      }
    case "LIZARD":
      if (action.randomNumber === 0) {
        return {
          choice: "LIZARD",
          enemy: "ROCK",
          result: "LOSE",
          menu: false,
        };
      } else if (action.randomNumber === 1) {
        return {
          choice: "LIZARD",
          enemy: "PAPER",
          result: "WIN",
          menu: false,
        };
      } else if (action.randomNumber === 2) {
        return {
          choice: "LIZARD",
          enemy: "SCISSORS",
          result: "LOSE",
          menu: false,
        };
      } else if (action.randomNumber === 3) {
        return {
          choice: "LIZARD",
          enemy: "SPOCK",
          result: "WIN",
          menu: false,
        };
      } else if (action.randomNumber === 4) {
        return {
          choice: "LIZARD",
          enemy: "LIZARD",
          result: "TIED",
          menu: false,
        };
      }
    case "SPOCK":
      if (action.randomNumber === 0) {
        return {
          choice: "SPOCK",
          enemy: "ROCK",
          result: "WIN",
          menu: false,
        };
      } else if (action.randomNumber === 1) {
        return {
          choice: "SPOCK",
          enemy: "PAPER",
          result: "LOSE",
          menu: false,
        };
      } else if (action.randomNumber === 2) {
        return {
          choice: "SPOCK",
          enemy: "SCISSORS",
          result: "WIN",
          menu: false,
        };
      } else if (action.randomNumber === 3) {
        return {
          choice: "SPOCK",
          enemy: "SPOCK",
          result: "TIED",
          menu: false,
        };
      } else if (action.randomNumber === 4) {
        return {
          choice: "SPOCK",
          enemy: "LIZARD",
          result: "LOSE",
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
