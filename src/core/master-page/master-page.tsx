import { Outlet } from "react-router-dom";
import Header from "./layouts/header";

export interface MasterPageProps {}

export function MasterPage(props: MasterPageProps) {
  return (
    <>
      <div className="bg-gray-800">
        <Header />
        <div className="flex">
          <div className="h-screen container md:mx-auto sm:mx-2">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default MasterPage;
