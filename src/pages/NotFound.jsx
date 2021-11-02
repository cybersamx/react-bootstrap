import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function NotFound() {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>404 - Not Found</title>
      </Helmet>
      <main className="container-fluid">
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold">404</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Resource Not Found at {location.pathname}.
            </p>
            <Link to="/">Navigate back to Home</Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;
