import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Login from './screens/Login'
import MyArticles from './screens/MyArticles'
import NotFound from './screens/NotFound'
import Register from './screens/Register'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyArticles />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
