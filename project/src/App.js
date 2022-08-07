import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/index'
import { Header, Footer } from './components/index'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='main'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
