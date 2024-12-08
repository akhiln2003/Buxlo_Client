import { UserUrls } from "@/@types/enums/UserUrls";
import UserLayout from "@/layout/UserLayout";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";


      // User side
const LandingPage = lazy(()=>import('@/pages/UserLandingPage'));
const UserSignIn = lazy(()=>import('@/featurs /auth/pages/SignIn'));




const routes = createBrowserRouter([
  {
    path: '/',
    element: < UserLayout />,
    children: [
      {
        path: UserUrls.home,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: UserUrls.signIn,
        element:(
          <Suspense fallback={ <div>Loading....</div> }>
            < UserSignIn />
          </Suspense>
        )
      }
    ],
  },
], {
  future: {
    // v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

export default routes;
