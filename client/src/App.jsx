import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/authlayout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/adminView/adminViewlayout";
import AdminDashboard from "./pages/adminView/dashboard";
import AdminProducts from "./pages/adminView/products";
import AdminOrders from "./pages/adminView/orders";
import AdminFeatures from "./pages/adminView/features";
import ShoppingLayout from "./components/shoppingView/shoppinglayout";
import NotFound from "./pages/not-found";
import ShoppingHome from "./pages/shoppingView/home";
import ShoppingListing from "./pages/shoppingView/listing";
import ShoppingCheckout from "./pages/shoppingView/checkout";
import ShoppingAccount from "./pages/shoppingView/account";
import CheckAuth from "./components/common/checkauth";
import UnauthPage from "./pages/unauthPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/authSlice/authSlice";
import { Skeleton } from "@/components/ui/skeleton";
import PaypalReturnPage from "./pages/shoppingView/paypal-return";
import PaymentSuccessPage from "./pages/shoppingView/payment-success";
import SearchProducts from "./pages/shoppingView/ search";
import './index.css'

function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;

  console.log(isLoading, user);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth
              isAuthenticated={isAuthenticated}
              user={user}
            ></CheckAuth>
          }
        />
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="paypal-return" element={<PaypalReturnPage />} />
          <Route path="payment-success" element={<PaymentSuccessPage />} />
          <Route path="search" element={<SearchProducts />} />
        </Route>
        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;