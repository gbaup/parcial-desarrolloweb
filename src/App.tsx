import './App.css';
import {Provider} from "react-redux";
import {PetsContainer} from "./components/PetsContainer/PetsContainer.tsx";
import {store} from "./store/store.ts";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {EditPet} from "./components/EditPet/EditPet.tsx";


function App() {
    return (
        <>
            <Provider store={store}>
                <Router>
                    <Routes>

                        <Route path="/" element={<PetsContainer/>}/>

                        <Route path="/edit-pet" element={<EditPet/>}/>
                    </Routes>
                </Router>
            </Provider>
        </>
    );
}

export default App;
