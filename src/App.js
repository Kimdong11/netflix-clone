import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnloggedIn from './Screen/UnLoggedIn';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/netflix-clone' element={<UnloggedIn />}></Route>
                <Route path='/main' element={<h1>Neflix main</h1>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
