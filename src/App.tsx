import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

import Home from './containers/home/Home'
import Menu from './components/menu/Menu'
import ContextLoginManager from './contexts/ContextLoginManager'
import ContextProductManager from './contexts/ContextProductManager'
import LoginUser from './containers/login-user/LoginUser'
import CreateProduct from './containers/create-product/CreateProduct'
import DeleteProduct from './containers/delete-product/DeleteProduct'
import UpdateProduct from './containers/update-product/UpdateProduct'
import DetailProduct from './containers/detail-product/DetailProduct'
import NotFound from './containers/not-found/NotFound'

function App() {
  return (
    <ContextLoginManager>
      <ContextProductManager>
        <Router>
            <div className="container">
              <Menu />
              <Switch>

              <Route path="/" exact>
                  <LoginUser />
              </Route>
              <Route path="/products" exact>
                  <Home />
              </Route>
              <Route path="/products/create">
                  <CreateProduct />
              </Route>
              <Route path="/products/delete/:id">
                  <DeleteProduct />
              </Route>
              <Route path="/products/update/:id">
                  <UpdateProduct />
              </Route>
              <Route path="/products/detail/:id">
                  <DetailProduct />
              </Route>
              <Route path="*">
                  <NotFound />
              </Route>

              </Switch>

            </div>
        </Router>
      </ContextProductManager>
    </ContextLoginManager>
  );
}

export default App
