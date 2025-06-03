import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "../HomePage/HomePage.tsx";
import NotFound from "../NotFound/NotFound.tsx";
import SectionPage from "../SectionPage/SectionPage.tsx";
import SubcategoryPage from "../SubcategoryPage/SubcategoryPage.tsx";
import ConceptPage from "../ConceptPage/ConceptPage.tsx";

function App() {

  return (
      <div>
          <img src={"/cogfuncs.svg"} width={"300px"} alt={"Cogfuncs"}/>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/:section" element={<SectionPage />} />
              <Route path="/:section/:subcategory" element={<SubcategoryPage />} />
              <Route path="/:section/:subcategory/:item" element={<ConceptPage />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
  )
}

export default App
