import { ReactEventHandler } from "react";
import Navbar from "./Navbar";

function SideMenu() {
  return (
    <div className="bg-base-100 drawer drawer-mobile">
      <input id="drawer" type="checkbox" className="drawer-toggle"/>
      <div className="drawer-content">
        <Navbar></Navbar>
      </div>
      <div className="drawer-side">
        <aside className="bg-base-200 w-60">
          <div className="z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 p-4 hidden lg:flex shadow-sm">
            <a className="flex-0 btn btn-ghost px-0" href="/">
              <div className="font-title text-white inline-flex text-lg transition-all duration-200 md:text-3xl">
                ProjectX
              </div>
            </a>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default SideMenu;