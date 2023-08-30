import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import { Home } from "./Components/Home/Home";
import { Everything } from "./Components/Everything/Everything";
import { ItemDesc } from "./Components/ItemDescription/ItemDesc";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/store" element={<Everything/>}/>
        <Route path="store/products/:id" element={<ItemDesc/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
