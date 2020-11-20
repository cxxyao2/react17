import React from 'react';
import * as Sentry from "@sentry/react";
import Customers from './customers';

const Chef = () => {
  return (
    <Sentry.ErrorBoundary fallback={"An error has occurred"}>
      <Customers age={0} name={'Lux'}/>
    </Sentry.ErrorBoundary>
  );
};

export default Chef;


