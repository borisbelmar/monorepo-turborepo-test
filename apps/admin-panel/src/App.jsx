import { AuthProvider } from 'auth-context'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'
import Router from './components/Router'

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider persistence={localStorage}>
          <Router />
        </AuthProvider>
      </QueryClientProvider>
      <ToastContainer />
    </>
  )
}

export default App
