import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchMovie from "./pages/SearchMovie";
import DetailMovie from "./pages/DetailMovie";
// eslint-disable-next-line no-unused-vars
import MyCarousel from "./components/MyCarousel";
import NavbarComponent from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
          <MyCarousel/>
            <NavbarComponent />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/searchMovie" element={<SearchMovie />} />
                <Route path="/movie/:id" element={<DetailMovie />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
