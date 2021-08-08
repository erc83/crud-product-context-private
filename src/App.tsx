import './App.css'

import Home from './containers/home/Home'
import Menu from './components/menu/Menu'
import ContextLoginManager from './contexts/ContextLoginManager'
import ContextProductManager from './contexts/ContextProductManager'

function App() {
  return (
    <ContextLoginManager>
      <ContextProductManager>
        <div>
          <Menu />
          <div className="container">
            <Home />
          </div>
        </div>
      </ContextProductManager>
    </ContextLoginManager>
  );
}

export default App
