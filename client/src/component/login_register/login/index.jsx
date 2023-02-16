import React,{useState} from 'react';

const index = () => {

    const [formData,setFormData] = useState({
        username:"",
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
            username:formData.username,
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
                <p>Welcome back, please login to your account</p>
            </div>
            <div class="row">
                <form>
                    <div class="form-group row first">
                        <label for="username">Username</label>
                        <input type="email" class="form-control mt-1 p-3" id="username" name='username' defaultValue={formData.username} onChange={handleChange} required />

                    </div>
                    <div class="form-group row last mb-4 mt-4">
                        <label for="password">Password</label>
                        <input type="password" class="form-control p-3" id="password" name='password' defaultValue={formData.password} onChange={handleChange} required />

                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                        <input type="submit" value="Login"onClick={handleSubmit} class="btn btn-block btn-primary p-4" />
                        </div>
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