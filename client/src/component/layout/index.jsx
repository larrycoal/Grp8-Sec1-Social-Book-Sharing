import React from 'react';
import "./layout.scss"
import Logo from '../../assets/images/logo5white.png'

const index = ({ children }) => {
  return (
    <div>
      <header class="p-1 pe-3 container-fluid">
        <nav class="navbar navbar-expand-lg navbar-dark ">
          <div class="container-fluid">
            <img alt="Image" src={Logo} class="logo p-2 pe-5" />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
              aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor01">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Home
                    <span class="visually-hidden">(current)</span>
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                    aria-haspopup="true" aria-expanded="false">Settings</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Details</a>
                    <a class="dropdown-item" href="#">Book Summary</a>
                    <a class="dropdown-item" href="#">Book Requests</a>
                  </div>
                </li>
              </ul>
            </div>
            <form class="d-flex">
              <input class="form-control me-sm-2" type="search" placeholder="Search"/>
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </header>
      <div className='content p-5 mt-2'>{children}</div>
      <footer class="container-fluid text-center">

        <div class="mt-10">
            {/* <div>
              <a href="https://twitter.com/DhuraMistry"><i class="fab fa-twitter footer-icon"></i></a>
              <a href="https://github.com/Dhuraa"> <i class="fab fa-brands fa-github footer-icon"></i></a>
              <a href="https://instagram.com/mundane_reads?igshid=YmMyMTA2M2Y="> <i
                  class="fab fa-instagram footer-icon"></i></a>
              <a href="mailto:dhuramistry@gmail.com"> <i class="fas fa-envelope footer-icon"></i></a>
      
            </div> */}
            <div class="flex footer_marg p-5 mr-3">
              <div>Copyright &copy; 2022 Book Kepeers</div>
            </div>
          </div>

    </footer>
    </div>
  );
};

export default index;