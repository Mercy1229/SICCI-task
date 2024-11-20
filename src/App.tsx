import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Iaa from "./pages/Iaa";
import Hallplan from "./pages/Hall";
import Users from "./pages/users";
import Roles from "./pages/role";
import LoanTypes from "./pages/loanType";
import ArbitratorTable from "./pages/Arbitrator";
import CustomerTable from "./pages/CustomerTable";
import HallTable from "./pages/HallTable";
import IaaReportTable from "./pages/IaaTransactions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />}>
            <Route index element={<Iaa />} />
            <Route path="Iaa" element={<Iaa />} />
            <Route path="hall" element={<Hallplan />} />
            <Route path="user" element={<Users />} />
            <Route path="roles" element={<Roles />} />
            <Route path="loanTypes" element={<LoanTypes />} />
            <Route path="arbitrator" element={<ArbitratorTable />} />
            <Route path="customers" element={<CustomerTable />} />
            <Route path="hallTable" element={<HallTable/>} />
            <Route path="IaaReports" element={<IaaReportTable/>} />
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
