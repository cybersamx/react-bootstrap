// CREDIT: Based on react-jdenticon - https://github.com/jmcudd/react-jdenticon/blob/master/src/index.js

import React, { useRef, useEffect } from 'react';
import jdenticon from 'jdenticon/standalone';

function Jdenticon({ name, width = '32px', height = '32px' }) {
  const icon = useRef(null);
  useEffect(() => {
    jdenticon.update(icon.current, name);
  }, [name]);

  return (
    <>
      <svg data-jdenticon-value={name} ref={icon} height={height} width={width} />
    </>
  );
}

export default Jdenticon;
