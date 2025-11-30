import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModulesControls({ setModuleName, moduleName, addModule }: { setModuleName: (name: string) => void; moduleName: string; addModule: () => void }) {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <FormControl
        placeholder="Module Name"
        value={moduleName}
        onChange={(e) => setModuleName(e.target.value)}
        className="w-25 float-start me-2"
      />
      <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn" onClick={addModule}>
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </Button>
      <Dropdown className="float-end me-2">
        <DropdownToggle variant="secondary" size="lg" id="wd-publish-all-btn">
          <GreenCheckmark /> Publish All
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem id="wd-publish-all">
            <GreenCheckmark /> Publish All
          </DropdownItem>
          <DropdownItem id="wd-publish-all-modules-and-items">
            <GreenCheckmark /> Publish all modules and items
          </DropdownItem>
          <DropdownItem id="wd-publish-modules-only">
            <GreenCheckmark /> Publish modules only
          </DropdownItem>
          <DropdownItem id="wd-unpublish-all-modules-and-items">
            Unpublish all modules and items
          </DropdownItem>
          <DropdownItem id="wd-unpublish-modules-only">
            Unpublish modules only
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Button variant="secondary" size="lg" className="float-end me-2" id="wd-view-progress">
        View Progress
      </Button>
      <Button variant="secondary" size="lg" className="float-end me-2" id="wd-collapse-all">
        Collapse All
      </Button>
    </div>
  );
}

