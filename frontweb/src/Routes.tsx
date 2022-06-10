import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "pages/Home";
import Navbar from "components/Navbar";

const Rotas = () =>{

    return (
        <BrowserRouter>
            <Navbar/>
         <Routes> 
            <Route path="/">
                <Home/>
            </Route>
         </Routes>
        </BrowserRouter>
    );

}

export default Rotas;