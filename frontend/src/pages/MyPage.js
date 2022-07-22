import NavigationBar from "../components/NavigationBar";
import {
  Container,
  Button,
  MyPageContainer,
  ButtonContainer,
  SideBar,
  TextDiv,
  Wrapper,
  RowBox,
} from "../components/Component";
import { useEffect, useState } from "react";
import {
  deleteMyInfo,
  getMyInfo,
  updateMyInfo,
  updateSecretKey,
} from "../utils/Api";
import { GoKey } from "react-icons/go";
import PageTitle from "../components/share/PageTitle";
import { colors } from "../styles/colors";
const MyPage = () => {
  const [email, setEmail] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [password, setPassword] = useState("");
  const [tab, setTab] = useState("userInfo");
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
      <PageTitle
        title="Mypage"
        subTitle="회원 정보 수정 및 Cecret Key를 받아볼 수 있습니다."
        bgColor={colors.navyColor}
      />
      <Wrapper>
        <SideBar>
          <TextDiv
            pointer
            fontSize={20}
            margin="6px 0"
            className={tab === "userInfo" && "goldText"}
            onClick={() => setTab("userInfo")}
          >
            회원 정보
          </TextDiv>
          <TextDiv
            className={tab === "secret" && "goldText"}
            pointer
            fontSize={20}
            margin="6px 0"
            onClick={() => setTab("secret")}
          >
            Secret Key
            <GoKey style={{ fontSize: "24px", color: `${colors.goldColor}` }} />
          </TextDiv>
          <TextDiv pointer fontSize={20} margin="6px 0">
            로그아웃
          </TextDiv>
          <TextDiv pointer fontSize={20} margin="6px 0">
            회원탈퇴
          </TextDiv>
        </SideBar>
        <Container>
          <RowBox>
            <TextDiv fontSize={30} bold margin="0 auto 0 0">
              회원 정보
            </TextDiv>
          </RowBox>
          <MyPageContainer
            email={email}
            createdAt={createdAt}
            secretKey={secretKey}
            setPassword={setPassword}
            tab={tab}
          />
          {/* <div style={{ height: "50px" }} /> */}
          <ButtonContainer justify="flex-end">
            <Button
              name="재발급"
              func={async () => {
                const data = await updateSecretKey();
                setSecretKey(data.secretKey);
              }}
            />
            <div style={{ width: "10px" }} />
            <Button
              name="회원수정"
              func={() => {
                updateMyInfo(password);
              }}
            />
            <div style={{ width: "10px" }} />
            {/* <Button
              name="회원탈퇴"
              func={() => {
                deleteMyInfo();
              }}
            />
            <div style={{ width: "100px" }} /> */}
          </ButtonContainer>
        </Container>
      </Wrapper>
    </>
  );
};

export default MyPage;
