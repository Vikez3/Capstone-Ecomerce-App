import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 75%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media (max-width: 900px) {
    width: 85%;
  }
  @media (max-width: 550px) {
    width: 95%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  font-size: 2vw;
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.span`
  font-size: 5vw;
  margin-top: 30px;
  margin-left: auto;
`;

export const CardInfo = styled.div`
  margin-top: 50px;
  padding: 10px 20px;
  text-align: center;
  background-color: #ffcccb;
  color: white;
  border-radius: 5px;
  border: 3px solid #f8b2b1;
`;
