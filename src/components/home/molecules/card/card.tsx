import { Button, Card, Typography } from "@mui/material";
import "./card.scss";
import { useNavigate } from "react-router-dom";

export default function CardMovie(props: any) {
  const navigate = useNavigate();
  const { url, title, className, info } = props;

  return (
    <Card
      className={`card-movie ${className}`}
      sx={{ backgroundImage: `url("${url}")` }}
    >
      <div className="hover">
        <div className="controlls">
          <Typography
            className="typography"
            textAlign="center"
            fontWeight={"bold"}
            lineHeight={1}
            textTransform={"uppercase"}
            color="white"
          >
            {title}
          </Typography>
          <Button
            onClick={() => {
              navigate("#");
            }}
            variant="contained"
            color="inherit"
            sx={{
              color: "black",
              bgcolor: "#FFBE40",
            }}
            className="btn-watch"
          >
            WATCH NOW
          </Button>
          <Button
            onClick={() => {
              navigate(`movie/${title.split(" ").join("-")}`);
            }}
            variant="outlined"
            color="inherit"
            sx={{ color: "white", display: info ? "flex" : "none" }}
            className="btn-info"
          >
            MORE INFO
          </Button>
        </div>
      </div>
    </Card>
  );
}
