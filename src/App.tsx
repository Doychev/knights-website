// app styles
import '@/styles/App.scss'

// router
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Activities from './pages/Activities';
import Coaches from './pages/Coaches';
import Contacts from './pages/Contacts';
import History from './pages/History';
import Practices from './pages/Practices';


function App() {

    return (
        <div className="App">

            {/* header */}

            <Routes>
                <Route index element={<Home />} />
                <Route path='activities' element={<Activities />} />
                <Route path='coaches' element={<Coaches />} />
                <Route path='contacts' element={<Contacts />} />
                <Route path='histroy' element={<History />} />
                <Route path='practices' element={<Practices />} />
            </Routes>

            {/* footer */}

        </div>
    )
}

export default App
