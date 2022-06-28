import React from "react";
import AppLayout from "./pages/AppLayout";

/*
RULES YOU FIND IN THE COMPONENTS
Import Order:
- Third Party Libraries
- Custom Components
- Utils Imports
- Constant imports
- Image Imports
- Create file specific Constants
(Separate each import category by one empty line)

Rules for Components:
- Very first line — Destrucutre Props
- Destructure redux state
- Initialize State Variables 
- Create Refs 
- Initialize hooks ( useDispatch)
- Write all useEffects
- Create const/var/let specific to Component
- Call functions — If there
(Separate each section by one empty line) */

function App() {
  return (
    <div className="App">
      <AppLayout />
    </div>
  );
}

export default App;
