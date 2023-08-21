import React from "react";
import "../profile/userDetail.css"

const UserDetail = ({detail, value}) => {
    return (
        <div className="user-info__details">
            <span className="user-info__detail">
                {detail}
            </span>
            <span className="user-info__detail--value">
                {value}
            </span>
        </div>
    )
}

export default UserDetail;