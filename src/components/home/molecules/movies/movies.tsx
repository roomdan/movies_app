import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { params, response } from "../../../../util/api/abs/abstract_api";
import Api from "../../../../util/api/api";
import CardMovie from "../card/card";
import { useSelector } from "react-redux";
import Loader from "../../../backdrop/onCharge";
import { Pagination } from "@mui/material";
import image from "../../../../assets/home/slider-1.png";

export default function Movies() {
  const data: response = { data: null, status: 200 };
  const [movies, setMovies] = useState(data);
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const filter_selected = useSelector((store: any) => {
    return store.select_movie_option;
  });

  useEffect(() => {
    const query_params: params = {
      page,
    };

    if (filter_selected === "All") {
      query_params.s = "action";
    } else if (filter_selected === "New releases") {
      query_params.s = "family";
    } else if (filter_selected === "Most popular") {
      query_params.s = "super heroes";
    } else if (filter_selected === "Trends") {
      query_params.s = "child";
    } else if (filter_selected === "Recomendations") {
      query_params.s = "avengers";
    }

    const resoures = async () => {
      const http_request = new Api("");
      const movie_data = await http_request.GET(query_params);
      setMovies(movie_data);
    };
    resoures();
  }, [filter_selected, page]);

  const movies_list =
    movies.data && movies.data.Search ? (
      movies.data.Search.map((movie: any, index: number) => {
        return (
          <CardMovie
            info={true}
            title={movie.Title}
            url={movie.Poster !== "N/A" ? movie.Poster : image}
            key={index}
          />
        );
      })
    ) : (
      <Loader></Loader>
    );

  return (
    <>
      <Container
        sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {movies_list}
      </Container>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 5,
          px: 0,
        }}
      >
        <Pagination
          count={
            movies.data && movies.data.totalResults
              ? Math.floor(movies.data.totalResults / 10)
              : 10
          }
          variant="outlined"
          shape="rounded"
          color="primary"
          page={page}
          onChange={handleChange}
        ></Pagination>
      </Container>
    </>
  );
}
