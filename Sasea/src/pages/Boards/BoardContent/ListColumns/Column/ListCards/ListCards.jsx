
import Box from '@mui/material/Box';
import SaseaCard from './SaseaCard/SaseaCard';
import PropTypes from 'prop-types';

const COLUMN_HEADER_HEIGHT = 64;
const COLUMN_FOOTER_HEIGHT = 64;

function ListCards({cards}) {
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
                     
       {cards?.map((card => <SaseaCard key={card.id} saseaCard={card} />))} 

    </Box>
  );
}

ListCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListCards;