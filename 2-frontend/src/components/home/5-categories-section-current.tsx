import React from 'react'

function CategoriesSectionCurrent() {
  return (
    <section className="categories-section-current">
    <div className="auto-container">
      <div className="anim-icons">
        <span className="icon icon-group-1 bounce-y"></span>
        <span className="icon icon-group-2 bounce-y"></span>
      </div>

      <div className="sec-title text-center">
        <span className="sub-title">Découvrez nos catégories</span>
        <h2>Catégories principales</h2>
      </div>

      <div className="row justify-content-center">


        {/* Category Block */}
        <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
          <div className="inner-box">
            <div className="icon-box">
              <i className="icon flaticon-stationary"></i>
            </div>
            <h6 className="title"><a href="page-course-details.html">UI/UX</a></h6>
          </div>
        </div>

        {/* Category Block */}
        <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
          <div className="inner-box">
            <div className="icon-box">
              <i className="icon flaticon-online-learning"></i>
            </div>
            <h6 className="title"><a href="page-course-details.html">Developpement</a></h6>
          </div>
        </div>



        {/* Category Block */}
        <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
          <div className="inner-box">
            <div className="icon-box">
              <i className="icon flaticon-web-2"></i>
            </div>
            <h6 className="title"><a href="page-course-details.html">Marketing <br />Digital</a></h6>
          </div>
        </div>
      </div>
    </div>
  </section>  )
}

export default CategoriesSectionCurrent