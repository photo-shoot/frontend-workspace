import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 400px;
  .slick-dots {
    bottom: 15px;
    .slick-active {
      button::before {
        color: #ffffff;
      }
    }
  }
`;

export const SliderItem = styled.img`
  object-fit: cover;
  height: 350px;
  width: 1440px;
  margin: auto;
`;
