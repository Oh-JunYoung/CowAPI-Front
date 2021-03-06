// libraries
import { Routes, Route } from "react-router-dom";

// pages
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import QnaList from "./pages/QnaList";
import Qna from "./pages/Qna";
import NoticeList from "./pages/NoticeList";
import Notice from "./pages/Notice";
import AiList from "./pages/AiList";
import Ai from "./pages/Ai";

// css
import "./reset.css";
import { colors } from "./styles/colors";
import { ThemeProvider } from "styled-components";
// components

function App() {
  return (
    <ThemeProvider theme={colors}>
      <div>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/qna-list/:page" element={<QnaList />} />
          <Route
            path="/qna/:id"
            element={<Qna /> /*id 가 -1이면 작성 아니면 수정*/}
          />
          <Route path="/notice-list/:page" element={<NoticeList />} />
          <Route
            path="/notice/:id"
            element={<Notice /> /*id 가 -1이면 작성 아니면 수정*/}
          />
          <Route path="/ai" element={<AiList />} />
          <Route path="/ai/:name" element={<Ai />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
