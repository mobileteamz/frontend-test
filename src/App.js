import React from "react";
import "./App.css";
import FormState from "./components/Form/context/FormState";
import Modal from "./components/layout/Modal";
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
