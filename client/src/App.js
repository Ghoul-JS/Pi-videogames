import './App.css';
import { Routes, Route } from "react-router-dom"
import CardPrueba from './components/homePage/cards/CardPrueba.jsx'
import LadingPage from './components/ladingPage/LadingPage.jsx'
import DetailGame from './components/detailGame/DetailGame.jsx'
import Form from './components/createForm/Form.jsx'

function App() {
  return (
    <div className="App">
      {/* {location.pathname === '/' ? null : <Nav />} */}
      <Routes>
        <Route default path='/' element={<LadingPage />} />
        <Route path='/videogames' element={<CardPrueba />} />
        <Route path='/videogames/:id' element={<DetailGame />} />
        <Route path='/videogames/form' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
