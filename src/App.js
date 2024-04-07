import { Route,Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Greeting from "./pages/Greeting";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="greeting" element={<Greeting/>}/>
    </Routes>
  );
}

export default App;
