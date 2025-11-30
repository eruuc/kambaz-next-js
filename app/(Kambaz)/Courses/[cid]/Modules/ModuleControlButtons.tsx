import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus, FaTrash, FaPencil } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons({ moduleId, deleteModule, editModule }: { moduleId: string; deleteModule: (moduleId: string) => void; editModule: (moduleId: string) => void }) {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <FaPlus className="me-2" />
      <FaPencil className="me-2" onClick={() => editModule(moduleId)} />
      <FaTrash className="me-2" onClick={() => deleteModule(moduleId)} />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}

