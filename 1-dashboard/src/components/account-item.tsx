import { useAuthUser } from 'react-auth-kit';
import Swal from 'sweetalert2'
import { avatars, getRandomInt } from '../helpers/random-number';
import { UserModel } from '../models/user-model'





interface UserItemProps {
    index: number
    user: UserModel
}

function AccountItem({user,index}: UserItemProps) {





    return (
        <tr className="table-default" id={`row-${index}`} key={user._id}>
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
                            <h6 className="mb-0">{user.firstName+" "+user.lastName}</h6>
                        </div>
                        <span className="text-muted">{user.phone}</span>
                    </div>
                </div>
            </td>
            <td>
                <h6 className="mb-0">{user.email}</h6>
                <span className="text-muted">{user.gender}</span>
            </td>

            <td>
                {user.role}
            </td>
            <td>
            </td>
        </tr >
    )
}

export default AccountItem