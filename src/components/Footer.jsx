import React from 'react'

function Footer() {
  return (
    
 <footer className=" bg-white dark:bg-gray-950 scheme-light dark:scheme-dark text-gray-400 py-6 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Godwin. All rights reserved.
      </p>
    </footer>

  )
}

export default Footer