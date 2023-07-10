import React from 'react'
import { avatars, getRandomInt } from '../helpers/random-number'
import { CategoryModel } from '../models/category-model'


interface CategoryItemProps{
    index:number
    category:CategoryModel
}

function CategoryItem({category,index}:CategoryItemProps) {
    return (
        <tr className="table-default" id={`row-${index}`} key={category._id}>
            <td>
                {index + 1}
            </td>
            <td>

                <div className="d-flex align-items-center p-2">
                    <div className="ms-3">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h6 className="mb-0">{category.title}</h6>
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <h6 className="mb-0">{category.description}</h6>
            </td>
            <td>
            <button className='btn btn-primary me-1'>Edit</button>
                <button className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    )
}

export default CategoryItem