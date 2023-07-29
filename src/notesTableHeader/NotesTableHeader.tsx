import React from "react";
import archiveIcon from "../resources/img/archive.svg";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleDisplay } from "../store/uiSlice";

type HeaderProps = {
  headerType: string;
};
const NotesTableHeader = ({ headerType }: HeaderProps) => {
  const dispatch = useAppDispatch();
  const displayArchiveHeader = useAppSelector(state => state.uiSlice.displayArchiveTable);
  return (
    <>
        {headerType === "notes" && (
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
                    onClick={(() => dispatch(toggleDisplay()))}
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
        )}
        {headerType === "archivedNotes" && (
            <div className={`container text-center text-light bg-secondary py-2 mt-5 ${displayArchiveHeader ? 'd-block' : 'd-none'}`}>
            <div className="row">
              <div className="col border-end">Name</div>
              <div className="col border-end">Created</div>
              <div className="col border-end">Category</div>
              <div className="col border-end">Content</div>
              <div className="col border-end">Dates</div>
              <div className="col">
                Unarchive Notes
              </div>
            </div>
            </div>
        )}
        {headerType === "summary" && (
          <div className="container text-center text-light bg-secondary py-2 mt-5">
            <div className="row">
              <div className="col border-end">Note Category</div>
              <div className="col border-end">Active</div>
              <div className="col border-end">Archived</div>
            </div>
          </div>
        )}
    </>
  );
};

export default NotesTableHeader;
