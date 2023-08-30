import { NavLink, Outlet } from 'react-router-dom'
import StatusNotification from 'src/components/StatusNotification'

function Layout () {
  return (
    <div className="min-h-screen w-screen grid grid-rows-[46px_1fr]">
      <header className="w-full sticky top-0 bg-white border-b-2 z-10">
        <div className="px-12 py-2 flex justify-between items-center">
          <nav>
            <NavLink to="/">
              <h1 className="text-xl font-bold text-sky-600">
                Podcaster
              </h1>
              </NavLink>
          </nav>
          <StatusNotification/>
        </div>
      </header>
      <main className="container mx-auto p-6 min-h-full">
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout
