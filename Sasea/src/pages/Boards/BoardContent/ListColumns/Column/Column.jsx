
import AddCardIcon from '@mui/icons-material/AddCard';
import PropTypes from 'prop-types';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClearIcon from '@mui/icons-material/Clear';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import ListCards from './ListCards/ListCards';
import mapOrder from '~/utils/sort';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const COLUMN_HEADER_HEIGHT = 64;
const COLUMN_FOOTER_HEIGHT = 64;

function Column({column}) {

    const { attributes, listeners, setNodeRef, transform, transition,} = useSortable({
        id: column._id,
        data: { ...column },
    });
      
    const dndkitColumnStyles = {
        transform: CSS.Translate.toString(transform),
        transition,
    };

    const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, "_id");
    
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
              
        <Box
            ref={setNodeRef}
            style={dndkitColumnStyles}
            {...attributes}
            {...listeners}
            sx={{
                minWidth: "284px",
                maxWidth: "500px",
                bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
                ml: 2,
                borderRadius: "7px",
                display: "flex",
                flexDirection: "column",
                height: 'fit-content',  
                maxHeight: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight} - ${theme.spacing(5)})`,
            }}>

            {/* Column Header */}  
            <Box
                sx={{
                height: COLUMN_HEADER_HEIGHT,
                display: "flex",
                alignItems: "center",
                p: 2,
                justifyContent: "space-between",
                }}
            >
                <Typography variant='h6' sx={{
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '1rem',
                }}>{column?.title}</Typography>
                
            
                <Box>
                
                <Tooltip title="More options" arrow>
                <ArrowDropDownIcon 
                    sx={{color: 'text.primary', cursor: 'pointer', ml: 1}}
                    id="basic-column-dropdown"
                    aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                />
                </Tooltip>
    
                <Menu
                id="basic-menu-column-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-column-dropdown""',
                }}
                >
                <MenuItem onClick={handleClose}><AddCardIcon sx={{mr: 1, fontSize:'small'}}  /> Add new card</MenuItem>
                <MenuItem onClick={handleClose}><ContentCutIcon sx={{mr: 1, fontSize:'small'}} /> Cut</MenuItem>
                <MenuItem onClick={handleClose}><ContentCopyIcon sx={{mr: 1, fontSize:'small'}} /> Copy</MenuItem>
                <MenuItem onClick={handleClose}><ContentPasteIcon sx={{mr: 1, fontSize:'small'}} /> Paste</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}><ClearIcon sx={{mr: 1, fontSize:'small'}} /> Remove this column</MenuItem>
                <MenuItem onClick={handleClose}><CloudQueueIcon sx={{mr: 1, fontSize:'small'}} /> Archive this column</MenuItem>
                </Menu>
                </Box>
            
            </Box>
                              
            {/* Column Content */}
            <ListCards cards = {orderedCards} />
               
            {/* Column Footer */}                   
            <Box
                sx={{
                height: COLUMN_FOOTER_HEIGHT,
                display: "flex",
                alignItems: "center",
                p: 2,
                justifyContent: "space-between",
                }}>
    
                <Button startIcon={<AddCardIcon />}>Add new card</Button>
                <Tooltip title="Drag to move">
                <DragHandleIcon sx={{color: 'text.secondary'}} />
                </Tooltip>
            </Box>                      
        
        </Box>
  );
}

Column.propTypes = {
   column: PropTypes.shape({
        title: PropTypes.string.isRequired,
        cards: PropTypes.arrayOf(PropTypes.object).isRequired,
        cardOrderIds: PropTypes.arrayOf(PropTypes.string).isRequired,
        _id: PropTypes.string.isRequired
   }).isRequired
};


export default Column;