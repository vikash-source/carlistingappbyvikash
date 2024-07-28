import React, { Suspense, Fragment, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderLayout from './Component/Layout/HeaderLayout';


export function Routers() {
  
  
    return (
      <>
       <Router>
          <Suspense fallback={<div>........</div>}
          >
              <Routes>
              {routes?.map((route, i) => {
                const Layout = route?.layout || Fragment;
                const Component = route?.element;
                return (
                  <Route
                    key={i}
                    path={route.path}
                    exact={route.exact}
                    element={
                    
                        <Layout >
                          <Component />
                          </Layout>
                    
                    }
                  />
                );
              })}
            </Routes>
          </Suspense>
        </Router>
         </>
    )
  
  }

  const routes = [

    // Car List 
    {
     
      layout:HeaderLayout,
      exact: true,
      path: '/',
      element: lazy(() => import('./Component/Pages/CarList/Index'))
    },
   
    //Car Detiels
    {
      layout:HeaderLayout,
      exact: true,
      path: '/cardetiels/:id',
      element: lazy(() => import('./Component/Pages/CarDetiels/Index'))
    },

   
   

    
    
]