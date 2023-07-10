import React from 'react'
import { Link } from 'react-router-dom'
import { CourseModel } from '../models/course-model'
import { config } from '../config'
import { useStore } from 'zustand'
import { authStore } from '../stores/auth-store'

interface CourseItemProps {
    course: CourseModel
}

function CourseItem({ course }: CourseItemProps) {
    const { connectedUser } = useStore(authStore)
    return (
        <div className="product-block all mix pantry fruit col-lg-3 col-md-6 col-sm-12" style={{ display: "inline-block" }}>
            <div className="inner-box">
                <div className="image"><Link to={`/courses/${course._id}`}>
                    <img src={`${config.baseUrl}/uploads/${course.images[0]}`} alt="course" />
                </Link></div>
                <div className="content">
                    <h4>
                        {(connectedUser)
                            ? <Link to={`/courses/${course._id}`}>{course.category.title} - {course.title}</Link>
                            : <button onClick={() => document.getElementById('loginBtn')?.click()} style={{ background: 'none' }}>{course.category.title} - {course.title}</button>}
                    </h4>
                    <span className="price">{course.price}</span>
                    <span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
                </div>
            </div>
        </div>
    )
}

export default CourseItem