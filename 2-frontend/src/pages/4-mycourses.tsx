import { useEffect, useState } from 'react'
import Footer from '../layouts/footer';
import Header from '../layouts/header';
import { useStore } from 'zustand';
import { courseStore } from '../stores/course-store';
import { authStore } from '../stores/auth-store';
import { Link } from 'react-router-dom';
import { apiClient } from '../config';
import { participationModel } from '../models/participation-model';
import ParticipationItem from '../components/participation-item';

function MyCourses() {
    const { connectedUser } = useStore(authStore);
    //
    const [participations, setParticipations] = useState<participationModel[]>([])


    useEffect(() => {
        fetchData(connectedUser!.token!)
    }, [])


    const fetchData = async (token: string) => {
        const res = await apiClient.get<participationModel[]>(`/api/courses/getCoursesByEtudiant`, {
            headers: { 'authorization': `Bearer ${token}` },
        });
        setParticipations(res.data)
    }
    return (
        <>
            <Header />
            <section className="page-title" style={{ backgroundImage: "url(images/background/page-title.jpg)" }}>
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">My Courses</h1>
                        <ul className="page-breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#">Pages</a></li>
                            <li>My Courses</li>
                        </ul>
                    </div>
                </div>
            </section>



            <section className="featured-products">
                <span className="bg-shape"></span>

                <div className="auto-container">
                    {/*MixitUp Galery*/}
                    <div className="mixitup-gallery">


                        <div className="filter-list row" id="MixItUpF2FF82">
                            {/*Product Block*/}
                            {participations.map((participation) =>
                                <ParticipationItem
                                    key={participation._id}
                                    participation={participation}
                                />)}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )

}

export default MyCourses