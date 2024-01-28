import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/', {
      replace: true
  })
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-gray-900">Login</h1>
      <button
        className="w-full max-w-sm mt-8 bg-indigo-500 hover:bg-indigo-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}
