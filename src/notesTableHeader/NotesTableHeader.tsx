import React from "react";
import archiveIcon from '../resources/img/archive.svg'
const NotesTableHeader = () => {
  return (
    <div className="container text-center text-light bg-secondary py-2 mt-2">
      <div className="row">
        <div className="col border-end">Name</div>
        <div className="col border-end">Created</div>
        <div className="col border-end">Category</div>
        <div className="col border-end">Content</div>
        <div className="col border-end">Dates</div>
        <div className="col">
          <button
            type="button"
            className="btn btn-success archive-header-button"
          >
            <img
              src={archiveIcon}
              alt="Archive Icon"
              className="archive-header-img"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesTableHeader;
