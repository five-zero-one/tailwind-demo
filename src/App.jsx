import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/responsive" element={<Responsive />} />
                <Route path="/simple" element={<Simple />} />
                <Route path="/daisy" element={<Daisy />} />
            </Routes>
        </Router>
    );
}

function Home() {
    return (
        <NavBar />
    );
}

function NavBar() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a>Item 1</a></li>
                    <li tabIndex={0}>
                        <a>
                            Parent
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
}


function Responsive() {
    return (
        <div id="container" className="flex flex-col h-screen">
            <div id="header" className="p-4 bg-gray-400 flex">Header</div>
            <div id="main" className="flex flex-col md:flex-row flex-grow">
                <div className="p-4 bg-gray-300 flex">
                    Sidebar
                </div>
                <div className="p-4 bg-gray-100 flex-grow">
                    Content
                </div>
            </div>
            <div id="footer" className="p-4 bg-gray-500">Footer</div>
        </div>
    );
}

function Grid(props) {
    return (
        <div className="h-screen grid place-items-center">
            {props.children}
        </div>
    );
}

function Simple(props) {
    return (
        <Grid>
            <ButtonOne />
            <ButtonTwo />
            <ButtonThree />
        </Grid>
    );
}

function ButtonOne() {
    return (
        <a href="#_" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
            <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span class="relative text-white">Button Text</span>
            </span>
        </a>
    );
}

function ButtonThree() {
    return (
        <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
            <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Button Text</span>
        </a>
    );
}


function ButtonTwo() {
    return (
        <a href="#_" class="relative px-6 py-3 font-bold text-white rounded-lg group">
            <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
            <span class="relative">Button Text</span>
        </a>
    );
}

function Daisy() {
    return (
        <Grid>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </Grid>
    );
}


/**!SECTION
 * "rounded-md border border-neutral-500 bg-neutral-700 hover:bg-neutral-600 transition-colors text-neutral-100 flex flex-row items-start cursor-pointer">

  <img src="http://placekitten.com/100/100" alt="cat" class="py-4 pl-4 aspect-square" />

  <p class="mx-4 my-3 leading-4">

    Lorem ipsum dolor sit
 */