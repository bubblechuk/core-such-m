import logo from './logo.svg';
import './App.css';
import {Header} from "./header/Header"
import {Footer} from "./footer/Footer"
import { Main } from './main/Main';
function App() {
  return (
    <div className="main">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
