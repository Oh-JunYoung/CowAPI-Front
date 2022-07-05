import NavigationBar from "../components/NavigationBar";
import { Container, Title, Button, MyPageContainer, ButtonContainer } from "../components/Component";
import { useEffect, useState } from "react";
import { deleteMyInfo, getMyInfo, updateMyInfo, updateSecretKey } from "../utils/Api";

const MyPage = () => { 
  const [email, setEmail] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const getDetail = async () => {
      const data = await getMyInfo();
      setEmail(data.email);
      setCreatedAt(data.createdAt);
      setSecretKey(data.secretKey);
    };

    getDetail();
  }, []);

  return (
    <>
      <NavigationBar />
      <Title name="마이페이지" />
      <Container>
        <MyPageContainer email={email} createdAt={createdAt} secretKey={secretKey} setPassword={ setPassword} />
        <div style={{height:"50px"}}/>
        <ButtonContainer justify="flex-end">
          <Button name="재발급" func={async () => {
            const data = await updateSecretKey();
            setSecretKey(data.secretKey);
          }} />
          <div style={{ width: "10px" }} />
          <Button name="회원수정" func={() => { updateMyInfo(password)}}/>
          <div style={{ width: "10px" }} />
          <Button name="회원탈퇴" func={() => { deleteMyInfo()}}/>
          <div style={{ width: "100px" } }/>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default MyPage;