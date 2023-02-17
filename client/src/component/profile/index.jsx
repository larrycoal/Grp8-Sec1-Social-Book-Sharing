import React from 'react';
import "./profile.scss"
const index = () => {
    return (
                <div className="container-fluid p-5">
                <div class="">
                    <h3>Personal Details</h3>
                    <form>
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <label for="firstname">First Name</label>
                                <input type="text" class="form-control" id="firstname" required />
                            </div>
                            <div className="col-md-6">
                                <label for="lastname">Last Name</label>
                                <input type="text" class="form-control" id="lastname" required />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <label for="gender">Gender</label>
                                <input type="text" class="form-control" id="gender" required />
                            </div>
                            <div className="col-md-6">
                                <label for="dob">Date of birth</label>
                                <input type="date" class="form-control" id="dob" required />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-4">
                                <label for="username">Country</label>
                                <input type="text" class="form-control" id="country" required />
                            </div>
                            <div className="col-md-4">
                                <label for="email">Province</label>
                                <input type="text" class="form-control" id="province" required />
                            </div>
                            <div className="col-md-4">
                                <label for="email">City</label>
                                <input type="text" class="form-control" id="city" required />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-10">
                            </div>
                            <div className="col-md-2">
                            <input type="submit" value="Save Changes" class="btn btn-block btn-primary" />
                            </div>
                        </div>
                    </form>
                </div>
                <div class="">
                    <h3>Account Details</h3>
                    <form>
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <label for="username">Username</label>
                                <input type="text" class="form-control" id="username" required disabled/>
                            </div>
                            <div className="col-md-6">
                                <label for="email">Email Address</label>
                                <input type="text" class="form-control" id="email" required disabled/>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" required disabled/>
                            </div>
                            <div className="col-md-6">
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-10">
                            </div>
                            <div className="col-md-2">
                            <input type="submit" value="Edit Details" class="btn btn-block btn-primary" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default index;