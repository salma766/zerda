import { useState, useEffect } from 'react'
import { INIT_COURSE, INIT_LECTURE, apiClient } from "../config"
import { courseStore } from '../stores/course-store'
import { useStore } from 'zustand'
import { useParams } from 'react-router-dom'
import { useAuthUser } from 'react-auth-kit'
import { CategoryModel } from '../models/category-model'
import { categoryStore } from '../stores/category-store'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { LectureModel } from '../models/lecture-model'
import { BackendResponse } from '../models/backend-response'

function UpdateCourses() {
    const [course, setCourse] = useState(INIT_COURSE)
    const { categories, fetchCategories } = useStore(categoryStore)
    const { fetchCourse } = useStore(courseStore)
    const { id } = useParams()
    const auth = useAuthUser()

    const [lecture, setLecture] = useState<LectureModel>(INIT_LECTURE)

    const [updateCourseModal, setUpdateCourseModal] = useState(false);
    const toggleUpdateCourseModal = () => setUpdateCourseModal(!updateCourseModal)

    useEffect(() => {
        fetchData()
        fetchCategories(auth()!.token)
    }, [])

    const fetchData = async () => {
        const response = await fetchCourse(id!, auth()!.token)
        setCourse(response)
    }

    const handleCourseChange = (event: any) => {
        setCourse({ ...course, [event.target.name]: event.target.value })
    }

    const handleLectureChange = (event: any) => {
        setLecture({ ...lecture, [event.target.name]: event.target.value })
    }

    const handleDelete = async (lectureId: string) => {
        const { data } = await apiClient.delete<BackendResponse>(`/api/courses/deleteLectureFromCourse/${id!}/${lectureId}`)
        if (data.status === 'success') {
            setCourse({ ...course, lectures: course.lectures.filter((item) => item._id !== lectureId) })
        } else {
            alert(data.status)
        }
    }

    const handleAddLecture = async (event: any) => {
        event.preventDefault()
        const { data } = await apiClient.put<LectureModel>(`/api/courses/addlectureToCourse/${id!}`, lecture)
        setCourse({ ...course, lectures: [...course.lectures, data] })
        toggleUpdateCourseModal()
    }

    const handleUpdate = async (event: any) => {
        event.preventDefault()
        console.log(course)
        const { data } = await apiClient.put<BackendResponse>(`/api/courses/update/${id!}`, course)
        alert(data.message)
    }
    return (
        <>
            <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                    <div className="row">
                        <div className="col">
                            <div className="card mb-4">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0">Update</h5>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleUpdate}>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="title">title</label>
                                            <input onChange={handleCourseChange} type="text" className="form-control" name="title" value={course.title} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="price">price</label>
                                            <input onChange={handleCourseChange} type="text" className="form-control" name="price" value={course.price} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="description">description</label>
                                            <div className="input-group input-group-merge">

                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data={course.description}
                                                    onChange={(event, editor) => {
                                                        const data = editor.getData();
                                                        setCourse((prev) => { return { ...prev, description: data } })
                                                    }}
                                                />

                                            </div>
                                            <div className="form-text"> You can use letters, numbers &amp; periods </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="duration">duration</label>
                                            <input onChange={handleCourseChange} type="text" name="duration" className="form-control phone-mask" value={course.duration} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="level">level</label>
                                            <input onChange={handleCourseChange} type="text" name="level" className="form-control" value={course.level} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="category">category</label>
                                            <select onChange={(event) => setCourse({ ...course, category: categories.find((item) => item._id === event.target.value)! })} className='form-control' value={course.category._id} name="category" >
                                                {categories.map((category) => <option key={category._id} value={category._id}>{category.title}</option>)}
                                            </select>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Update</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h5 className="mb-0">Lectures</h5>
                                <button onClick={toggleUpdateCourseModal} className='btn btn-icon btn-primary'>
                                    <i className='bx bx-plus'></i>
                                </button>
                            </div>
                            <div className="card-body">
                                <div className="accordion mt-3 accordion-header-primary" id="accordionStyle1">
                                    {course.lectures.map((item, index) => <div key={index} className="accordion-item card">
                                        <h2 className="accordion-header">
                                            <div style={{ display: "flex", alignItems: 'center' }}>
                                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target={`#accordionStyle1-${index}`} aria-expanded="false">
                                                    {item.title}
                                                </button>
                                                <button onClick={() => handleDelete(item._id)} style={{ border: "none" }} className='btn btn-icon btn-outline-danger me-1'>
                                                    <i className='bx bx-trash'></i>
                                                </button>
                                            </div>
                                        </h2>

                                        <div id={`accordionStyle1-${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionStyle1">
                                            <div className="accordion-body" dangerouslySetInnerHTML={{ __html: item.description }}></div>
                                        </div>
                                    </div>)}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal size="md" isOpen={updateCourseModal} toggle={toggleUpdateCourseModal}>

                <form onSubmit={handleAddLecture}>
                    <ModalHeader toggle={toggleUpdateCourseModal}>
                        Add Lecture
                    </ModalHeader>
                    <ModalBody>

                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="title" className="form-label">title</label>
                                <input
                                    onChange={handleLectureChange}
                                    name='title'
                                    value={lecture.title}
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Title"
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="title" className="form-label">description</label>


                                <CKEditor
                                    editor={ClassicEditor}
                                    data={lecture.description}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setLecture({ ...lecture, description: data })
                                    }}
                                />
                            </div>
                        </div>

                    </ModalBody>
                    <ModalFooter>

                        <button onClick={toggleUpdateCourseModal} className="btn btn-outline-primary" type="button">
                            Close
                        </button>
                        <button className="btn btn-primary" type="submit">
                            save
                        </button>

                    </ModalFooter>
                </form>
            </Modal >
        </>


    )
}

export default UpdateCourses