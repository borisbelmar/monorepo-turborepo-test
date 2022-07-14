import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useAuth } from 'auth-context'

export default function DefaultLayout({ children }) {
  const { isAuthenticated, clearSession } = useAuth()
  return (
    <div className="min-h-screen flex flex-col w-full">
      <nav className="bg-primary-500 text-white py-2 px-8">
        <ul className="flex justify-between gap-8 max-w-lg mx-auto">
          {!isAuthenticated ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <button onClick={clearSession}>
                Logout
              </button>
            </>
          )}
        </ul>
      </nav>
      <main className="flex flex-1 flex-col">
        {children}
      </main>
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
}
