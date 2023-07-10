import React, { useEffect } from 'react'
import { useAuthUser } from 'react-auth-kit';
import { useStore } from 'zustand';
import { categoryStore } from '../stores/category-store';
import CategoryItem from '../components/category-item';
import Loader from '../components/loader-component';

function Catogries() {
  const connectedUser = useAuthUser()
  const { categories,fetchCategories } = useStore(categoryStore);


  useEffect(() => {
    fetchCategories(connectedUser()!.token)
  }, [])
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h5 className="card-header">Liste des categories</h5>
        </div>






        <div className="table-responsive table-striped text-nowrap">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Descripition</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {categories.map((category, index) => {
                return <CategoryItem
                  key={category._id}
                  index={index}
                  category={category}
                />
              })}
            </tbody>
          </table>
          {categories.length === 0 && <Loader />}
        </div>
      </div>


    </div>  )
}

export default Catogries