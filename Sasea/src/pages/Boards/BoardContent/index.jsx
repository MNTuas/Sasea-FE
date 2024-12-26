import { Box } from "@mui/material";
import ListColumns from "./ListColumns/ListColumns";
import PropTypes from 'prop-types';



function BoardContent({ board }) {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        display: "flex",
        p:'5px 0',
      }}
    >
      <ListColumns columns ={board?.columns} />
      
    </Box>
  );
}

BoardContent.propTypes = {
   board: PropTypes.shape({
        columns: PropTypes.arrayOf(PropTypes.object).isRequired
   }).isRequired
};
export default BoardContent;
