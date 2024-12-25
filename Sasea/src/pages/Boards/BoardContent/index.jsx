import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, Divider, Typography, Button } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import ClearIcon from '@mui/icons-material/Clear';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddCardIcon from '@mui/icons-material/AddCard';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GroupsIcon from '@mui/icons-material/Groups';
import CommentIcon from '@mui/icons-material/Comment';
import AddLinkIcon from '@mui/icons-material/AddLink';

const COLUMN_HEADER_HEIGHT = "50px";
const COLUMN_FOOTER_HEIGHT = "56px";

function BoardContent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: (theme) =>
          `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        display: "flex",
        p:'5px 0',
      }}
    >
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
                {/* Column Box 1 */}
      <Box
        sx={{
          minWidth: "300px",
          maxWidth: "300px",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
          ml: 2,
          borderRadius: "6px",
          display: "flex",
          flexDirection: "column",
          height: 'fit-content',  
          maxHeight: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight} - ${theme.spacing(5)})`,
        }}
      >
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
          }}>Column Title</Typography>
          
          {/* drop down*/}
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

        {/* List Content */}
        <Box
          sx={{
            p: "0 5px",
            m: '0 5px', 
            display: "flex",
            flexDirection: "column",
            gap: 1, // Consistent spacing between cards
            overflowY: "auto",
            overflowX: "hidden",  
            maxHeight: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight} - ${theme.spacing(5)} 
                                              - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
          }}
        >
          {/* First Card */}
          <Card
            sx={{
              cursor: "pointer",
              boxShadow: "0 1px 1px rgb(0 0 0 / 10%), 0 1px 1px rgb(0 0 0 / 10%)",
              borderRadius: "8px",
              overflow: 'unset' // Add consistent border-radius for better visuals
            }}
          >
            <CardMedia
              sx={{
                height: 140,
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                overflow: "hidden",
              }}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDnTVB4DPJj4VkZqpL90j8KhDwCg-97VO34Q&s"
              title="Himmel rute"
            />
            <CardContent sx={{ p: 1.5 }}>
              <Typography variant="subtitle1">Sasea</Typography>
            </CardContent>
            <CardActions
              sx={{
                p: "0 4px 8px 4px",
                display: "flex",
                justifyContent: "space-between", // Align buttons neatly
              }}
            >
              <Button
                size="small"
                sx={{ textTransform: "none" }}
                startIcon={<GroupsIcon />}
              >
                20
              </Button>
              <Button
                size="small"
                sx={{ textTransform: "none" }}
                startIcon={<CommentIcon />}
              >
                20
              </Button>
              <Button
                size="small"
                sx={{ textTransform: "none" }}
                startIcon={<AddLinkIcon />}
              >
                20
              </Button>
            </CardActions>
          </Card>

          {/* Second Card */}
          <Card
            sx={{
              cursor: "pointer",
              boxShadow: "0 1px 1px rgb(0 0 0 / 10%), 0 1px 1px rgb(0 0 0 / 10%)",
              borderRadius: "8px",
              overflow: 'unset'
            }}
          >
            <CardContent sx={{p: 1.5}}
            >
              <Typography variant="subtitle1">Card 01</Typography>
            </CardContent>
          </Card>

          {/* Second Card */}
          <Card
            sx={{
              cursor: "pointer",
              boxShadow: "0 1px 1px rgb(0 0 0 / 10%), 0 1px 1px rgb(0 0 0 / 10%)",
              borderRadius: "8px",
              overflow: 'unset'
            }}
          >
            <CardContent sx={{p: 1.5}}
            >
              <Typography variant="subtitle1">Card 01</Typography>
            </CardContent>
          </Card>
          {/* Second Card */}
          <Card
            sx={{
              cursor: "pointer",
              boxShadow: "0 1px 1px rgb(0 0 0 / 10%), 0 1px 1px rgb(0 0 0 / 10%)",
              borderRadius: "8px",
              overflow: 'unset'
            }}
          >
            <CardContent sx={{p: 1.5}}
            >
              <Typography variant="subtitle1">Card 01</Typography>
            </CardContent>
          </Card>
          {/* Second Card */}
          <Card
            sx={{
              cursor: "pointer",
              boxShadow: "0 1px 1px rgb(0 0 0 / 10%), 0 1px 1px rgb(0 0 0 / 10%)",
              borderRadius: "8px",
              overflow: 'unset'
            }}
          >
            <CardContent sx={{p: 1.5}}
            >
              <Typography variant="subtitle1">Card 01</Typography>
            </CardContent>
          </Card>
          {/* Second Card */}
          <Card
            sx={{
              cursor: "pointer",
              boxShadow: "0 1px 1px rgb(0 0 0 / 10%), 0 1px 1px rgb(0 0 0 / 10%)",
              borderRadius: "8px",
              overflow: 'unset'
            }}
          >
            <CardContent sx={{p: 1.5}}
            >
              <Typography variant="subtitle1">Card 01</Typography>
            </CardContent>
          </Card>
          {/* Second Card */}
          <Card
            sx={{
              cursor: "pointer",
              boxShadow: "0 1px 1px rgb(0 0 0 / 10%), 0 1px 1px rgb(0 0 0 / 10%)",
              borderRadius: "8px",
              overflow: 'unset'
            }}
          >
            <CardContent sx={{p: 1.5}}
            >
              <Typography variant="subtitle1">Card 01</Typography>
            </CardContent>
          </Card>
          {/* Second Card */}
          <Card
            sx={{
              cursor: "pointer",
              boxShadow: "0 1px 1px rgb(0 0 0 / 10%), 0 1px 1px rgb(0 0 0 / 10%)",
              borderRadius: "8px",
              overflow: 'unset'
            }}
          >
            <CardContent sx={{p: 1.5}}
            >
              <Typography variant="subtitle1">Card 01</Typography>
            </CardContent>
          </Card>

          

        </Box>
    
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

      {/* Column Box 2 */}
      <Box
        sx={{
          minWidth: "300px",
          maxWidth: "300px",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
          ml: 2,
          borderRadius: "6px",
          display: "flex",
          flexDirection: "column",
          height: 'fit-content',  
          maxHeight: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight} - ${theme.spacing(5)})`,
        }}
      >
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
          }}>Column Title</Typography>
          
          {/* drop down*/}
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

        {/* List Content */}
        <Box
          sx={{
            p: "0 5px",
            m: '0 5px', 
            display: "flex",
            flexDirection: "column",
            gap: 1, // Consistent spacing between cards
            overflowY: "auto",
            overflowX: "hidden",  
            maxHeight: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight} - ${theme.spacing(5)} 
                                              - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
          }}
        >
          {/* First Card */}
          <Card
            sx={{
              cursor: "pointer",
              boxShadow: "0 1px 1px rgb(0 0 0 / 10%), 0 1px 1px rgb(0 0 0 / 10%)",
              borderRadius: "8px",
              overflow: 'unset' // Add consistent border-radius for better visuals
            }}
          >
            <CardMedia
              sx={{
                height: 140,
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                overflow: "hidden",
              }}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDnTVB4DPJj4VkZqpL90j8KhDwCg-97VO34Q&s"
              title="Himmel rute"
            />
            <CardContent sx={{ p: 1.5 }}>
              <Typography variant="subtitle1">Sasea</Typography>
            </CardContent>
            <CardActions
              sx={{
                p: "0 4px 8px 4px",
                display: "flex",
                justifyContent: "space-between", // Align buttons neatly
              }}
            >
              <Button
                size="small"
                sx={{ textTransform: "none" }}
                startIcon={<GroupsIcon />}
              >
                20
              </Button>
              <Button
                size="small"
                sx={{ textTransform: "none" }}
                startIcon={<CommentIcon />}
              >
                20
              </Button>
              <Button
                size="small"
                sx={{ textTransform: "none" }}
                startIcon={<AddLinkIcon />}
              >
                20
              </Button>
            </CardActions>
          </Card>

          {/* Second Card */}
          <Card
            sx={{
              cursor: "pointer",
              boxShadow: "0 1px 1px rgb(0 0 0 / 10%), 0 1px 1px rgb(0 0 0 / 10%)",
              borderRadius: "8px",
              overflow: 'unset'
            }}
          >
            <CardContent sx={{p: 1.5}}
            >
              <Typography variant="subtitle1">Card 01</Typography>
            </CardContent>
          </Card>

 

          

        </Box>
    
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
      </Box>
    </Box>
  );
}

export default BoardContent;
