import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePages/Home";
import Main from "../Layouts/Main";
import ErrorPage from "../Shares/ErrorPage/ErrorPage";
import Projects from "../Pages/Projects/Projects";
import AllProjects from "../Pages/AllProjects/AllProjects";
import Skills from "../Pages/Skills/Skills";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blog from "../Pages/Blog/Blog";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";

const routes = createBrowserRouter([
    {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children:[
        {
            path: '/',
            element: <Home />
        },
        {
            path:'/skills',
            element: <Skills />,
            
        },
        {
            path:'/projects',
            element: <Projects />,
            // loader: () =>fetch('/projects.json')
        },
        {
            path:'/Projects/:id',
            element: <ProjectDetails />,
            loader: async ({params}) => await fetch( `https://salma-portfolio-server-jade.vercel.app/projects/${params?.id}`),
        },
        {
            path:'/skills',
            element: <Skills />,
            
        },
        {
            path:'/aboutUs',
            element: <AboutUs/>,
            
        },
        {
            path:'/blog',
            element: <Blog />,
            
        },
        {
            path:'/contactUs',
            element: <ContactUs />,
            
        },
        {
            path:'/allProjects',
            element: <AllProjects />
        }
    ]
    }
])
export default routes;