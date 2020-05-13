import React from "react";
import "./App.css";
import FormState from "./components/context/FormState";
import Modal from "./components/Modal";
import Form from "./components/Form/Form";

function App() {
  return (
    <FormState>
      <Modal>
        <Form />
      </Modal>
    </FormState>
  );
}

export default App;
