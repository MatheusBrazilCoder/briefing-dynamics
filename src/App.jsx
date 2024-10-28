//serve para criarmos elementos padrão
import './assets/css/app.css';
import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;
