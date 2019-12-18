import React, {Fragment} from 'react';

const FormAddItems = ({ title, description, submit, handleTitle, handleDescription }) => {
    return (
        <Fragment>
            <form onSubmit={submit} method="post" className="m-3">
                <div className="form-row">
                    <div className="col">
                        <h3>Titre</h3>
                        <input type="text" className="form-control" value={title} onChange={handleTitle} name="title" required/>
                    </div>
                    <div className="col">
                        <h3>Description</h3>
                        <input type="text" className="form-control" value={description} onChange={handleDescription} name="description" required/>
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-success m-4 col-3">Envoyer</button>
            </form>
        </Fragment>
    );
};

export default FormAddItems;