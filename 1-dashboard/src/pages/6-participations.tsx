
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthUser } from "react-auth-kit";

// State Management
import { useStore } from 'zustand';
import { participationStore } from '../stores/participation-store';

// Components

import Loader from '../components/loader-component'


// StyleSheets
import '../stylesheets/assigned-accounts.css'
import ParticipationItem from '../components/participation-item';

function Users() {

  const connectedUser = useAuthUser()
  const { participations, fetchParticipations } = useStore(participationStore);



  useEffect(() => {
    fetchParticipations(connectedUser()!.token)
  }, [])


  if (connectedUser()!.role !== "formateur") {
    return <Navigate to="/dashboard" replace />
  }



  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
            <h5 className="card-header">Liste des participations</h5>
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
                {participations.map((participation, index) => {
                  return <ParticipationItem key={participation._id} participation={participation} index={index} />
                })}
              </tbody>
            </table>
            {participations.length === 0 && <Loader />}
          </div>
        </div>


      </div>
    </>

  )
}

export default Users