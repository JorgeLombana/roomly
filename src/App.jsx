import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import Home from "./routes/Home";
import Header from "./Components/Header";

export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Header></Header>
      <Routes>
        <Route path={routes.base} element={<Home />} />
        <Route path={routes.home} element={<Home />} />
        {/* <Route path={routes.details} element={<Detail />} />
        <Route path={routes.favs} element={<Favs />} />
        <Route path={routes.notFound} element={<NotFound />} /> */}
      </Routes>
      {/* <Footer /> */}
    </>
  )
}