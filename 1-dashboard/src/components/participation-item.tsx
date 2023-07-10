import { useAuthUser } from 'react-auth-kit';
import Swal from 'sweetalert2'
import { avatars, getRandomInt } from '../helpers/random-number';
import { UserModel } from '../models/user-model'
import { ParticipationModel } from '../models/participation-model';
import { apiClient } from '../config';
import { BackendResponse } from '../models/backend-response';
import { useStore } from 'zustand';
import { participationStore } from '../stores/participation-store';
import { participationStatus } from '../models/participation-status';


interface ParticipationItemProps {
    index: number
    participation: ParticipationModel
}

function ParticipationItem({ participation, index }: ParticipationItemProps) {
    const { participations, setParticipations } = useStore(participationStore)
    const auth = useAuthUser()
    const handleParticipation = async (approved: participationStatus) => {
        const { data } = await apiClient.put<BackendResponse>(`/api/courses/handlePartipation/${participation._id}`, { approved }, { headers: { 'Authorization': `Bearer ${auth()!.token}` } })
        if (data.status === 'success') {
            const list = [...participations];
            list[index].approved = approved
            setParticipations(list)
        }
    }

    return (
        <tr className="table-default" key={participation._id}>
            <td>
                {index + 1}
            </td>
            <td>
                <div className="d-flex align-items-center p-2">
                    <img
                        src={avatars[getRandomInt()]}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                    />
                    <div className="ms-3">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h6 className="mb-0">{participation.course.title}</h6>
                        </div>
                        <span className="text-muted">{participation.course.category.title}</span>
                    </div>
                </div>
            </td>
            <td>
                <h6 className="mb-0">{participation.etudiant.firstName + " " + participation.etudiant.lastName}</h6>
                <span className="text-muted">{participation.etudiant.role}</span>
            </td>

            <td>
                {participation.approved}
            </td>
            <td>
                {(participation.approved === participationStatus.pending)
                    && <>
                        <button onClick={() => handleParticipation(participationStatus.approved)} className='btn btn-icon btn-outline-primary me-1'><i className='bx bx-check'></i></button>
                        <button onClick={() => handleParticipation(participationStatus.declined)} className='btn btn-icon btn-outline-danger me-1'><i className='bx bx-block'></i></button>
                    </>
                }</td>
        </tr >
    )
}

export default ParticipationItem