import { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import '../stylesheets/login.css'
import { useStore } from 'zustand';
import { authStore } from '../stores/auth-store';
import { BackendResponse } from '../models/backend-response';

interface LoginModalProps {
    isOpen: boolean
    toggle: () => void
}

function LoginModal({ isOpen, toggle }: LoginModalProps) {

    const [activeTab, setActiveTab] = useState('login')

    const { storeConnectedUser, login } = useStore(authStore);

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const [loginErrorMessage, setLoginErrorMessage] = useState<BackendResponse>({ status: "", message: "" })



    const handleLogin = async (event: any) => {
        event.preventDefault()

        if (!loginEmail) { //if variable is not ok
            setLoginErrorMessage({ status: 'error', message: "Please provide email" })
            return;
        }

        if (!loginPassword) { //if variable is not ok
            setLoginErrorMessage({ status: 'error', message: "Please provide password" })
            return;
        }

        const res = await login(loginEmail, loginPassword)
        console.log(res)
        if (res.status === "success") {
            storeConnectedUser(res.user!)
            toggle()
        } else {
            setLoginErrorMessage(res)
        }
    }

    const toggleTabs = () => {
        if (activeTab === 'signup') {
            setActiveTab('login')
        } else {
            setActiveTab('signup')
        }
    }

    return (
        <Modal size="md" isOpen={isOpen} toggle={toggle}>

            <ModalHeader toggle={toggle}>

            </ModalHeader>
            <ModalBody>
                <div className="form-wrap">
                    <div className="tabs">
                        <h3 className="signup-tab"><button onClick={toggleTabs} className={(activeTab === 'signup') ? 'active' : ''}>Sign Up</button></h3>
                        <h3 className="login-tab"><button onClick={toggleTabs} className={(activeTab === 'login') ? 'active' : ''}>Login</button></h3>
                    </div>

                    <div className="tabs-content">
                        <div id="signup-tab-content" className={(activeTab === 'signup') ? 'active' : ''}>
                            <form className="signup-form" action="" method="post">
                                <input type="email" className="input" id="user_email" autoComplete="off" placeholder="Email" />
                                <input type="text" className="input" id="user_name" autoComplete="off" placeholder="Username" />
                                <input type="password" className="input" id="user_pass" autoComplete="off" placeholder="Password" />
                                <input type="submit" className="button" value="Sign Up" />
                            </form>
                            <div className="help-text">
                                <p>By signing up, you agree to our</p>
                                <p><a href="#">Terms of service</a></p>
                            </div>
                        </div>

                        <div id="login-tab-content" className={(activeTab === 'login') ? 'active' : ''}>
                            <form onSubmit={handleLogin} className="login-form">
                                <input onChange={(event) => setLoginEmail(event.target.value)} value={loginEmail} type="text" className="input" id="user_login" autoComplete="off" placeholder="Email or Username" />
                                <input onChange={(event) => setLoginPassword(event.target.value)} value={loginPassword} type="password" className="input" id="user_pass" autoComplete="off" placeholder="Password" />
                                <input type="checkbox" className="checkbox" id="remember_me" />
                                <label htmlFor="remember_me">Remember me</label>
                                {(loginErrorMessage.message !== "") && <div className={(loginErrorMessage.status === "success" ? "alert alert-success mt-3" : "alert alert-danger mt-3")} role="alert">
                                    {loginErrorMessage.message}
                                </div>}
                                <input type="submit" className="button" value="Login" />
                            </form>
                            <div className="help-text">
                                <p><a href="#">Forget your password?</a></p>
                            </div>
                        </div>
                    </div>
                </div>





            </ModalBody>


        </Modal >
    )
}

export default LoginModal