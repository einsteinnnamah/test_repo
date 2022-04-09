import './App.css';
import {Route, Routes} from "react-router-dom"
import LandingPage from "../pages/landing";

function App() {
    return (
        <div className="app_wrapper">
            <Routes>
                <Route index path="/" element={<LandingPage />}/>
            </Routes>
        </div>
    );
}

export default App;
