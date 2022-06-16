import { Container } from "@mui/system";
import "./detail.scss";
import CardMovie from "../../home/molecules/card/card";
import img from "../../../assets/home/slider-1.png";
import StarIcon from "@mui/icons-material/Star";
import { useEffect, useState } from "react";
import Api from "../../../util/api/api";
import { params, response } from "../../../util/api/abs/abstract_api";
import { useParams } from "react-router-dom";
import Loader from "../../backdrop/onCharge";
import { useDispatch } from "react-redux";
import save_favorite_action from "../../../db/actions/save_favorite_action";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function MovieDetali(props: any) {
  const data: response = { data: null, status: 200 };
  const { id } = props;
  const [detail, setDetail] = useState(data);
  const { title } = useParams();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const query_params: params = {
      t: typeof title === "string" ? title.split("-").join(" ") : "",
    };

    const resoures = async () => {
      const http_request = new Api("");
      const movie_detail = await http_request.GET(query_params);
      setDetail(movie_detail);
    };
    resoures();
  }, [id, title]);

  function save_favorite(item: any) {
    dispatch(save_favorite_action(item, true));
    setOpen(true);
  }

  return detail.data ? (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "70vh",
        background: "linear-gradient(#FFBE40 50%, white)",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        pt: 16,
        pb: 5,
      }}
    >
      <div className="detail-movies">
        <div className="movie">
          <CardMovie
            className="width"
            url={detail.data.Poster !== "N/A" ? detail.data.Poster : img}
            title={detail.data.Title}
            info={false}
          ></CardMovie>
        </div>
        <div className="description">
          <h2 className="title">{detail.data.Title}</h2>
          <p className="phg">{detail.data.Plot}</p>
          <table>
            <tbody>
              <tr>
                <td>Director:</td>
                <td>{detail.data.Director}</td>
              </tr>
              <tr>
                <td>Writter:</td>
                <td>{detail.data.Writer}</td>
              </tr>
              <tr>
                <td>Year:</td>
                <td>{detail.data.Year}</td>
              </tr>
              <tr>
                <td>Actors:</td>
                <td>{detail.data.Actors}</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>{detail.data.Type}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="actions">
        <button
          onClick={() => {
            save_favorite(detail.data);
          }}
        >
          <StarIcon></StarIcon>
          Agregar a favoritos
        </button>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Added to favorites
            </Typography>
          </Box>
        </Modal>
      </div>
    </Container>
  ) : (
    <Loader></Loader>
  );
}
