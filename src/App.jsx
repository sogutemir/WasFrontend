import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
//components
import Navbar from './components/navbar/Navbar.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Footer from './components/footer/Footer.jsx';
//router
import BossRouter from "./router/BossRouter.jsx";
import AdminRouter from "./router/AdminRouter.jsx";
import ManagerRouter from "./router/ManagerRouter.jsx";
import EmployeeRouter from "./router/EmployeeRouter.jsx";
//pages
import MainPage from './pages/mainPage/MainPage.jsx';
import Login from './pages/loginPage/LoginPage.jsx';
import UserAdd from "./pages/userPages/userAdd/UserAdd.jsx";
import StoreList from './pages/storePages/storeList/StoreList.jsx';
import StoreAdd from "./pages/storePages/storeAdd/StoreAdd.jsx";
import StoreEmployee from './pages/storePages/storeEmployee/StoreEmployee.jsx';
import ProductsList from './pages/productPages/productList/ProductList.jsx'
import ProductDetail from "./pages/productPages/productDetail/ProductDetail.jsx";
import ProductAdd from "./pages/productPages/productAdd/ProductAdd.jsx";
import TransactionList from "./pages/transactionPages/transactionList/TransactionList.jsx";
import TransactionAdd from "./pages/transactionPages/transactionAdd/TransactionAdd.jsx";
import TransactionDetails from "./pages/transactionPages/transactionDetails/TransactionDetails.jsx";
import StoreDashboard from "./pages/dashboardPages/storeDashboard/StoreDashboard.jsx";
import UserProfile from "./pages/userPages/userProfile/UserProfile.jsx";
import NotificationList from "./pages/notificationPage/NotificationList.jsx";
import Settings from "./pages/settingsPage/Settings.jsx";
import BossDashboard from "./pages/dashboardPages/bossDashboard/BossDashboard.jsx";
import UserUpdate from "./pages/userPages/userUpdate/UserUpdate.jsx";
import CompanyAdd from "./pages/companyPages/companyAdd/CompanyAdd.jsx";
import CompanyDetail from "./pages/companyPages/companyDetail/CompanyDetail.jsx";
import CompanyList from "./pages/companyPages/companyList/CompanyList.jsx";
import CompanyUpdate from "./pages/companyPages/companyUpdate/CompanyUpdate.jsx";
import CategoryList from "./pages/categoryPages/CategoryList.jsx";
//global
import {GlobalStoreIdProvider} from "./api/store/GlobalStoreId.jsx";
import {GlobalCompanyIdProvider} from "./api/company/GlobalCompanyId.jsx";



const Dashboard = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex-1 ml-64">
                    <Outlet />
                </div>
            </div>
            <div className="ml-64 mt-6">
                <Footer />
            </div>
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: "/",
                element: <MainPage />,
                index: true,
            },
            {
                path: "/employee-register",
                element: <BossRouter
                    element={<UserAdd type="Employee" />}
                />,
            },
            {
                path: "/register",
                element: <AdminRouter
                    element={<UserAdd type="Boss"/>}
                />,
            },
            {
                path: "/add-store",
                element: <BossRouter
                    element={<StoreAdd />}
                />,
            },
            {
                path: "/stores",
                element: <BossRouter
                    element={<StoreList />}
                />,
            },
            {
                path: "/store-employees",
                element: <ManagerRouter
                    element={<StoreEmployee />}
                />,
            },
            {
                path: "/product-list",
                element: <EmployeeRouter
                    element={<ProductsList />}
                />,
            },
            {
                path: "/product-list/category/:categoryId",
                element: <EmployeeRouter
                    element={<ProductsList
                        type="category"
                    />}
                />,
            },
            {
                path: "/product-details/:productId",
                element: <EmployeeRouter
                    element={<ProductDetail />}
                />,
            },
            {
                path: "/add-product",
                element: <EmployeeRouter
                    element={<ProductAdd />}
                />,
            },
            {
                path: "/transactions/:productId",
                element: <EmployeeRouter
                    element={<TransactionList />}
                />,
            },
            {
                path: "/add-transaction/:productId",
                element: <EmployeeRouter
                    element={<TransactionAdd />}
                />,
            },
            {
                path: "/transaction-details/:transactionId",
                element: <TransactionDetails />,
            },
            {
                path: "/store",
                element: <EmployeeRouter
                    element={<StoreDashboard />}
                />,
            },
            {
                path: "/boss-dashboard",
                element: <BossRouter
                    element={<BossDashboard />}
                />,
            },
            {
                path: "/profile",
                element: <EmployeeRouter
                    element={<UserProfile />}
                />,
            },
            {
                path: "/notifications",
                element: <EmployeeRouter
                    element={<NotificationList />}
                />,
            },
            {
                path: "/edit-profile",
                element: <EmployeeRouter
                    element={<UserUpdate />}
                />,
            },
            {
                path: "/settings",
                element: <EmployeeRouter
                    element={<Settings />}
                />,
            },
            {
                path: "/new-company/:bossId",
                element: <AdminRouter
                    element={<CompanyAdd />}
                />,
            },
            {
                path: "/companies",
                element: <AdminRouter
                    element={<CompanyList />}
                />,
            },
            {
                path: "/company-detail",
                element: <BossRouter
                    element={<CompanyDetail />}
                />,
            },
            {
                path: "/company-update",
                element: <AdminRouter
                    element={<CompanyUpdate />}
                />,
            },
            {
                path: "/categories",
                element: <EmployeeRouter
                    element={<CategoryList />}
                />
            }
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

function App() {
    return (
        <div className="App">
            <GlobalStoreIdProvider>
                <GlobalCompanyIdProvider>
                <RouterProvider router={router} />
                </GlobalCompanyIdProvider>
            </GlobalStoreIdProvider>
        </div>
    );
}

export default App;
