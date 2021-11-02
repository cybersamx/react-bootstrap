import { Helmet } from 'react-helmet';

import Jdenticon from '../components/Jdenticon';
import useAuth from '../hooks/useAuth';

function Logout() {
  const title = 'Profile';

  const auth = useAuth();
  const user = auth.getSession();

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="container-auth text-center">
        <Jdenticon name={user.username} height="96px" width="96px" />
        <h3 className="h3 mb-3 fw-normal">{user.username}</h3>
      </main>
    </>
  );
}

export default Logout;
