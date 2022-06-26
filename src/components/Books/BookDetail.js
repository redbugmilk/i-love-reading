import {
  Box,
  CardContent,
  Divider,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const style = {
  wrap: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: 24,
    p: 5,
  },
  headerCard: {
    justifyContent: "center",
    alignItems: "center",
    direction: "column",
  },
};

function BookDetail({
  id,
  author,
  pages,
  title,
  publication,
  open,
  handleClose,
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper sx={style.wrap}>
        <CardContent>
          <Stack
            direction="column"
            spacing={2}
            divider={<Divider orientation="horizontal" flexItem />}
          >
            <Box sx={style.headerCard}>
              <Typography variant="h5" color="primary" gutterBottom>
                {title}
              </Typography>
              <Typography variant="h6" color="secondary">
                {author}
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 14 }} color="info" gutterBottom>
                Additional Information:
              </Typography>
              <Typography variant="body2" color="info" gutterBottom>
                {`Number of pages: ${pages}`}
              </Typography>
              <Typography variant="body2" color="info" gutterBottom>
                {`Year: ${publication?.year}`}
              </Typography>
              <Typography variant="body2" color="info" gutterBottom>
                {`Location: ${publication?.city}, ${publication?.country}`}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Paper>
    </Modal>
  );
}

BookDetail.propTypes = {
  id: PropTypes.number,
  author: PropTypes.array,
  pages: PropTypes.number,
  title: PropTypes.string,
  publication: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    year: PropTypes.number,
  }),
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

BookDetail.defaultProps = {
  open: false,
};
export default BookDetail;
