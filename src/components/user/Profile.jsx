import MeProfile from "./MeProfile";
import OtherProfile from "./OtherProfile";
import { Routes, Route, Link } from 'react-router-dom';

export default function Profile() {
    return (
      <div>
        <nav>
          <Link to="me">My Profile</Link>
        </nav>
  
        <Routes>
          <Route path="me" element={<MeProfile />} />
          <Route path=":id" element={<OtherProfile />} />
        </Routes>
      </div>
    );
  }