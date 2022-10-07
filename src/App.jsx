import { useState } from "react";
import Game from "./components/Game";
import Modal from "./components/Modal";
function App() {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal && <Modal setModal={setModal} />}
      <Game setModal={setModal} />
    </>
  );
}

export default App;
