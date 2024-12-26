import AddLinkIcon from "@mui/icons-material/AddLink";
import CommentIcon from "@mui/icons-material/Comment";
import GroupsIcon from "@mui/icons-material/Groups";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PropTypes from 'prop-types';

function SaseaCard({ saseaCard }) {
  return (
    <Card
      sx={{
        cursor: "pointer",
        boxShadow: "0 1px 1px rgb(0 0 0 / 10%), 0 1px 1px rgb(0 0 0 / 10%)",
        borderRadius: "8px",
        overflow: "unset",
        border: '0.3px solid transparent',
        '&:hover': {
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "white" : "black",
        },
      }}
    >
      {/* Card Media */}
      {saseaCard?.cover && (
        <CardMedia
          sx={{
            height: 140,
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
          image={saseaCard.cover}
          title={saseaCard.title}
        />
      )}

      {/* Card Content */}
      <CardContent sx={{ p: 1.5 }}>
        <Typography variant="subtitle1">{saseaCard.title}</Typography>
      </CardContent>

      {/* Card Actions */}
      <CardActions
        sx={{
          p: "0 8px 8px 8px",
          display: "flex",
          justifyContent: "flex-start", // Align buttons to the left
        }}
      >
        {saseaCard.memberIds?.length > 0 && (
          <Button
            size="small"
            sx={{ textTransform: "none" }}
            startIcon={<GroupsIcon />}
          >
            {saseaCard.memberIds.length}
          </Button>
        )}

        {saseaCard.comments?.length > 0 && (
          <Button
            size="small"
            sx={{ textTransform: "none" }}
            startIcon={<CommentIcon />}
          >
            {saseaCard.comments.length}
          </Button>
        )}

        {saseaCard.attachments?.length > 0 && (
          <Button
            size="small"
            sx={{ textTransform: "none" }}
            startIcon={<AddLinkIcon />}
          >
            {saseaCard.attachments.length}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

SaseaCard.propTypes = {
  saseaCard: PropTypes.shape({
    cover: PropTypes.string,
    memberIds: PropTypes.arrayOf(PropTypes.number).isRequired,
    comments: PropTypes.arrayOf(PropTypes.string).isRequired,
    attachments: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default SaseaCard;
