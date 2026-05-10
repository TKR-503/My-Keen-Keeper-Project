import { TimelineProvider } from '@/context/TimelineContext';
import React from 'react';

const Providers = ({ children }) => {
    return (
      <TimelineProvider>
        {children}
      </TimelineProvider>
    );
};

export default Providers;