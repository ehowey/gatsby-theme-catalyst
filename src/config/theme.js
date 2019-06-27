import React from 'react';
import { ThemeProvider } from 'styled-components';

const Theme = ({ children }) => (
   <ThemeProvider
      theme={{
         color: {
            primary: '#cccccc',
            secondary: '#333333',
            textBlack: '#000000',
            textWhite: '#ffffff',
         },
         options: {
            headerPosition: 'static',
            contentWidth: '720px',
         },
         screen: {
            tablet: '768px',
            laptop: '1024px',
         },
      }}>
      {children}
   </ThemeProvider>
)

export default Theme