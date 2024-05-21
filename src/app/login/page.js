// pages/index.js
export default function Home() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-200">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md ">
        <img src="/logo.png" alt="India Water Portal" className="w-30 h-24 mx-auto" />
          <h2 className="text-2xl font-bold text-center text-blue-700">Login</h2>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-2 border border-gray-300 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-2 border border-gray-300 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
  
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>
  
            <div>
              <button
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md group hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>
  
            <div className="flex items-center justify-center">
              <p className="text-sm text-gray-600">or continue with</p>
            </div>
  
            <div className="grid grid-cols-3 gap-3">
              <div>
                <a
                  href="#"
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Google</span>
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M22.447 11.587l-9.12.012-.01-4.02h13.413c.15.82.25 1.662.25 2.51 0 .848-.1 1.69-.247 2.51H22.447z"
                      fill="#4285F4"
                    />
                    <path
                      d="M15.535 6.742a6.455 6.455 0 012.844 4.846 6.645 6.645 0 01-2.87 4.924l3.383 3.307c2.897-2.583 4.613-6.428 4.613-10.648 0-.822-.08-1.634-.222-2.436L15.535 6.742z"
                      fill="#34A853"
                    />
                    <path
                      d="M9.382 14.32l-.015-2.685-4.08-.007.007 4.032c1.237 2.401 3.876 4.099 7.068 4.099 1.926 0 3.731-.635 5.131-1.733l-2.616-2.56a3.76 3.76 0 01-2.515 1.049c-1.601 0-2.958-1.076-3.404-2.53H9.382z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M3.44 7.795a6.549 6.549 0 01.06-5.34H.061V7.88l.01 4.02 3.368-.006z"
                      fill="#EA4335"
                    />
                  </svg>
                </a>
              </div>
  
              <div>
                <a
                  href="#"
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with GitHub</span>
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0a12 12 0 00-3.794 23.377c.6.111.82-.26.82-.578v-2.144c-3.34.727-4.043-1.552-4.043-1.552-.546-1.386-1.333-1.754-1.333-1.754-1.089-.744.083-.729.083-.729 1.205.083 1.837 1.236 1.837 1.236 1.07 1.831 2.809 1.303 3.492.996.111-.774.418-1.303.76-1.604-2.664-.306-5.465-1.332-5.465-5.931 0-1.309.468-2.381 1.235-3.22-.123-.306-.534-1.546.115-3.222 0 0 1.008-.322 3.301 1.23a11.495 11.495 0 016.003 0c2.293-1.552 3.301-1.23 3.301-1.23.648 1.676.237 2.916.115 3.222.77.839 1.235 1.911 1.235 3.22 0 4.609-2.804 5.62-5.476 5.921.43.373.812 1.115.812 2.258v3.346c0 .321.217.695.823.577A12 12 0 0012 0z"
                    />
                  </svg>
                </a>
              </div>
  
              <div>
                <a
                  href="#"
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Facebook</span>
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.493v-9.294H9.645V11.29h3.172V8.412c0-3.135 1.915-4.836 4.713-4.836 1.34 0 2.49.1 2.824.144v3.275h-1.938c-1.52 0-1.816.723-1.816 1.781v2.336h3.632l-.474 3.416h-3.158V24h6.193c.731 0 1.324-.593 1.324-1.324V1.324C24 .593 23.407 0 22.676 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
  
            <div className="flex items-center justify-center">
              <p className="text-sm text-gray-600">
                Don't have an account? <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Register for free</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    )
  }
  