import { useEffect, useState } from "react";
import { useAuthUser } from "react-auth-kit";
import { useStore } from "zustand";
import { courseStore } from "../stores/course-store";
import { categoryStore } from "../stores/category-store";
import CourseItem from "../components/course-item";
import { Role } from "../models/roles";
import { CourseModel } from "../models/course-model";
import { INIT_COURSE } from "../config";
import { BackendResponse } from "../models/backend-response";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import useFileUpload from "../helpers/file-upload";

function Courses() {
    const connectedUser = useAuthUser()
    const { courses, fetchCourses,addCourse } = useStore(courseStore);
    const { categories, fetchCategories } = useStore(categoryStore);


    const [course, setCourse] = useState<CourseModel>(INIT_COURSE)
    const { images, handleFileChange, resetFileUpload } = useFileUpload();


    const [addCourseModal, setAddCourseModal] = useState(false);
    const [addErrorMessage, setAddErrorMessage] = useState<BackendResponse>({ status: "", message: "" })
    const [addLoading, setAddLoading] = useState(false)

    const toggleAddCourseModal = () => setAddCourseModal(!addCourseModal)

    useEffect(() => {
        fetchCourses(connectedUser()!.token)
        fetchCategories(connectedUser()!.token)

    }, [])

    const handleChange = (event: any) => {
        setCourse({ ...course, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event:any) => {
        event.preventDefault();
        if (!course.title) {
          setAddErrorMessage({ status: 'error', message: 'Please provide title' });
          return;
        }
      
        if (!course.price) {
          setAddErrorMessage({ status: 'error', message: 'Please provide price' });
          return;
        }
      
        if (!course.description) {
          setAddErrorMessage({ status: 'error', message: 'Please provide description' });
          return;
        }
      
        if (!course.category._id) {
          setAddErrorMessage({ status: 'error', message: 'Please select category' });
          return;
        }
      
        if (!images || images.length === 0) {
          setAddErrorMessage({ status: 'error', message: 'Please select at least one image' });
          return;
        }
      
        setAddLoading(true);
        const response = await addCourse(course, images,connectedUser()!.token);
        if (response.status === 'success') {
          toggleAddCourseModal();
          setCourse(INIT_COURSE);
          setAddErrorMessage({ status: '', message: '' });
          resetFileUpload()
        }
        setAddLoading(false);
        setAddErrorMessage(response);
      };



    return (
        <>
            <div className="container-xxl flex-grow-1 container-p-y">

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center', marginBottom: '10px' }}>
                    <h5 className="card-header">Liste des cours ({courses.length})</h5>
                    {(connectedUser()!.role === Role.formateur) && <button onClick={toggleAddCourseModal} className='btn btn-primary'>Ajouter un course</button>}
                </div>

                <div className="row g-4">

                    {courses.map((course) => {
                        return (
                            <CourseItem
                                key={course._id}
                                course={course}
                            />
                        )
                    })}



                </div>

            </div>



            <Modal size="md" isOpen={addCourseModal} toggle={toggleAddCourseModal}>

                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <ModalHeader toggle={toggleAddCourseModal}>
                        Course
                    </ModalHeader>
                    <ModalBody>

                        <div className="row mb-3">
                            <div className="col-8">
                                <label htmlFor="title" className="form-label">title</label>
                                <input
                                    onChange={handleChange}
                                    name='title'
                                    value={course.title}
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Title"
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="title" className="form-label">price</label>
                                <input
                                    onChange={handleChange}
                                    name='price'
                                    value={course.price}
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter price"
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="title" className="form-label">description</label>


                                <CKEditor
                                    editor={ClassicEditor}
                                    data={course.description}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setCourse({ ...course, description: data })
                                    }}
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="title" className="form-label">Duration</label>
                                <input
                                    onChange={handleChange}
                                    name='duration'
                                    value={course.duration}
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter duration"
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="title" className="form-label">Skill Level</label>
                                <input
                                    onChange={handleChange}
                                    name='level'
                                    value={course.level}
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter level"
                                />
                            </div>
                        </div>


                        <div className="row">
                            {categories.map((item, index) => <div key={item._id} className="col-md mb-md-0 mb-2">
                                <div className={(item._id == course.category._id ? "form-check custom-option custom-option-icon checked" : "form-check custom-option custom-option-icon")}>
                                    <label className="form-check-label custom-option-content" htmlFor={`radio_${item._id}`}>
                                        <span className="custom-option-body">
                                            <i className="bx bx-rocket"></i>
                                            <span className="custom-option-title">{item.title}</span>
                                            {/* <small> {item.description}</small> */}
                                        </span>
                                        <input onChange={(event) => setCourse({ ...course, category: item })} name="customRadioIcon" className="form-check-input" type="radio" value={item._id} id={`radio_${item._id}`} checked={item._id == course.category._id} />
                                    </label>
                                </div>
                            </div>)}
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="images" className="form-label">Images</label>
                                <input
                                    onChange={handleFileChange}
                                    name="images"
                                    type="file"
                                    className="form-control"
                                    multiple
                                />
                            </div>
                        </div>
                        {(addErrorMessage.message !== "") && <div className={(addErrorMessage.status === "success" ? "alert alert-success mt-3" : "alert alert-danger mt-3")} role="alert">
                            {addErrorMessage.message}
                        </div>}




                    </ModalBody>
                    <ModalFooter>

                        <button onClick={toggleAddCourseModal} className="btn btn-outline-primary" type="button">
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

export default Courses