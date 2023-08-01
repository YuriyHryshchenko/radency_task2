import archiveIcon from "../../resources/img/archive.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleDisplay } from "../../store/uiSlice";

type HeaderProps = {
  headerType: string;
};
const NotesTableHeader = ({ headerType }: HeaderProps) => {
  const dispatch = useAppDispatch();
  const displayArchiveHeader = useAppSelector(
    (state) => state.uiSlice.displayArchiveTable
  );
  return (
    <>
      {headerType === "notes" && (
        <div className="container mx-auto bg-gray-300 py-2 mt-2">
          <div className="grid grid-cols-6 text-center font-medium">
            <div className="border-r-2 border-white">Name</div>
            <div className="border-r-2 border-white">Created</div>
            <div className="border-r-2 border-white">Category</div>
            <div className="border-r-2 border-white">Content</div>
            <div className="border-r-2 border-white">Dates</div>
            <div>
              <button
                type="button"
                onClick={() => dispatch(toggleDisplay())}
                className="bg-green-700 py-2 px-3 rounded hover:bg-green-800"
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
        <div
          className={`container mx-auto bg-gray-300 py-2 mt-5 ${
            displayArchiveHeader ? "block" : "hidden"
          }`}
        >
          <div className="grid grid-cols-6 text-center font-medium">
            <div className="border-r-2 border-white">Name</div>
            <div className="border-r-2 border-white">Created</div>
            <div className="border-r-2 border-white">Category</div>
            <div className="border-r-2 border-white">Content</div>
            <div className="border-r-2 border-white">Dates</div>
            <div>Unarchive Notes</div>
          </div>
        </div>
      )}
      {headerType === "summary" && (
        <div className="container mx-auto bg-gray-300 py-2 mt-5">
          <div className="grid grid-cols-3 text-center font-medium">
            <div className="border-r-2 border-white">Note Category</div>
            <div className="border-r-2 border-white">Active</div>
            <div>Archived</div>
          </div>
        </div>
      )}
    </>
  );
};

export default NotesTableHeader;
