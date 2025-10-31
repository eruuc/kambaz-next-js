// import { useState } from "react";
// import { useParams } from "next/navigation";
// import * as db from "../../../Database";
// import ModuleControlButtons from "./ModuleControlButtons";
// import { BsGripVertical } from "react-icons/bs";
// import { FormControl } from "react-bootstrap";
// export default function Modules() {
//   const { cid } = useParams();
//   const [modules, setModules] = useState<any[]>(db.courses);
//   const [moduleName, setModuleName] = useState("");

//   const deleteModule = (moduleId: string) => {
//     setModules(modules.filter((m) => m._id !== moduleId));
//   };

//   const editModule = (moduleId: string) => {
//     setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
//   };
//   const updateModule = (module: any) => {
//     setModules(modules.map((m) => (m._id === module._id ? module : m)));
//   };

  
//   return (
//     <div className="wd-title p-3 ps-2 bg-secondary">
//       <BsGripVertical className="me-2 fs-3" />
//       {/*!module.editing && module.name*/}
//       {/* module.editing && (
//         <FormControl className="w-50 d-inline-block"
//                onChange={(e) => updateModule({ ...module, name: e.target.value })}
//                onKeyDown={(e) => {
//                  if (e.key === "Enter") {
//                    updateModule({ ...module, editing: false });
//                  }
//                }}
//                defaultValue={module.name}/>
//       )*/}
//       <ModuleControlButtons
//         moduleId={module._id}
//         deleteModule={deleteModule}
//         editModule={editModule}/>
//     </div>
// );}
