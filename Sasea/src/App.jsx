import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home'; // Import HomeIcon từ Material Icons
import { pink } from '@mui/material/colors'; // Import màu sắc từ MUI
import {useColorScheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

function SelectThemeMode() {
  const { mode, setMode } = useColorScheme();
  
  const handleChange = (event) => {
    const selectedMode = event.target.value
    console.log(selectedMode)    
    setMode(selectedMode)  
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="lable-select-mode">Mode</InputLabel>
      <Select
        labelId="lable-select-mode"
        id="lable-select-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div style={{display: 'flex', alignItems: 'center', gap:'8px' }}>
            <LightModeIcon style={{fontSize: 'small'}}/> Light
          </div>
        </MenuItem>

        <MenuItem value="dark" > 
          <div style={{display: 'flex', alignItems: 'center', gap:'8px' }}>
            <DarkModeIcon style={{fontSize: 'small'}} /> Dark
          </div>
        </MenuItem>

        <MenuItem value="system"> 
          <div style={{display: 'flex', alignItems: 'center', gap:'8px'}}>
            <SettingsSuggestIcon style={{fontSize: 'small'}} /> System
          </div>    
        </MenuItem>
      
      </Select>
    </FormControl>
  );
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme();

  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)');

  // console.log('prefersDarkMode: ', prefersDarkMode)
  // console.log('prefersLightMode: ', prefersLightMode)

  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

function App() {
  return (
    <>
      <SelectThemeMode />
      <ModeToggle />
      <h1>tuấnkdjasjd</h1>
      <Button variant="contained">Hello world</Button>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      {/* Sử dụng HomeIcon */}
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
    </>
  );
}

export default App;
