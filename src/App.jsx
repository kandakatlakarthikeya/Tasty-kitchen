import {BrowserRouter, Routes, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Cart from './components/Cart'
import RestaurantDetails from './components/RestaurantDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

const sortByOptions = [
  {id: 1, value: 'Lowest', displayText: 'Lowest'},
  {id: 2, value: 'Highest', displayText: 'Highest'},
]

const App = () => (
  <BrowserRouter>

    <Routes>

      <Route
        path="/login"
        element={<LoginForm />}
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home sortByOptions={sortByOptions} />
          </ProtectedRoute>
        }
      />

      <Route
        path="/restaurant/:id"
        element={
          <ProtectedRoute>
            <RestaurantDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>

  </BrowserRouter>
)

export default App