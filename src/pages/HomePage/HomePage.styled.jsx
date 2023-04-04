import { device } from "devices";
import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 0;

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;
