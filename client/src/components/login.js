import React from 'react'
import './login.css'
import GoogleLoginComponent from './googlelogin'
import FacebookLoginComponent from './facebooklogin'
export default function Login() {
    return (
        <div>
            <div class="limiter">
                <div class="container-login100" >
                    <div class="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
                        <form class="login100-form validate-form flex-sb flex-w">
                        <div class="p-t-31 p-b-9">
                            <label for="exampleInputEmail1" class="form-label"> UserName</label>
                        </div>
                        
                            <input type="text" name="username" placeholder="Username" required /><br></br><br></br>
                            <label for="exampleInputEmail1" class="form-label"> Password</label>
                            <input type="text" name="username" placeholder="Password" required /><br></br><br></br>
                            <button class="button button1">Login</button>
                            <p>Don't have an account yet?</p><a href='./register.js'> Register for FREE!</a>
                            <p>OR</p>
                            < GoogleLoginComponent />
                            <FacebookLoginComponent />

                        </form>
                        <div className='blurbackground'>  </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
