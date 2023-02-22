import { Route, Routes } from "react-router-dom";
//context
import { useStore } from "./store/auth.js";
//component styled
import { BodyContainer } from "./components/BodyContainer/BodyContainer.jsx";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
//page routes
import { HomePage } from "./views/Home/Home.jsx";
import { ProjectsPage } from "./views/ProjectsPage/ProjectsPage.jsx";
import { Login } from "./views/Login/Login.jsx";

//protected routes
import { CVpdf } from "./views/CVpdf/CVpdf.jsx";
import { ProjectsAdmin } from "./views/ProjectsAdmin/ProjectsAdmin.jsx";
import { ProtectedRoutes } from "./components/ProtectedRoutes/ProtectedRoutes.jsx";
import { ProximTechAdmin } from "./views/ProximTechAdmin/ProximTechAdmin.jsx";
import { TechAdmin } from "./views/TechAdmin/TechAdmin.jsx";
import { States } from "./views/States/States.jsx";
//forms
import { FormProject } from "./views/Forms/FormProject.jsx";
import { FormTech } from "./views/Forms/FormTech.jsx";
import { FormProximTech } from "./views/Forms/FormProximTech.jsx";
import { FormStateProject } from "./views/Forms/FormStateProject";
export function Router() {
  const auth = useStore((state) => state.isAuth);
  console.log("AUTH ===>", auth);
  return (
    <BodyContainer>
      <NavBar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="Login" element={<Login />} />
        <Route path="cv" element={<CVpdf />} />
        <Route
          path={"/Dashboard"}
          element={<ProtectedRoutes isAllowed={auth} />}
        >
          <Route path="Projects" element={<ProjectsAdmin />} />
          <Route path="NewProject" element={<FormProject />} />
          <Route path="EdithProject/:id" element={<FormProject />} />

          <Route path="Tech" element={<TechAdmin />} />
          <Route path="NewTech" element={<FormTech />} />
          <Route path="EdithTech/:id" element={<FormTech />} />

          <Route path="ProximTech" element={<ProximTechAdmin />} />
          <Route path="NewProximTech" element={<FormProximTech />} />
          <Route path="EdithProximTech/:id" element={<FormProximTech />} />

          <Route path="States" element={<States />} />
          <Route path="NewState" element={<FormStateProject />} />
          <Route path="EdithState/:id" element={<FormStateProject />} />
        </Route>
        <Route
          path="*"
          element={<h2>¡¡¡Ups!!! La pagina que solicitas no existe</h2>}
        />
      </Routes>
      <Footer />
    </BodyContainer>
  );
}
