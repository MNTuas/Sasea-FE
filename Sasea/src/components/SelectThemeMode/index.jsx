import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useColorScheme } from '@mui/material/styles';

function SelectThemeMode() {
    const { mode, setMode } = useColorScheme();
    
    const handleChange = (event) => {
      const selectedMode = event.target.value
      console.log(selectedMode)    
      setMode(selectedMode)  
    };
  
    return (
      <FormControl  size="small">
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
  
  export default SelectThemeMode