import React from 'react'
import { CourseModel } from '../models/course-model'
import { Link } from 'react-router-dom'


interface CourseItemProps {
    course: CourseModel
}

function CourseItem({ course }: CourseItemProps) {
    return (
        <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="card">
                <div className="card-header">
                    <div className="d-flex align-items-start">
                        <div className="d-flex align-items-start">
                            <div className="avatar me-3">
                                <img src="./assets/img/avatars/1.png" alt="Avatar" className="rounded-circle" />
                            </div>
                            <div className="me-2">
                                <h5 className="mb-1">{course.title}</h5>
                                <div className="client-info d-flex align-items-center">
                                    <h6 className="mb-0 me-1">Formateur:</h6><span>{course.formateur.firstName + " " + course.formateur.lastName}</span>
                                </div>
                            </div>
                        </div>
                        <div className="ms-auto">
                            <div className="dropdown zindex-2">
                                <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="bx bx-dots-vertical-rounded"></i></button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><Link className="dropdown-item" to={`/courses/update/${course._id}`}>Update</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="d-flex align-items-center flex-wrap">
                        <div className="bg-lighter p-2 rounded me-auto mb-3">
                            <span>{course.category.title}</span>
                        </div>
                        <div className="text-end mb-3">
                            <h6 className="mb-1">Ajouté le: <span className="text-body fw-normal">{new Date(course.createdAt).toDateString()}</span></h6>
                        </div>
                    </div>
                    {/* <p className="mb-0">{course.description}</p> */}
                    <p className="mb-0" dangerouslySetInnerHTML={{ __html: course.description.length <= 90 ? course.description : course.description.substring(0, 90) + "..." }} />
                </div>
                <div className="card-body border-top">
                    <div className="d-flex align-items-center mb-3">
                        <h6 className="mb-1">Durée: <span className="text-body fw-normal">30 Heures</span></h6>
                    </div>


                    <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center">
                            <ul className="list-unstyled d-flex align-items-center avatar-group mb-0 zindex-2">
                                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-sm pull-up" aria-label="Vinnie Mostowy" data-bs-original-title="Vinnie Mostowy">
                                    <img className="rounded-circle" src="./assets/img/avatars/1.png" alt="Avatar" />
                                </li>
                                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-sm pull-up" aria-label="Allen Rieske" data-bs-original-title="Allen Rieske">
                                    <img className="rounded-circle" src="./assets/img/avatars/2.png" alt="Avatar" />
                                </li>
                                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-sm pull-up me-2" aria-label="Julee Rossignol" data-bs-original-title="Julee Rossignol">
                                    <img className="rounded-circle" src="./assets/img/avatars/3.png" alt="Avatar" />
                                </li>
                                <li><small className="text-muted">30 Etudiants</small></li>
                            </ul>
                        </div>
                        <div className="ms-auto">
                            <a href="#" className="text-body"><i className="bx bx-chat"></i> 15</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseItem