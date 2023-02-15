import React from 'react';
import "./layout.scss"
const index = ({children}) => {
    return (
      <div>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Book Keepers</a>
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
            </div>
        </nav>
    </header>
        <div className='content p-4 mt-2'>{children}</div>
        <footer>group 8 project</footer>
      </div>
    );
};

export default index;