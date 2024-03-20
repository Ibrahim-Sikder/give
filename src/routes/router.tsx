import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AdminLayout from "../components/layout/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DonationDetails from "../pages/DonationDetails";
import AllDonations from "../pages/AllDonations";
import DonationsList from "../pages/admin/Donations/DonationsList";
import AddDonations from "../pages/admin/Donations/AddDonations";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import UpdateDonations from "../pages/admin/Donations/UpdateDonations";
import AllUsers from "../pages/admin/AllUsers";
import NotFound from "../pages/NotFound";
import LeaderBoard from "../pages/LeaderBoard/LeaderBoard";
import Volunteer from "../pages/Volunteer/Volunteer";
import Community from "../pages/Community/Community";
import CreateTestimonial from "../pages/admin/CreateTestimonial";
import About from "../pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/donations/:id",

        element: <DonationDetails />,
        loader: ({ params }) =>
          fetch(`https://aidurgency-server.vercel.app/api/v1/donations/${params.id}`),
      },

      {
        path: "/donations",
        element: (
          <ProtectedRoute>
            <AllDonations />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/leaderboard",
        element: <LeaderBoard />,
      },
      {
        path: "/volunteer",
        element: <Volunteer />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/dashboard"></Navigate>,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "create-donation",
        element: <AddDonations />,
      },
      {
        path: "donations-list",
        element: <DonationsList />,
      },
      {
        path: "create-testimonial",
        element: <CreateTestimonial />,
      },
      {
        path: "update-donations/:id",
        element: <UpdateDonations />,
        loader: ({ params }) =>
          fetch(`https://aidurgency-server.vercel.app/api/v1/donations/${params.id}`),
      },
      {
        path: "all-users",
        element: <AllUsers />,
      },
    ],
  },
]);
