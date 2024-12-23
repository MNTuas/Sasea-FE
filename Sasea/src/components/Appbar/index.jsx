import  Box from "@mui/material/Box"
import SelectThemeMode from "../SelectThemeMode"
import AppsIcon from '@mui/icons-material/Apps';
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg';
import SvgIcon from "@mui/icons-material/Apps";
import Typography  from "@mui/material/Typography";
import WorkSpaces from "./Menu/WorkSpaces";
import Recents from "./Menu/Recents";
import Starreds from "./Menu/Starreds";
import Templates from "./Menu/Templates";
import CreateBox from "./Menu/CreateBox";
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profiles from "./Menu/Profiles";

function AppBar(){
    return(
        <Box px={2} sx={{
            width:'100%',
            height: (theme) => theme.trello.appBarHeight ,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            overflowX: 'auto',
          }}>
            <Box sx={{ display:'flex', alignItems:'center', gap: 2}}>
              <AppsIcon sx={{color: 'primary.main'}} /> 
              <Box sx={{ display:'flex', alignItems:'center', gap: 0.5}}>
                <SvgIcon component={TrelloIcon} inheritViewBox  sx={{ color: 'primary.main'}} />
                <Typography variant="span" sx={{fontSize: '1.2rem', fontWeight:'bold', color:'primary.main'}}> Sasea </Typography>
              </Box>

              <Box sx={{ display:{xs: 'none', md: 'flex', gap: 1}}}>
                <WorkSpaces />
                <Recents />
                <Starreds />
                <Templates />
                <CreateBox />
              </Box>
            </Box>

            <Box sx={{ display:'flex', alignItems:'center', gap: 2}} >
              <TextField id="outlined-search" label="Search field" type="search" size="small" sx={{minWidth: '220px'}}  />
              <SelectThemeMode />

              <Tooltip title="Notification">
                <Badge color="secondary" variant="dot" sx={{cursor: 'pointor'}} >
                  <NotificationsNoneIcon sx={{ color: 'primary.main'}} />
                </Badge>
              </Tooltip>
              <HelpOutlineIcon sx={{ color: 'primary.main'}} />
              <Profiles />
            </Box>
           
          </Box>
    )
}

export default AppBar
