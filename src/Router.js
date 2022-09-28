import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Weather from "./pages/Weather";
import Home from "./pages/Home";
const Router= ()=>(
    <BrowserRouter>
    <Routes>
        <Route exact path="/weather" element={<Weather/>}/>
        <Route exact path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
)
export default Router