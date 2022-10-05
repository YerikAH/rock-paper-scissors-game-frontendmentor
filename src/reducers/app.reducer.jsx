export const initialState = {
  choice: "",
  enemy: "",
  result: "",
  menu: true,
  count: 0,
};

export function optionsMore(state, action) {
  switch (action.select) {
    case "SCISSORS":
      if (action.randomNumber === 0) {
        let scoreTemp = state.count - 1;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "SCISSORS",
          enemy: "ROCK",
          result: "LOSE",
          menu: false,
          count: state.count - 1,
        };
      } else if (action.randomNumber === 1) {
        let scoreTemp = state.count + 1;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "SCISSORS",
          enemy: "PAPER",
          result: "WIN",
          menu: false,
          count: state.count + 1,
        };
      } else if (action.randomNumber === 2) {
        let scoreTemp = state.count;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "SCISSORS",
          enemy: "SCISSORS",
          result: "TIED",
          menu: false,
          count: state.count,
        };
      } else if (action.randomNumber === 3) {
        let scoreTemp = state.count - 1;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "SCISSORS",
          enemy: "SPOCK",
          result: "LOSE",
          menu: false,
          count: state.count - 1,
        };
      } else if (action.randomNumber === 4) {
        let scoreTemp = state.count + 1;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "SCISSORS",
          enemy: "LIZARD",
          result: "WIN",
          menu: false,
          count: state.count + 1,
        };
      }

    case "PAPER":
      let scoreTemp = state.count + 1;
      localStorage.setItem("score", `${scoreTemp}`);
      if (action.randomNumber === 0) {
        return {
          choice: "PAPER",
          enemy: "ROCK",
          result: "WIN",
          menu: false,
          count: state.count + 1,
        };
      } else if (action.randomNumber === 1) {
        let scoreTemp = state.count;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "PAPER",
          enemy: "PAPER",
          result: "TIED",
          menu: false,
          count: state.count,
        };
      } else if (action.randomNumber === 2) {
        let scoreTemp = state.count - 1;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "PAPER",
          enemy: "SCISSORS",
          result: "LOSE",
          menu: false,
          count: state.count - 1,
        };
      } else if (action.randomNumber === 3) {
        let scoreTemp = state.count + 1;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "PAPER",
          enemy: "SPOCK",
          result: "WIN",
          menu: false,
          count: state.count + 1,
        };
      } else if (action.randomNumber === 4) {
        let scoreTemp = state.count - 1;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "PAPER",
          enemy: "LIZARD",
          result: "LOSE",
          menu: false,
          count: state.count - 1,
        };
      }
    case "ROCK":
      if (action.randomNumber === 0) {
        let scoreTemp = state.count;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "ROCK",
          enemy: "ROCK",
          result: "TIED",
          menu: false,
          count: state.count,
        };
      } else if (action.randomNumber === 1) {
        let scoreTemp = state.count - 1;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "ROCK",
          enemy: "PAPER",
          result: "LOSE",
          menu: false,
          count: state.count - 1,
        };
      } else if (action.randomNumber === 2) {
        let scoreTemp = state.count + 1;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "ROCK",
          enemy: "SCISSORS",
          result: "WIN",
          menu: false,
          count: state.count + 1,
        };
      } else if (action.randomNumber === 3) {
        let scoreTemp = state.count - 1;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "ROCK",
          enemy: "SPOCK",
          result: "LOSE",
          menu: false,
          count: state.count - 1,
        };
      } else if (action.randomNumber === 4) {
        let scoreTemp = state.count + 1;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "ROCK",
          enemy: "LIZARD",
          result: "WIN",
          menu: false,
          count: state.count + 1,
        };
      }
    case "LIZARD":
      if (action.randomNumber === 0) {
        let scoreTemp = state.count - 1;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "LIZARD",
          enemy: "ROCK",
          result: "LOSE",
          menu: false,
          count: state.count - 1,
        };
      } else if (action.randomNumber === 1) {
        let scoreTemp = state.count + 1;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "LIZARD",
          enemy: "PAPER",
          result: "WIN",
          menu: false,
          count: state.count + 1,
        };
      } else if (action.randomNumber === 2) {
        let scoreTemp = state.count - 1;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "LIZARD",
          enemy: "SCISSORS",
          result: "LOSE",
          menu: false,
          count: state.count - 1,
        };
      } else if (action.randomNumber === 3) {
        let scoreTemp = state.count + 1;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "LIZARD",
          enemy: "SPOCK",
          result: "WIN",
          menu: false,
          count: state.count + 1,
        };
      } else if (action.randomNumber === 4) {
        let scoreTemp = state.count;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "LIZARD",
          enemy: "LIZARD",
          result: "TIED",
          menu: false,
          count: state.count,
        };
      }
    case "SPOCK":
      if (action.randomNumber === 0) {
        let scoreTemp = state.count + 1;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "SPOCK",
          enemy: "ROCK",
          result: "WIN",
          menu: false,
          count: state.count + 1,
        };
      } else if (action.randomNumber === 1) {
        let scoreTemp = state.count - 1;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "SPOCK",
          enemy: "PAPER",
          result: "LOSE",
          menu: false,
          count: state.count - 1,
        };
      } else if (action.randomNumber === 2) {
        let scoreTemp = state.count + 1;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "SPOCK",
          enemy: "SCISSORS",
          result: "WIN",
          menu: false,
          count: state.count + 1,
        };
      } else if (action.randomNumber === 3) {
        let scoreTemp = state.count;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "SPOCK",
          enemy: "SPOCK",
          result: "TIED",
          menu: false,
          count: state.count,
        };
      } else if (action.randomNumber === 4) {
        let scoreTemp = state.count - 1;
        localStorage.setItem("score", `${scoreTemp}`);
        return {
          choice: "SPOCK",
          enemy: "LIZARD",
          result: "LOSE",
          menu: false,
          count: state.count - 1,
        };
      }
    case "RESET":
      return {
        choice: "",
        enemy: "",
        result: "",
        menu: true,
        count: state.count,
      };
    case "DATA":
      return {
        choice: "",
        enemy: "",
        result: "",
        menu: true,
        count: action.newScore,
      };
    default:
      return state;
  }
}
