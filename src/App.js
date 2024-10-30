import logo from './logo.svg';
import './App.css';
import {Header} from "./header/Header"
import {Footer} from "./footer/Footer"
import { Main } from './main/Main';
function App() {
  return (
    <div className="main">
      <Header/>
      <div class="mainContent">
        <div id="grad_left"></div>
      <Main/>
      <div id="grad_right"></div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
