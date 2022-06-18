import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SurveyPanel from "./pages/admin/SurveyPanel";
import QuestionsPanel from "./pages/admin/QuestionsPanel";
import Question from "./pages/survey_list/Question";
import Surveys from "./pages/survey_list/Surveys";
import Survey from "./pages/survey_list/Survey";

function App() {
  return (
    <>
      <BrowserRouter>
        <Login />

        <Routes>
          <Route path="/surv_panel" element={<SurveyPanel />}></Route>
          <Route
            path="/surv_panel/questions"
            element={<QuestionsPanel />}
          ></Route>
          <Route path="/surveys" element={<Surveys />}></Route>
          <Route path="/surveys/survey" element={<Survey />}></Route>
          <Route path="/surveys/survey/question" element={<Question />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
