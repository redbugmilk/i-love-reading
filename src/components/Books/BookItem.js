import PropTypes from "prop-types";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

function BookItem({ id, author, title, selectedIndex, handlerSelect }) {
  const authorNameFirstLetters = (authorName) => {
    return authorName.reduce((reducedName, name) => {
      return reducedName + name[0];
    }, "");
  };
  return (
    <ListItem alignItems="flex-start">
      <ListItemButton
        selected={selectedIndex === id}
        onClick={(event) => handlerSelect(event, id)}
      >
        <ListItemAvatar>
          <Avatar>{authorNameFirstLetters(author)}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={
            <Typography
              sx={{ display: "inline" }}
              variant="body2"
              color="text.primary"
            >
              {author}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}

BookItem.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  selectedIndex: PropTypes.number,
  handlerSelect: PropTypes.func.isRequired,
};

export default BookItem;
