import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";

import './App.css'

import {Home} from "./Home.jsx";
// import {Template1} from "./templates/Template1.jsx";
import {Template2} from "./templates/Template2.jsx";
import {Template3} from "./templates/Template3.jsx";
// import {Template4} from "./templates/Template4.jsx";
// import {Template as Template5} from "./template5/Template.jsx";
// import {Template as Template6} from "./template6/Template.jsx";
import {Template as Template7} from "./template7/Template.jsx";
// import {Template as Template8} from "./template8/Template.jsx";
import {Template as Template9} from "./template9/Template.jsx";

const Routers = () => {
    return (<Routes>
            <Route path="/" element={<Home/>}/>
            {/*<Route path="/template-1" element={<Template1/>}/>*/}
            <Route path="/template-2" element={<Template2/>}/>
            <Route path="/template-3" element={<Template3/>}/>
            {/*<Route path="/template-4" element={<Template4/>}/>*/}
            {/*<Route path="/template-5" element={<Template5/>}/>*/}
            {/*<Route path="/template-6" element={<Template6/>}/>*/}
            <Route path="/template-7" element={<Template7/>}/>
            {/*<Route path="/template-8" element={<Template8/>}/>*/}
            <Route path="/template-9" element={<Template9/>}/>
        </Routes>)
}

const Header = () => {
    return (<header>
        <nav>
            MJML Blocks:
            <li><NavLink to='/'>Home</NavLink></li>
            {/*<li><NavLink to='template-1'>Template-1</NavLink></li>*/}
            <li><NavLink to='template-2'>Template-2</NavLink></li>
            <li><NavLink to='template-3'>Template-3</NavLink></li>
            {/*<li><NavLink to='template-4'>Template-4</NavLink></li>*/}
            {/*<li><NavLink to='template-5'>Template-5</NavLink></li>*/}
            {/*<li><NavLink to='template-6'>Template-6</NavLink></li>*/}
            <li><NavLink to='template-7'>Template-7</NavLink></li>
            {/*<li><NavLink to='template-8'>Template-8</NavLink></li>*/}
            <li><NavLink to='template-9'>Template-9</NavLink></li>
        </nav>
    </header>)
}

function App() {
    return (<BrowserRouter>
        <div className="container">
            <Header/>
            <Routers/>
        </div>
    </BrowserRouter>)
}

export default App
