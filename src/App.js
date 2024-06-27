import Jobs from "./components/Jobs";
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import AddJob from "./components/AddJob";
import Admin from "./components/Admin";

function App() {
  return (<>
    {/* <Login/> */}
    {/* <Navbar/> */}
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/users" element={<Users />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/add_job" element={<AddJob />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
