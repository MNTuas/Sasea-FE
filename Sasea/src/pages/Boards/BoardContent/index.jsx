import { Box } from "@mui/material";
import ListColumns from "./ListColumns/ListColumns";
import PropTypes from 'prop-types';
import mapOrder from "~/utils/sort";



function BoardContent({ board }) {
  const orderedColumns = mapOrder(board.columns, board?.columnOrderIds, "_id");
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
      <ListColumns columns ={orderedColumns} />
      
    </Box>
  );
}

BoardContent.propTypes = {
   board: PropTypes.shape({
        columns: PropTypes.arrayOf(PropTypes.object).isRequired,
        columnOrderIds: PropTypes.arrayOf(PropTypes.string).isRequired
   }).isRequired
};
export default BoardContent;
