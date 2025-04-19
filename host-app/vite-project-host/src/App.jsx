import React, { Suspense } from 'react';

const RemoteHeader = React.lazy(() => import('header_app/Header'));
const RemoteButton = React.lazy(() => import('button_app/Button'));
const RemoteNavbar = React.lazy(() => import('navbar_app/Navbar'));

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Suspense fallback={<p>Loading Header...</p>}>
        <RemoteHeader />
      </Suspense>

      <Suspense fallback={<p>Loading Button...</p>}>
        <RemoteButton />
      </Suspense>

      <Suspense fallback={<p>Loading Navbar...</p>}>
        <RemoteNavbar />
      </Suspense>
    </div>
  );
}

export default App;
