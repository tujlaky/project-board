import { ReactEventHandler } from "react";
import MenuIcon from "./MenuIcon";

function Navbar() {
  return (
    <div className="sticky top-0 z-30 flex w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 
    bg-base-100 text-base-content">
      <nav className="navbar w-full p-4">
        <div className="flex flex-1 md:gap-1 lg:gap-2">
          <span className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]">
            <label htmlFor="drawer" className="btn btn-square btn-ghost drawer-button lg:hidden">
              <MenuIcon></MenuIcon>
            </label>
          </span>
        </div>
        <div className="navbar-end">
          <label htmlFor="create-modal" className="btn btn-primary">Create issue</label>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

