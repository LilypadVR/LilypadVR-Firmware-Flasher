import { ThemeProvider } from '@emotion/react';
import { AppBar, IconButton, createTheme, CssBaseline, Link, Toolbar, Typography, SvgIcon, Container, Paper } from '@mui/material';
import { useMemo, useState } from 'react';
import { DarkMode, LightMode } from '@mui/icons-material';

import FirmwareTool from './FirmwareTool.jsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const localTheme = localStorage.getItem("user-theme");
  const systemDarkMode = matchMedia("(prefers-color-scheme: dark)");

  const [prefersDarkMode, setPrefersDarkMode] = useState(
    localTheme ? localTheme === "dark" : systemDarkMode.matches,
  );
  if (!localTheme) {
    systemDarkMode.onchange = (ev) => {
      !localStorage.getItem("user-theme") &&
        setPrefersDarkMode(() => ev.matches);
    };
  }

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode],
  );

  const toggleTheme = async () => {
    setPrefersDarkMode((value) => {
      const newValue = !value;
      localStorage.setItem("user-theme", newValue ? "dark" : "light");
      return newValue;
    });
  };

  const LilypadIcon = (props) => (
    <SvgIcon {...props}>
        {<path
          d="M 404.63225,281.83989 C 384.649,315.2998 367.50526,350.5819 351.3063,386.05978 c -6.54565,15.46876 -12.53967,31.20627 -17.0919,47.38389 -17.67194,-25.3575 -35.19835,-51.24352 -57.27443,-73.03103 -6.78081,-3.79804 -8.60021,6.58521 -10.44307,10.90619 -8.13635,24.00471 -14.93457,48.49557 -20.15152,73.29587 -24.85783,-20.61461 -51.75215,-39.17216 -81.65859,-51.75653 -12.39357,-4.60492 -25.20647,-11.05997 -38.65474,-10.62908 -6.97299,3.07118 -3.30405,12.47181 -5.11584,18.29071 -3.84613,37.1382 -3.8707,74.71563 0.48023,111.79947 -30.474321,-11.10657 -60.918272,-26.4248 -94.121595,-27.21799 -5.307634,-0.9713 -9.877349,3.49242 -7.548989,8.79497 8.198052,65.45586 30.008773,130.46449 71.1661,182.7447 45.554744,57.72134 108.087184,105.94517 181.522534,120.23824 39.91573,7.40574 82.34939,7.18318 120.93409,-6.43529 6.19218,-1.65054 12.29221,-8.69399 18.25463,-3.15133 31.33886,14.24634 66.90543,14.89644 100.70956,13.07084 53.00522,-3.22049 103.0138,-26.30333 144.33274,-58.8766 57.82287,-43.55591 100.81682,-106.00306 120.93376,-175.53902 7.08168,-24.65374 12.9538,-49.94722 15.1409,-75.50504 -1.15202,-8.34049 -11.68403,-4.7802 -17.25593,-4.67817 -29.44102,3.4045 -56.73476,15.63811 -83.80408,26.92014 3.31571,-43.0053 3.60688,-86.49163 -2.17764,-129.28922 -4.48056,-4.87915 -11.77638,0.72767 -17.28344,1.02124 -39.31279,10.80096 -73.85617,33.89019 -105.11241,59.33191 -3.31425,-5.06914 -3.8727,-14.45693 -6.02748,-21.13121 -5.6998,-21.56311 -11.06912,-43.71086 -20.76024,-63.74661 -6.37714,-2.05246 -9.89321,8.21499 -14.69535,11.86206 -17.08401,19.39076 -31.95296,40.54817 -46.80896,61.63948 -10.24575,-27.76621 -20.10037,-55.772 -34.08882,-81.95935 -11.71008,-23.025 -23.19791,-46.51054 -36.78831,-68.3203 -0.76778,-1.45325 -2.1903,-0.16801 -3.28526,-0.25283 z m 1.8998,26.49211 c 19.97685,35.41647 35.38161,73.58804 50.20836,111.56775 3.99614,10.53998 7.27864,21.32593 10.67293,32.06887 -30.12153,56.62403 -56.48714,117.34308 -61.064,182.0782 -5.11121,-59.36997 -26.85598,-115.76521 -54.0935,-168.26707 -2.80404,-7.05672 -9.15947,-14.26988 -4.61985,-21.99689 15.52281,-46.89447 34.91308,-92.5232 58.63325,-135.83132 z m -128.05272,76.35757 c 24.58516,30.32578 47.84768,61.83817 66.36545,96.29172 38.28966,71.8289 50.99604,154.17397 53.52135,234.74972 0.38144,9.39499 0.79537,19.08395 0.87708,28.36921 -26.31229,-37.53772 -59.61513,-69.55495 -92.75308,-100.99308 -15.63085,-15.14706 -33.13109,-28.25524 -49.28157,-42.73864 -6.2376,-13.39338 -5.75402,-29.04013 -6.54238,-43.50495 -1.34076,-35.28558 1.51699,-70.94271 8.88013,-105.51038 4.5877,-22.87406 10.00602,-45.43172 18.51252,-67.09913 z m 256.09793,0.99621 c 20.37115,54.34919 29.17637,113.50865 27.59094,171.5204 -0.97179,14.26498 -1.82641,28.93003 -5.9372,42.79687 -52.10883,42.5319 -101.94193,88.70873 -142.47018,142.6404 0.53774,-88.20384 10.47039,-179.57674 52.46868,-258.9894 18.76531,-35.40096 42.17441,-68.1412 67.99484,-98.69415 z M 136.7976,398.80167 c 21.25572,5.48792 41.24197,15.606 59.86364,26.96736 16.17897,11.06241 32.15512,22.58379 46.57789,35.89634 -7.42846,40.43964 -9.02821,81.8343 -5.36651,122.73377 -2.44396,0.42824 -7.52728,-4.49615 -10.88901,-6.50358 -28.47971,-20.74445 -58.65899,-40.07033 -89.53021,-56.47275 -3.83917,-4.83189 -1.84633,-12.59028 -3.06072,-18.39999 -1.25543,-34.80113 -3.25087,-69.76893 2.06201,-104.23867 z m 539.24113,0.15519 c 4.39794,30.89838 3.3011,62.79152 2.24993,94.16457 -1.41454,9.35101 0.48958,19.89002 -3.83186,28.46407 -35.07628,18.57769 -68.10313,40.83583 -100.21146,64.15026 3.96725,-41.1271 1.68663,-83.00984 -4.61559,-123.93273 29.8046,-28.28385 65.52996,-51.37469 105.2701,-62.76106 0.37638,-0.0575 0.75767,-0.0971 1.13888,-0.0851 z m 100.47179,102.21389 c -11.51854,109.33337 -79.40622,215.03008 -180.88563,261.2877 -40.14694,18.67606 -85.25312,26.467 -129.10512,23.99811 -18.20424,-2.21656 -36.98453,-4.78277 -53.65754,-13.01828 29.18717,-48.69751 69.43129,-89.9461 111.08193,-128.11065 58.32129,-51.66012 122.31357,-98.03993 194.43207,-128.39769 18.86236,-7.27288 38.38873,-13.93705 58.19185,-16.68781 z M 36.395901,500.80532 c 40.601969,5.10553 77.895349,24.35871 113.567659,43.57781 75.08798,42.60583 142.366,98.69893 200.04709,162.70931 18.16767,20.68083 35.57723,42.41307 49.48288,66.27576 -20.23627,9.62583 -43.26794,12.44438 -65.68153,13.64572 C 262.93041,788.72923 191.50755,759.89293 140.23177,711.09771 81.820331,656.55248 43.879526,580.28145 36.060494,500.79781 Z"/>}
    </SvgIcon>
);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <Link href='/' underline="none" color="inherit">
              <LilypadIcon
                viewBox="18.295707 278.23465 777.43896 525.60547"
                style={{ fontSize: 50 }}
                sx={{ stroke: "currentColor", strokeWidth: 9 }}
              />
              {' '}
              LilypadVR Firmware Tool
            </Link>
          </Typography>
          <IconButton variant="contained" onClick={toggleTheme}>
            {prefersDarkMode ? <DarkMode fontSize="small"/> : <LightMode fontSize="small"/>}
          </IconButton>
        </Toolbar>
      </AppBar>
        <Container component="main" maxWidth="md" sx={{ my: 3 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 3 }, p: { xs: 1, md: 3 } }}>
            <FirmwareTool/>
          </Paper>
        </Container>

    </ThemeProvider>
  )
}

export default App;