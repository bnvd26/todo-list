import React, { Fragment } from 'react';

const Items = ({ index, title, description, handleDelete }) => {
    return (
        <Fragment>
            <tr>
                <th scope="row">{index}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td>
                    <a className="btn btn-outline-danger"
                       data-value={index}
                       onClick={ handleDelete }>
                        Supprimer
                    </a>
                </td>
            </tr>
        </Fragment>
    );
};

export default Items;