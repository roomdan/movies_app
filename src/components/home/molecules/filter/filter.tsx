import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { useDispatch, useSelector } from 'react-redux';
import select_movie_action from "../../../../db/actions/select_movie_option_action";
import "./filter.scss"

export const filter_options = [
  "All",
  "New releases",
  "Most popular",
  "Trends",
  "Recomendations",
];

export default function Movies() {
  const dispatch = useDispatch();
  const selected = useSelector((store:any)=>{
    return store.select_movie_option
  })

  const handle_movie_option: any = function (option: string) {
    dispatch(select_movie_action(option));
  };

  return (
    <Container
      sx={{ py: 4 ,w: 100, display: "flex", justifyContent: "space-between", overflowX:'auto', height:'auto'}}
    >
      <div className="filter-content">
      {filter_options.map((option) => {
        return (
          <Button
          variant="text"
            onClick={() => {
              handle_movie_option(option);
            }}
            sx={{
              bg: "transparent",
              textTransform: "capitalize",
              fontSize: 20,
              color: selected === option ? 'red' : 'black',
              fontWeight: "bold",
              background: selected === option ? 'black' : '',
            }}
            className="w-auto"
            key={option}
          >
            {option}
          </Button>
        );
      })}
      </div>
    </Container>
  );
}
