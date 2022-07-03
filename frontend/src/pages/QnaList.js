import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const QnaList = (props) => { 
  //console.log(useParams().page)
  return (
    <>
      <NavigationBar />
      <div>질문리스트</div>
    </>
  );
}

export default QnaList;