import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "pages";
import { MasterPage } from "core/master-page";

export interface AppRouteOutletProps {}

export function AppRouteOutlet(props: AppRouteOutletProps) {
  return (
    <Routes>
      <Route element={<MasterPage />}>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default AppRouteOutlet;
