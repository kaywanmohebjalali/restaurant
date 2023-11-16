import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import PageNotFound from "./ui/PageNotFound";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to='home'/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='*' element={<PageNotFound/>}/>


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
