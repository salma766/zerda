import { useEffect, useState } from 'react'
import Header from '../layouts/header'
import Footer from '../layouts/footer'

import { useStore } from "zustand";
import { courseStore } from "../stores/course-store";

import { Link } from 'react-router-dom'
import { categoryStore } from '../stores/category-store';
import CourseItem from '../components/course-item';
function Courses() {

  const { courses, fetchCourses } = useStore(courseStore);
  const { categories, fetchCategories } = useStore(categoryStore)
  const [selectedCategory, setSelectedCategory] = useState('all')
  useEffect(() => {
    fetchCourses()
    fetchCategories()
  }, [])

  return (
    <>
      <Header />
      <section className="page-title" style={{ backgroundImage: "url(images/background/page-title.jpg)" }}>
        <div className="auto-container">
          <div className="title-outer">
            <h1 className="title">Courses</h1>
            <ul className="page-breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li><a href="#">Pages</a></li>
              <li>Courses</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="featured-products">
        <span className="bg-shape"></span>

        <div className="auto-container">
          {/*MixitUp Galery*/}
          <div className="mixitup-gallery">
            {/*Filter*/}
            <div className="filters clearfix">
              <ul className="filter-tabs filter-btns clearfix">
                <li onClick={() => setSelectedCategory('all')} className={(selectedCategory === 'all') ? "filter active" : "filter"} data-role="button">All</li>
                {categories.map((category) => <li key={category._id} onClick={() => setSelectedCategory(category.title)} className={(selectedCategory === category.title) ? "filter active" : "filter"} data-role="button">{category.title}</li>)}
              </ul>
            </div>

            <div className="filter-list row" id="MixItUpF2FF82">
              {/*Product Block*/}
              {courses.map((course) => (selectedCategory === 'all' || selectedCategory === course.category.title)
                && <CourseItem
                  key={course._id}
                  course={course}
                />)}
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}

export default Courses