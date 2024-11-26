import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import HallBookingReport from "./pages/HallBookingreport";
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Home />}>
          <Route index element={<Iaa />} />
          <Route path="iaa" element={<Iaa />} />
          <Route path="hall" element={<Hallplan />} />
        </Route>
        <Route path="/master-table" element={<Home />}>
          <Route path="users" element={<Users />} />
          <Route path="roles" element={<Roles />} />
          <Route path="loan-types" element={<LoanTypes />} />
          <Route path="arbitrator" element={<ArbitratorTable />} />
          <Route path="customers" element={<CustomerTable />} />
          <Route path="hall-table" element={<HallTable />} />
        </Route>
        <Route path="/reports" element={<Home />}>
          <Route path="iaa-reports" element={<IaaReportTable />} />
          <Route path="hall-booking-reports" element={<HallBookingReport />} />
        </Route>
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
