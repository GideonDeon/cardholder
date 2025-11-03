import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import Thankyou from "./pages/Thankyou";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/thankyou" element={<Thankyou/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
