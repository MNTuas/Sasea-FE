import { Box } from "@mui/material";
import Column from "./Column/Column";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { SortableContext, horizontalListSortingStrategy } from "@dnd-kit/sortable";


function ListColumns({columns}) {
  return (  
    <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
     
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

          {columns?.map((columm => <Column key={columm.id} column={columm} />))}

          {/* Add new column */}
          <Box sx={{
              minWidth: "284px",
              maxWidth: '200px',
              mx: 2,
              borderRadius: "7px",
              height: 'fit-content',
              border: '1px solid #ffffff3d',
          }}>
              <Button 
                  startIcon={<AddCircleOutlineIcon />}
                  sx={{
                      color: 'white',
                      bgcolor: 'transparent',
                      borderRadius: '7px',
                      height: '100%',
                      width: '100%',
                      '&:hover': {bgcolor: '#ffffff3d'}
                  }}
              >
                  Add new column
              </Button>
          </Box>
    
      </Box>
    
    </SortableContext>
  );
}
ListColumns.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default ListColumns;