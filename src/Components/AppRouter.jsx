import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Login";
import Presentation from "./PresentationFiles/Presentation";
import PresentImages from "./PresentationFiles/PresentImages";
import PresentInfo from "./PresentationFiles/PresentInfo";

export default function AppRouter() {
  const nav = useNavigate();
  // console.log(nav);

  useEffect(() => {
    if (localStorage.getItem("User")) {
      nav("/Presentation", { replace: true });
    } else {
      nav("/Login", { replace: true })
    }
  }, [])
  // console.log(localStorage.getItem("User"));

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Presentation/*" element={<div className="allsides"> <  Presentation /> <div className="right">
            <Routes>
              <Route path='/PresentInfo' element={<PresentInfo />} />
              <Route path='/PresentImages' element={<PresentImages />} />
            </Routes>
          </div>
          </div>} />
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<h1>Element is not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}
