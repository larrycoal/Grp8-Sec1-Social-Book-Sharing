import React from 'react';

const index = () => {
    return (
        <div>
            <div>
                <h1>Book Keepers</h1>
            </div>
            <div class="row">
                <h4>Trade Books from the comfort of your home</h4>
                <p>Sign up with us</p>
            </div>
            <div class="row">
                <form>
                    <div class="form-group row first">
                        <div className="col-md-6">
                            <label for="firstname">First Name</label>
                            <input type="text" class="form-control mt-1 p-2" id="firstname" required />
                        </div>
                        <div className="col-md-6">
                            <label for="lastname">Last Name</label>
                            <input type="text" class="form-control mt-1 p-2" id="lastname" required />
                        </div>
                    </div>
                    <div class="form-group row last mb-4 mt-4">
                        <div className="col-md-6">
                            <label for="gender">Gender</label>
                            <input type="text" class="form-control mt-1 p-2" id="gender" required />
                        </div>
                        <div className="col-md-6">
                            <label for="dob">Date of Birth</label>
                            <input type="date" class="form-control mt-1 p-2" id="dob" required />
                        </div>
                    </div>
                    <div class="form-group row last mb-4 mt-4">
                        <div className="col-md-6">
                            <label for="username">Username</label>
                            <input type="text" class="form-control mt-1 p-2" id="username" required />
                        </div>
                        <div className="col-md-6">
                            <label for="email">Email</label>
                            <input type="text" class="form-control mt-1 p-2" id="email" required />
                        </div>
                    </div>
                    <div class="form-group row last mb-4 mt-4">
                        <div className="col-md-6">
                            <label for="password">Password</label>
                            <input type="password" class="form-control p-2" id="password" required />
                        </div>
                        <div className="col-md-6">
                            <label for="password">Retype Password</label>
                            <input type="password" class="form-control p-2" id="password" required />
                        </div>
                        <a>Already have an account ?</a>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <input value="Sign Up" class="btn btn-block btn-light p-4" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default index;