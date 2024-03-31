// Layout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { UserContext } from './UserContext'; // import UserContext

function Layout() {
  const [user, setUser] = useState(null); // initialize user state

  return (
    <UserContext.Provider value={{ user, setUser }}> {/* wrap children with UserContext.Provider */}
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider> // close UserContext.Provider
  )
}

export default Layout;