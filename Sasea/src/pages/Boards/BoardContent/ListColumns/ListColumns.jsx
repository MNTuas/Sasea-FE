import { Box } from "@mui/material";
import Column from "./Column/Column";


function ListColumns() {
  return (
    <Box sx={{
        bgcolor: 'inherit',
        display: 'flex',
        width: '100%',  
        height: '100%',
        overflowX: "auto",
        overflowY: "hidden",
        '&::-webkit-scrollbar-track': {
          m:2
        }
      }}>

        <Column />
        <Column />
        

      </Box>
  );
}

export default ListColumns;