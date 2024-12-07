import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/create/" element={<Add />} />
        <Route path="/update/:id" element={<Edit />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
