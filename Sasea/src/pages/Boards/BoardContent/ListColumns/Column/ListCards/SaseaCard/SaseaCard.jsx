import AddLinkIcon from "@mui/icons-material/AddLink";
import CommentIcon from "@mui/icons-material/Comment";
import GroupsIcon from "@mui/icons-material/Groups";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// eslint-disable-next-line react/prop-types
function SaseaCard({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <Card
        sx={{
          cursor: "pointer",
          boxShadow: "0 1px 1px rgb(0 0 0 / 10%), 0 1px 1px rgb(0 0 0 / 10%)",
          borderRadius: "8px",
          overflow: "unset", // Ensures consistent border-radius visuals
        }}
      >
        {/* Card Content without image */}
        <CardContent sx={{ p: 1.5 }}>
          <Typography variant="subtitle1">Cart test</Typography>
        </CardContent>

      </Card>
    );
  }

  return (
    <Card
      sx={{
        cursor: "pointer",
        boxShadow: "0 1px 1px rgb(0 0 0 / 10%), 0 1px 1px rgb(0 0 0 / 10%)",
        borderRadius: "8px",
        overflow: "unset", // Ensures consistent border-radius visuals
      }}
    >
      {/* Card Image */}
      <CardMedia
        sx={{
          height: 140,
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDnTVB4DPJj4VkZqpL90j8KhDwCg-97VO34Q&s"
        title="Himmel rute"
      />

      {/* Card Content */}
      <CardContent sx={{ p: 1.5 }}>
        <Typography variant="subtitle1">Sasea</Typography>
      </CardContent>

      {/* Card Actions */}
      <CardActions
        sx={{
          p: "0 8px 8px 8px",
          display: "flex",
          justifyContent: "flex-start", // Align buttons to the left
        }}
      >
        <Button size="small" sx={{ textTransform: "none" }} startIcon={<GroupsIcon />}>
          20
        </Button>

        <Button size="small" sx={{ textTransform: "none" }} startIcon={<CommentIcon />}>
          20
        </Button>

        <Button size="small" sx={{ textTransform: "none" }} startIcon={<AddLinkIcon />}>
          20
        </Button>
      </CardActions>
    </Card>
  );
}

export default SaseaCard;
