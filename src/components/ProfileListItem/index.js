import React from "react";

import { Link } from "react-router-dom";

const ProfileListItem = props => {
    const { peak } = props;

    const listImage = peak.account_image_url
        ? peak.account_image_url
        : peak.peak_image_url;

    return (
        <tr>
            <td>
                <img
                    className="goal-thumbnail"
                    src={listImage}
                    alt={peak.peak_name}
                />
            </td>
            <td className="align-center">
                <small>{peak.peak_name}</small>
            </td>
            <td className="align-center">
                <small>{peak.range_name}</small>
            </td>
            <td className="align-center">
                <small>{peak.elevation}</small>
            </td>
            <td className="align-center">
                <small>{peak.difficulty}</small>
            </td>
            <td className="align-center">
                <small>
                    <Link
                        className="edit-button"
                        to={`/profile/edit/post/${peak.account_peak_id}`}
                    >
                        <i className="fa fa-pencil fa-lg" />
                    </Link>
                </small>
            </td>
        </tr>
    );
};

export default ProfileListItem;
