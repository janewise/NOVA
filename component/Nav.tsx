'use client'

import { useEffect } from 'react';
import Navlink from './navlink/navlink';
import Logo from './logo/logo';


export default function Nav() {

     useEffect(() => {
          import('bootstrap/dist/js/bootstrap.bundle.min');
        }, []);

    return (
     <nav className="navbar navbar-expand-md  fixed-top">
     <div className="container-fluid ps-3 pe-3">
       {/* <a className="navbar-brand" href="#">Offcanva</a> */}
       <Logo/>
       <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
       <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
         <div className="offcanvas-header">
           <h5 className="offcanvas-title" id="offcanvasNavbarLabel">NOVA Metaverse</h5>
           <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
         </div>
         <div className="offcanvas-body">
           <Navlink/>
         </div>
       </div>
     </div>
   </nav>
    );
  }