import { Helmet } from 'react-helmet';
import Jdenticon from '../components/Jdenticon';
import useAuth from '../hooks/useAuth';

function Dashboard() {
  const title = 'Dashboard';

  const { getSession } = useAuth();
  const user = getSession();

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="container-fluid">
        <div
          className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">{title}</h1>
        </div>
        <div
          className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary fs-5">@{user.username}</strong>
            <h3 className="mb-0">{user.firstname} {user.lastname}</h3>
            <p className="card-text mb-auto text-muted">{user.id}</p>
            <p className="card-text mb-auto text-muted">{user.email}</p>
            <div className="d-grid d-md-block mt-4">
              <button className="btn btn-outline-secondary btn-sm">Edit</button>
            </div>
          </div>
          <div className="col-auto d-none d-lg-block">
            <div className="pt-3 pe-3">
              <Jdenticon name={user.username} height="96px" width="96px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
