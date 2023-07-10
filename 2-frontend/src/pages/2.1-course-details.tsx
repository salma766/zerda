import { useEffect, useState } from 'react'
import Header from '../layouts/header'
import Footer from '../layouts/footer'
import { Link, useParams } from 'react-router-dom'
import { INIT_COURSE, INIT_PARTICIPATION, apiClient, config } from '../config'
import { CourseModel } from '../models/course-model'
import { useStore } from 'zustand'
import { authStore } from '../stores/auth-store'
import { quizStore } from '../stores/quiz-store'
import { BackendResponse } from '../models/backend-response'
import { participationStatus } from '../models/participation-status'

function CourseDetails() {
    const { id } = useParams()
    const [course, setCourse] = useState(INIT_COURSE)
    const { quizzes, fetchQuizzesByCourse } = useStore(quizStore)
    const { connectedUser } = useStore(authStore)

    const [activeLecture, setActiveLecture] = useState(0)
    useEffect(() => {
        fetchData()
        fetchQuizzesByCourse(id!)
    }, [])

    const fetchData = async () => {
        const response = await apiClient.get<CourseModel>(`/api/courses/${id}`, {
            headers: { 'authorization': `Bearer ${connectedUser!.token!}` },
        })
        setCourse(response.data);
    }

    const handleEnroll = async () => {
        const response = await apiClient.get<BackendResponse>(`api/courses/enrollCourse/${id}`, {
            headers: { 'authorization': `Bearer ${connectedUser!.token!}` },
        })
        console.log(response.data)
        if (response.data.status === "success") {
            setCourse({ ...course, isParticipated: participationStatus.pending })
        }
    }
    return (
        <>
            <Header />
            <section className="page-title" style={{ backgroundImage: "url(images/background/page-title.jpg)" }}>
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">Course Details</h1>
                        <ul className="page-breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#">Pages</a></li>
                            <li>Courses</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="course-details">
                <div className="container">
                    <div className="row flex-xl-row-reverse">
                        {/*Start courses Details Content*/}
                        <div className="col-xl-8 col-lg-8">
                            <div className='row'>
                                <div className="courses-details__content">
                                    <img src={`${config.baseUrl}/uploads/${course.images[0]}`} alt="" />
                                    <h2 className="mt-4">{course.category.title} - {course.title}</h2>
                                    <p className="mb-0" dangerouslySetInnerHTML={{ __html: course.description }} />
                                </div>
                            </div>

                            {course.isParticipated === participationStatus.approved && <div className="row">
                                <div className="col">
                                    <ul className="accordion-box wow fadeInRight animated" style={{ visibility: "visible", animationName: "fadeInRight" }}>

                                        {course.lectures.map((item, index) => <li onClick={() => setActiveLecture(index)} key={item._id} className={(activeLecture === index) ? "accordion block active-block" : "accordion block"}>
                                            <div className={(activeLecture === index) ? "acc-btn active" : "acc-btn"}>{item.title}
                                                <div className="icon fa fa-plus"></div>
                                            </div>
                                            <div className="acc-content current" style={{ display: (activeLecture === index) ? "block" : "none" }}>
                                                <div className="content">
                                                    <div className="text" dangerouslySetInnerHTML={{ __html: item.description }}></div>
                                                </div>
                                            </div>
                                        </li>)}
                                    </ul>
                                </div>
                            </div>}

                        </div>
                        {/*End courses Details Content*/}

                        {/*Start courses Details Sidebar*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="course-sidebar">
                                <ul className="course-details-info">
                                    <li className="course-details-info-link">
                                        <span className="course-details-info-icon"><i className="far fa-clock"></i></span>
                                        Durations: <span>{course.duration}</span>
                                    </li>
                                    <li className="course-details-info-link">
                                        <span className="course-details-info-icon"><i className="far fa-folder-open"></i></span>
                                        Lectures: <span>{course.lectures.length}</span>
                                    </li>

                                    <li className="course-details-info-link">
                                        <span className="course-details-info-icon"><i className="far fa-flag"></i></span>
                                        Skill Level: <span>{course.level}</span>
                                    </li>
                                </ul>

                                {(connectedUser) && <div className="course-details-price">
                                    {(course.isParticipated === participationStatus.isNotSubscribed)
                                        ? <button onClick={handleEnroll} className="theme-btn btn-style-two course-details-price-btn">Enroll</button>
                                        : course.isParticipated}
                                </div>}

                                {quizzes.length !== 0 && course.isParticipated === participationStatus.approved && <div className="latest-course mb-30">
                                    <h4 className="latest-course-title mb-30">Quizzes</h4>

                                    {quizzes.map((item) => <div key={item._id} className="latest-course-item">
                                        <div className="latest-course-img">
                                            <img src={`${config.baseUrl}/uploads/${course.images[0]}`} alt="" />
                                        </div>
                                        <div className="latest-course-content">
                                            <h5><Link to={`/quiz/${item._id}`}>{item.title}</Link></h5>
                                            <span>{item.description}</span>
                                        </div>
                                    </div>)}

                                </div>}



                            </div>
                        </div>
                        {/*End courses Details Sidebar*/}
                    </div>


                </div>
            </section>
            <Footer />
        </>
    )
}

export default CourseDetails