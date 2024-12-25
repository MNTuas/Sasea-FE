import { Box } from "@mui/material";
import ListColumns from "./ListColumns/ListColumns";


function BoardContent() {
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
      <ListColumns />
      
    </Box>
  );
}

export default BoardContent;
