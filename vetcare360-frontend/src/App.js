import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Menu from "./components/Menu";
import Home from './pages/Home';
import VeterinarianList from "./pages/VeterinarianList";
import SearchOwner from "./pages/SearchOwner";
import OwnerList from "./pages/OwnerList";
import OwnerDetails from "./pages/OwnerDetails";
import EditOwner from "./pages/EditOwner";
import AddOwner from "./pages/AddOwner";
import AddPet from "./pages/AddPet";
import EditPet from "./pages/EditPet";
import AddVisit from "./pages/AddVisit";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Menu />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/owners/search" element={<SearchOwner />} />
            <Route path="/owners/search/:lastName" element={<OwnerList />} />
            <Route path="/owners/list" element={<OwnerList />} />
            <Route path="/owners/new" element={<AddOwner />} />
            <Route path="/owners/:id" element={<OwnerDetails />} />
            <Route path="/owners/:id/edit" element={<EditOwner />} />
            <Route path="/owners/:id/pets/new" element={<AddPet />} />
            <Route path="/owners/:ownerId/pets/:petId/edit" element={<EditPet />} />
            <Route path="/owners/:ownerId/pets/:petId/visits/new" element={<AddVisit />} />
            <Route path="/veterinarians" element={<VeterinarianList />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;