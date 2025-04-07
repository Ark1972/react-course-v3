import {useGlobalContext} from './Context'
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Sidebar from "./Sidebar.jsx";
import Submenu from "./Submenu.jsx";

const App = () => {
  const {isSideBarOpen} = useGlobalContext()
  console.log(isSideBarOpen)
  
  return <main>
    <Navbar />
    <Hero />
    <Sidebar />
    <Submenu />
  </main>;

};
export default App;
