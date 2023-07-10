import { CSSProperties } from 'react'
import { participationModel } from '../models/participation-model'
import { participationStatus } from '../models/participation-status'
import { Link } from 'react-router-dom'
interface ParticipationItemProps {
    participation: participationModel
}

function ParticipationItem({ participation }: ParticipationItemProps) {
    const handleColor = (): CSSProperties => {
        if (participation.approved === participationStatus.declined) {
            return { color: 'red' }
        }

        if (participation.approved === participationStatus.approved) {
            return { color: 'green' }
        }

        return { color: 'orange' }
    }
    return (
        <div key={participation._id} className="product-block all mix pantry fruit col-lg-3 col-md-6 col-sm-12" style={{ display: "inline-block" }}>
            <div className="inner-box">
                <div className="image"><img src="images/resource/products/1.jpg" alt="" /></div>
                <div className="content">
                    <h4><Link to={`/courses/${participation.course._id}`}>{participation.course.category.title} - {participation.course.title}</Link></h4>
                    <span style={handleColor()} className="price">{participation.approved}</span>
                    <span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
                </div>
            </div>
        </div>
    )
}

export default ParticipationItem