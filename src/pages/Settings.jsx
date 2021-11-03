import { Helmet } from 'react-helmet';

function Settings() {
  const title = 'Settings';

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
      </div>
    </>
  );
}

export default Settings;
