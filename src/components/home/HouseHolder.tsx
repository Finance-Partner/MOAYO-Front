import { Outlet, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const ButtonContainer = styled.div`
  width: 100%;
  height: 10%;
`;
const Btn = styled.button<{ isActive: boolean }>`
  width: 130px;
  height: 80%;
  margin-right: 20px;
  border-radius: 20px;
  background-color: white;
  color: ${(props) => (props.isActive ? "#7763F4" : "#7b7f85")};
  border: 1px solid ${(props) => (props.isActive ? "#7763F4" : "#7b7f85")};
  cursor: pointer;
`;
const OutletContainer = styled.div`
  width: 100%;
  height: 90%;
`;
const HouseHolder = () => {
  const navigate = useNavigate();
  const overviewMatch = useMatch("/householder/overview");
  const detaildMatch = useMatch("/householder/detail");
  return (
    <Wrapper>
      <ButtonContainer>
        <Btn
          onClick={() => navigate("/householder/overview")}
          isActive={overviewMatch != null}
        >
          캘린더
        </Btn>
        <Btn
          onClick={() => navigate("/householder/detail")}
          isActive={detaildMatch != null}
        >
          내역
        </Btn>
      </ButtonContainer>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </Wrapper>
  );
};
export default HouseHolder;