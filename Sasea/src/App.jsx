import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home'; // Import HomeIcon từ Material Icons
import { pink } from '@mui/material/colors'; // Import màu sắc từ MUI


function App() {
  return (
    <>
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
