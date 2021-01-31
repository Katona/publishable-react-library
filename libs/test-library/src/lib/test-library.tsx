import moment from 'moment';
import React from 'react';

import './test-library.module.css';

/* eslint-disable-next-line */
export interface TestLibraryProps {}

export function TestLibrary(props: TestLibraryProps) {
  return (
    <div>
      <h1>Welcome to test-library!</h1>
      <p>{moment().format()}</p>
    </div>
  );
}

export default TestLibrary;
