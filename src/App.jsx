import "./App.css";
import { Form } from "./Components/Form";
import Logo from "./Components/Logo";
import Pakgeing from "./Components/Pakgeing";
import { Status } from "./Components/Status";

const App = () => {
  return (
    <>
      <div className="app">
        <Logo />
        <Form />
        <Pakgeing />
        <Status />
      </div>
    </>
  );
};

export default App;
