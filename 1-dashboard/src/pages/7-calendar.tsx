import React from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import "../stylesheets/app-calendar.css";


function Calendar() {
    return (
        <div className="container-xxl flex-grow-1 container-p-y">


            <div className="card app-calendar-wrapper">
                <div className="row g-0">
                    {/* Calendar Sidebar */}
                    <div className="col app-calendar-sidebar" id="app-calendar-sidebar">
                        <div className="border-bottom p-4 my-sm-0 mb-3">
                            <div className="d-grid">
                                <button className="btn btn-primary btn-toggle-sidebar" data-bs-toggle="offcanvas" data-bs-target="#addEventSidebar" aria-controls="addEventSidebar">
                                    <i className="bx bx-plus me-1"></i>
                                    <span className="align-middle">Add Event</span>
                                </button>
                            </div>
                        </div>
                        <div className="p-4">
                            {/* inline calendar (flatpicker) */}



                        </div>
                    </div>
                    {/* /Calendar Sidebar */}

                    {/* Calendar & Modal */}
                    <div className="col app-calendar-content">
                        <div className="card shadow-none border-0">
                            <div className="card-body pb-0">
                                {/* FullCalendar */}
                                <FullCalendar
                                    plugins={[dayGridPlugin]}
                                    initialView="dayGridMonth"
                                    weekends={false}
                                    events={[
                                        { title: 'Séance UX/UI', date: '2023-05-01' },
                                        { title: 'Workshop figma', date: '2023-05-01' },
                                        { title: 'Introduction au MD', date: '2023-05-02' },
                                        { title: 'Analyse SWOT', date: '2023-05-02' },
                                        { title: 'Etude persona', date: '2023-05-02' },
                                        { title: 'Intro au wordpress', date: '2023-05-04' },
                                        { title: 'Elementor', date: '2023-05-06' },
                                        { title: 'Workshop dev', date: '2023-05-09' },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                    {/* /Calendar & Modal */}
                </div>
            </div>


        </div>
    )
}

export default Calendar