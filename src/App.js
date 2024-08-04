import Jobs from "./components/Jobs";
import Login from "./components/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import AddJob from "./components/AddJob";
import Admin from "./components/Admin";
import Message from "./components/Message";
import Job from "./components/Job";
import User from "./components/User";
import MessageDetail from "./components/MessageDetail";

function App() {
  return (<>
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/users" element={<Users />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/add_job" element={<AddJob />} />
        <Route path="/messages" element={<Message />} />
        <Route path="/message/:messageId" element={<MessageDetail />} />
        <Route path="/job/:jobId" element={<Job />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
