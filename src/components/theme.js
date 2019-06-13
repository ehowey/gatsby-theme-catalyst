import React from 'react';
import { ThemeProvider } from 'styled-components';
import tokens from '../config/tokens';

const Theme = ({ children }) => (
   <ThemeProvider
      theme={{
         color: {
            primary: tokens.color.primary,
            secondary: tokens.color.secondary,
            textBlack: tokens.color.textBlack,
            textWhite: tokens.color.textWhite,
         },
         options: {
            contentWidth: tokens.options.contentWidth
         },
         screen: {
            tablet: tokens.screen.tablet,
            laptop: tokens.screen.laptop,
         },
      }}>
      {children}
   </ThemeProvider>
)

export default Theme