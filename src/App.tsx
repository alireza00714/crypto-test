import { Route, Routes } from "react-router-dom";
import MarketList from "./pages/MarketList/MarketList";
import MarketDetail from "./pages/MarketDetail/MarketDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<MarketList />} />
        <Route path="/detail/:marketId" element={<MarketDetail />} />
        <Route path="*" element={<div>no such file or directory</div>} />
      </Route>
    </Routes>
  );
}
