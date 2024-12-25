
import Box from '@mui/material/Box';
import SaseaCard from './SaseaCard/SaseaCard';

const COLUMN_HEADER_HEIGHT = 64;
const COLUMN_FOOTER_HEIGHT = 64;

function ListCards() {
  return (
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
        }}>
                     
        <SaseaCard />
        <SaseaCard temporaryHideMedia />
        <SaseaCard temporaryHideMedia />
        <SaseaCard temporaryHideMedia />
        <SaseaCard temporaryHideMedia />
        <SaseaCard temporaryHideMedia />
        <SaseaCard temporaryHideMedia />
        <SaseaCard temporaryHideMedia />
        <SaseaCard temporaryHideMedia />
        <SaseaCard temporaryHideMedia />

    </Box>
  );
}

export default ListCards;