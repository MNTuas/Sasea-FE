import { Box, Tooltip } from "@mui/material"
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NoEncryptionIcon from '@mui/icons-material/NoEncryption';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import GroupAddIcon from '@mui/icons-material/GroupAdd';


const MENUSTYLE = (theme) => ({
    color: theme.palette.primary.main, 
    backgroundColor: theme.palette.background.default, 
    border: 'hidden', 
    borderRadius: '5px',
    '& .MuiSvgIcon-root': {color: theme.palette.primary.main},
    '&:hover': {backgroundColor: theme.palette.background.default} 
});

function BoardBar(){
    return(
        <Box px={2} sx={{
            width:'100%',
            height: (theme) => theme.trello.appBarHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            overflowX: 'auto',
            overflowY: 'hidden', // Prevent vertical scrollbar
            borderTop:(theme) => `1px solid ${theme.palette.primary.light}`,
          }}>
           
              <Box sx={{ display:'flex', alignItems:'center', gap: 2}}>
                <Chip sx={MENUSTYLE} icon={<DashboardIcon />} label="Sasea Board" clickable />
                <Chip sx={MENUSTYLE} icon={<NoEncryptionIcon />} label="Public/Private Workplace" clickable />
                <Chip sx={MENUSTYLE} icon={<AddToDriveIcon />} label="Add to GoogleDrive" clickable />
                <Chip sx={MENUSTYLE} icon={<ElectricBoltIcon />} label="Automation" clickable />
                <Chip sx={MENUSTYLE} icon={<FilterListIcon />} label="Filters" clickable />
              </Box>
              
              <Box sx={{ display:'flex', alignItems:'center', gap: 2}}>
                
                <Button startIcon={<GroupAddIcon />} variant="outlined">Invite</Button>
                
                <AvatarGroup 
                    max={5}
                    total={24}
                    sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}   
                    fontSize= '16'
                >
                    <Tooltip title="Remy Sharp">
                        <Avatar alt="Remy Sharp" src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/470190483_1991866054628437_5086588052564973951_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=QV7rlJm1b7QQ7kNvgGvJS_t&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=A8Iq8KfghZifMNvOb03kM6c&oh=00_AYCdys_uLLj8Vu-3wwD_n9LpZP02fBURtOASUjOJy65w-g&oe=676ECC67" />
                        
                    </Tooltip>
                    <Tooltip title="Remy Sharp">
                        <Avatar alt="Remy Sharp" src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/470466444_1991866064628436_2530617452210065538_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=af716MCde-0Q7kNvgEc6jGu&_nc_zt=23&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=A8Iq8KfghZifMNvOb03kM6c&oh=00_AYClmAo3xvvpsxQih27cW98sQoa8Qh1Gesy5YH5h5DDaRg&oe=676EB880" />
                        
                    </Tooltip>
                    <Tooltip title="Remy Sharp">
                        <Avatar alt="Remy Sharp" src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/470217218_1991865817961794_8001886752347100080_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=s3zm5ng1qCIQ7kNvgG2lSB2&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=A8Iq8KfghZifMNvOb03kM6c&oh=00_AYANMKz12InU6pt96BRv8vU7jARIT_2UopiGVvdMn5hJGw&oe=676ECBAE" />
                        
                    </Tooltip>
                    <Tooltip title="Remy Sharp">
                        <Avatar alt="Remy Sharp" src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/470194591_1991831537965222_6179764580129321094_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1p5NKlDLG3wQ7kNvgGpo1cQ&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=A8Iq8KfghZifMNvOb03kM6c&oh=00_AYAt6TfsAdvo36gdWUYkzNgVd4GIUWZRAD0dQFPFeDi0Aw&oe=676EE1FB" />
                        
                    </Tooltip>
                </AvatarGroup>
              </Box>
        </Box>

    )
}

export default BoardBar