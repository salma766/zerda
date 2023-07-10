
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthUser } from "react-auth-kit";
import { Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

// State Management
import { useStore } from 'zustand';
import { userStore } from '../stores/user-store';

// Components

import AccountItem from '../components/account-item';
import Loader from '../components/loader-component'


// StyleSheets
import '../stylesheets/assigned-accounts.css'
import { BackendResponse } from '../models/backend-response';
import { UserModel } from '../models/user-model';
import { INIT_USER } from '../config';

function Users() {

  const connectedUser = useAuthUser()
  const { users, fetchUsers, addFormateur } = useStore(userStore);
  const [formateur, setFormateur] = useState<UserModel>(INIT_USER)

  const [addFormateurModal, setAddFormateurModal] = useState(false);
  const [addErrorMessage, setAddErrorMessage] = useState<BackendResponse>({ status: "", message: "" })
  const [addLoading, setAddLoading] = useState(false)

  const toggleAddFormateurModal = () => setAddFormateurModal(!addFormateurModal)

  useEffect(() => {
    fetchUsers(connectedUser()!.token)
  }, [])


  if (connectedUser()!.role !== "admin") {
    return <Navigate to="/dashboard" replace />
  }


  const handleChange = (event: any) => {
    setFormateur({ ...formateur, [event.target.name]: event.target.value })
  }

  const generateSecurepassword = () => {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var generatedPassword = "";

    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      generatedPassword += chars.substring(randomNumber, randomNumber + 1);
    }
    setFormateur({ ...formateur, password: generatedPassword })
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    if (!formateur.firstName) { //if variable is not ok
      setAddErrorMessage({ status: 'error', message: "Please provide firstName" })
      return;
    }

    if (!formateur.lastName) { //if variable is not ok
      setAddErrorMessage({ status: 'error', message: "Please provide lastName" })
      return;
    }

    if (!formateur.username) { //if variable is not ok
      setAddErrorMessage({ status: 'error', message: "Please provide username" })
      return;
    }

    if (!formateur.email) { //if variable is not ok
      setAddErrorMessage({ status: 'error', message: "Please provide email" })
      return;
    }

    if (!formateur.password) { //if variable is not ok
      setAddErrorMessage({ status: 'error', message: "Please provide password" })
      return;
    }

    if (!formateur.phone) { //if variable is not ok
      setAddErrorMessage({ status: 'error', message: "Please provide phone" })
      return;
    }


    const response = await addFormateur(formateur, connectedUser()!.token)
    setAddErrorMessage(response)
  }
  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
            <h5 className="card-header">Liste des utilisateurs</h5>
            <button onClick={toggleAddFormateurModal} className='btn btn-primary'>Ajouter un formateur</button>
          </div>






          <div className="table-responsive table-striped text-nowrap">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>User Informations</th>
                  <th>Contacts</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="table-border-bottom-0">
                {users.map((user, index) => {
                  return <AccountItem
                    key={user._id}
                    index={index}
                    user={user}
                  />
                })}
              </tbody>
            </table>
            {users.length === 0 && <Loader />}
          </div>
        </div>


      </div>



      <Modal size="md" isOpen={addFormateurModal} toggle={toggleAddFormateurModal}>

        <form onSubmit={handleSubmit}>
          <ModalHeader toggle={toggleAddFormateurModal}>
            Formateur
          </ModalHeader>
          <ModalBody>

            <div className="row mb-3">
              <div className="col ">
                <label htmlFor="title" className="form-label">Firstname</label>
                <input
                  onChange={handleChange}
                  name='firstName'
                  value={formateur.firstName}
                  type="text"
                  className="form-control"
                  placeholder="Enter Title"
                />
              </div>
              <div className="col">
                <label htmlFor="title" className="form-label">Lastname</label>
                <input
                  onChange={handleChange}
                  name='lastName'
                  value={formateur.lastName}
                  type="text"
                  className="form-control"
                  placeholder="Enter Title"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-8">
                <label htmlFor="title" className="form-label">Username</label>
                <input
                  onChange={handleChange}
                  name='username'
                  value={formateur.username}
                  type="text"
                  className="form-control"
                  placeholder="Enter Title"
                />
              </div>
              <div className="col">
                <label htmlFor="title" className="form-label">Gender</label>
                <select
                  onChange={handleChange}
                  name='gender'
                  value={formateur.gender}
                  className="form-control"
                  placeholder="Enter Title">
                  <option value="homme">Homme</option>
                  <option value="femme">Femme</option>
                </select>
              </div>
            </div>
            <div className='row mb-3'>
              <div className='col'>
                <label htmlFor="email">Email</label>
                <input name='email' value={formateur.email} onChange={handleChange} className='form-control' type="text" />
              </div>
            </div>
            <div className='row mb-3'>
              <div className='col'>
                <label htmlFor="password">Password</label>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <input name='password' value={formateur.password} onChange={handleChange} className='form-control' type="text" />
                  <button onClick={generateSecurepassword} type="button" className="btn btn-outline-primary ms-2">
                    <i className='bx bx-key'></i>
                  </button>
                </div>

              </div>
            </div>
            <div className='row mb-3'>
              <div className='col'>
                <label htmlFor="phone">Phone</label>
                <input name='phone' value={formateur.phone} onChange={handleChange} className='form-control' type="text" />
              </div>
            </div>

            {(addErrorMessage.message !== "") && <div className={(addErrorMessage.status === "success" ? "alert alert-success mt-3" : "alert alert-danger mt-3")} role="alert">
              {addErrorMessage.message}
            </div>}




          </ModalBody>
          <ModalFooter>

            <button onClick={toggleAddFormateurModal} className="btn btn-outline-primary" type="button">
              Close
            </button>
            <button disabled={addLoading} className="btn btn-primary" type="submit">
              {(addLoading) && <span className="spinner-grow me-1" role="status" aria-hidden="true"></span>}
              save
            </button>

          </ModalFooter>
        </form>
      </Modal >
    </>

  )
}

export default Users