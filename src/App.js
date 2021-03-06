import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Screen/LoginPage';
import MainPage from './Screen/MainPage';
import UnloggedIn from './Screen/UnLoggedIn';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/netflix-clone' element={<UnloggedIn />}></Route>
                <Route path='/netflix-clone/login' element={<LoginPage />}></Route>
                <Route path='/netflix-clone/main' element={<MainPage />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
