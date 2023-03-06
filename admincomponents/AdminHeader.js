import React from 'react'

function Header() {
  return (
 <div style={{margin:"0 0.5rem"}}>
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="/" className="nav-link">Home</a>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
    
      <li className="nav-item">
        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
          <i className="fas fa-expand-arrows-alt" />
        </a>
      </li>
      <li className="nav-item">
        <button className="btn_Log_out nav-link" style={{border:"none", backgroundColor:"#0e5176", color:"white", borderRadius:"4px"}}>Log Out</button>
      </li>
    
    </ul>
  </nav>
</div>

  )
}

export default Header