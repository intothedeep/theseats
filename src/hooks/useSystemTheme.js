import React from 'react';
import { createTheme, useMediaQuery } from '@mui/material';
// import { dark, light } from '../lib/theme';

export default function useSystemTheme() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light'
                }
                // breakpoints: {
                //     values: {
                //         mobile: 0,
                //         tablet: 640,
                //         laptop: 1024,
                //         desktop: 1280
                //     }
                // }
            }),
        [prefersDarkMode]
    );
    console.log('theme: ', theme);

    return { theme };
}
