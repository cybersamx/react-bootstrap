import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import useAuth from '../hooks/useAuth';
import Jdenticon from '../components/Jdenticon';

function TableRow({ users }) {
  if (!users) {
    return <></>;
  }

  return (
    <>
    {
      users.map((user, i) => (
        <tr key={i} className="align-middle">
          <td>{i}</td>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.firstname} {user.lastname}</td>
          <td><Jdenticon name={user.username} height="32px" width="32px" /></td>
        </tr>
      ))
    }
    </>
  );
}

function Users() {
  const title = 'Users';

  const { getUsers } = useAuth();
  const [users, setUsers] = useState();

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const allusers = await getUsers();
        if (isMounted) {
          setUsers(allusers);
        }
      } catch (err) {
        // eslint-disable-next-line no-alert
        alert(`failed to load users: ${err}`);
      }
    })();

    // Cleanup callback as the component unmounts.
    return () => { isMounted = false; };
  }, [getUsers]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="container-fluid">
        <div
          className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">{title}</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <button type="button" className="btn btn-sm btn-outline-secondary">Create
              </button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Remove</button>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User ID</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Name</th>
              <th scope="col">Avatar</th>
            </tr>
            </thead>
            <tbody>
              <TableRow users={users} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Users;
