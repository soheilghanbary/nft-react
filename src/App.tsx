import Blog from "pages/blog";
import Home from "pages/home";
import Users from "pages/users";
import User from "pages/users/user";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<User />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}
