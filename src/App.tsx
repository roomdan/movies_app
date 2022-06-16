import { Route, Routes } from "react-router-dom";
import HomeView from "./components/home/atoms/home.view";
import Layout from "./layout/atoms/layout";
import MovieDetali from "./components/movie_detail/atom/detail";
import FavoritesView from "./components/favorites/atoms/favorite";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<HomeView />}></Route>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/movie/:title" element={<MovieDetali />}></Route>
        <Route path="/favorites" element={<FavoritesView />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
