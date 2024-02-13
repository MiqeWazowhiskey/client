import './App.css'
import {Home} from "./pages/Home.tsx";
import {Layout} from "./components/Layout.tsx";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Artists} from "./pages/Artists.tsx";
import {Wallet} from "./pages/Wallet.tsx";
import {Create} from "./pages/Create.tsx";

function App() {

  return (
    <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/create" element={<Create/>} />
      </Routes>
    </Layout>
    </Router>
  )
}

export default App
