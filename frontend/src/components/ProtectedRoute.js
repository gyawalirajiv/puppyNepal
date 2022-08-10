import React from "react";
import { Navigate, Route, Outlet } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log("this isAuthenticated", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Outlet {...props} /> : <Navigate to="/" />
      }
    />
  );
}

export default ProtectedRoute;





// import React from 'react';

// import { Navigate, Outlet } from 'react-router-dom'

// const useAuth = () => {
//   const user = localStorage.getItem('user')
//   if (user) {
//     return true
//   } else {
//     return false
//   }
// }

// const ProtectedRoutes = (props: any) => {

//   const auth = useAuth()

//   return auth ? <Navigate to="/admin/dashboard" /> : <Outlet /> 
// }

// export default ProtectedRoutes;