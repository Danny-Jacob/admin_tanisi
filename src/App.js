import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Jobs from './components/Jobs';
import Login from './components/Login';
import Users from './components/Users';
import AddJob from './components/AddJob';
import Admin from './components/Admin';
import Message from './components/Message';
import Job from './components/Job';
import User from './components/User';
import MessageDetail from './components/MessageDetail';
import ProtectedRoute from './components/PrivateRoute'; // Import the ProtectedRoute component
import AdminDetails from './components/AdminDetails';
import EditJobs from './components/EditJobs';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" exact element={<Login />} />
        
        {/* Protected Routes */}
        <Route path="/jobs" element={<ProtectedRoute element={<Jobs />} />} />
        <Route path="/users" element={<ProtectedRoute element={<Users />} />} />
        <Route path="/admin" element={<ProtectedRoute element={<Admin />} />} />
        <Route path="/add_job" element={<ProtectedRoute element={<AddJob />} />} />
        <Route path="/messages" element={<ProtectedRoute element={<Message />} />} />
        <Route path="/message/:messageId" element={<ProtectedRoute element={<MessageDetail />} />} />
        <Route path="/job/:jobId" element={<ProtectedRoute element={<Job />} />} />
        <Route path="/edit_job/:jobId" element={<ProtectedRoute element={<EditJobs />} />} />

        <Route path="/user/:userId" element={<ProtectedRoute element={<User />} />} />
        <Route path="/admin/:adminId" element={<ProtectedRoute element={<AdminDetails />} />} />


        {/* Catch-all route */}
        <Route path="*" element={<p>404 Error - Nothing here...</p>} />
      </Routes>
    </Router>
  );
}

export default App;


// import Jobs from "./components/Jobs";
// import Login from "./components/Login"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Users from "./components/Users";
// import AddJob from "./components/AddJob";
// import Admin from "./components/Admin";
// import Message from "./components/Message";
// import Job from "./components/Job";
// import User from "./components/User";
// import MessageDetail from "./components/MessageDetail";

// function App() {
//   return (<>
//     <Router>
//       <Routes>
//         <Route path="/" exact element={<Login />} />
//         <Route path="/jobs" element={<Jobs />} />
//         <Route path="/users" element={<Users />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/add_job" element={<AddJob />} />
//         <Route path="/messages" element={<Message />} />
//         <Route path="/message/:messageId" element={<MessageDetail />} />
//         <Route path="/job/:jobId" element={<Job />} />
//         <Route path="/user/:userId" element={<User />} />
//       </Routes>
//     </Router>
//     </>
//   );
// }

// export default App;
