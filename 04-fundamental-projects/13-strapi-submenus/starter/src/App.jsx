import {useGlobalContext} from './Context'

const App = () => {
  const {isSideBarOpen} = useGlobalContext()
  console.log(isSideBarOpen)
  
  return <h2>Strapi Starter</h2>;

};
export default App;
