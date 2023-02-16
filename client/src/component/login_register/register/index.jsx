import React,{useState} from 'react';

const index = () => {

    const [formData,setFormData] = useState({
        firstname:"",
        lastname:"",
        gender:"",
        dob:"",
        username:"",
        email:"",
        password:"",
        formError:false,
        errorMessage:""
    })
    const handleChange = (e)=>{
        setFormData(()=>{
         return{
             ...formData,
             [e.target.name]:e.target.value,
         }
        })
     }
     const handleSubmit = (e)=>{
         e.preventDefault()
         console.log(formData)
         const payload = {
             firstname:formData.firstname,
             lastname:formData.lastname,
             gender:formData.gender,
             dob:formData.dob,
             username:formData.username,
             email:formData.email,
             password:formData.password
         }
     }

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
                            <input type="text" class="form-control mt-1 p-2" id="firstname" name= 'firstname' defaultValue={formData.firstname} onChange={handleChange} required />
                        </div>
                        <div className="col-md-6">
                            <label for="lastname">Last Name</label>
                            <input type="text" class="form-control mt-1 p-2" id="lastname" name= 'lastname' defaultValue={formData.lastname} onChange={handleChange}  required />
                        </div>
                    </div>
                    <div class="form-group row last mb-4 mt-4">
                        <div className="col-md-6">
                            <label for="gender">Gender</label>
                            <input type="text" class="form-control mt-1 p-2" id="gender" name= 'gender' defaultValue={formData.gender} onChange={handleChange}  required />
                        </div>
                        <div className="col-md-6">
                            <label for="dob">Date of Birth</label>
                            <input type="date" class="form-control mt-1 p-2" id="dob" name= 'dob' defaultValue={formData.dob} onChange={handleChange} required />
                        </div>
                    </div>
                    <div class="form-group row last mb-4 mt-4">
                        <div className="col-md-6">
                            <label for="username">Username</label>
                            <input type="text" class="form-control mt-1 p-2" id="username" name= 'username' defaultValue={formData.username} onChange={handleChange}  required />
                        </div>
                        <div className="col-md-6">
                            <label for="email">Email</label>
                            <input type="email" class="form-control mt-1 p-2" id="email" name= 'email' defaultValue={formData.email} onChange={handleChange} required />
                        </div>
                    </div>
                    <div class="form-group row last mb-4 mt-4">
                        <div className="col-md-6">
                            <label for="password">Password</label>
                            <input type="password" class="form-control p-2" id="password" name= 'password' defaultValue={formData.password} onChange={handleChange} required />
                        </div>
                        <div className="col-md-6">
                            <label for="password">Retype Password</label>
                            <input type="password" class="form-control p-2" id="password" name= 'password' defaultValue={formData.password} onChange={handleChange}  required />
                        </div>
                        <a>Already have an account ?</a>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <input value="Sign Up" onClick={handleSubmit} class="btn btn-block btn-light p-4" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default index;