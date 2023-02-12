import styled, { css } from "styled-components";

export const HeaderSection = styled.div`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  gap: 70px;
  padding: 2rem 6rem;
  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      flex-flow: column wrap;
      gap: 25px;
      padding: 0.5rem 1rem;
    }
    @media only screen and (max-width: ${theme.breakpoints
        .md}) and (min-width: ${theme.breakpoints.sm}) {
      flex-flow: column wrap;
      gap: 25px;
      padding: 1rem 2.5rem;
    }

    @media only screen and (min-width: ${theme.breakpoints.md}) {
      flex-flow: row wrap;
    }
  `}
`;

export const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-flow: column wrap;
  row-gap: 25px;
`;
export const GradientTextHeading = styled.h1`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  text-align: center;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 32px;

  letter-spacing: -0.04em;

  background: linear-gradient(
    89.97deg,
    ${({ theme }) => theme.primaryColors.primaryGradientText} 1.84%,
    ${({ theme }) => theme.secondaryColors.secondaryGradientText} 102.67%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      font-size: 20px;
    }
    @media only screen and (min-width: ${theme.breakpoints
        .sm}) and (max-width: ${theme.breakpoints.md}) {
      font-size: 24px;
    }
  `}
`;

export const HeaderInputContent = styled.div`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  justify-content: space-between;
  background-color: grey;
`;

export const HeaderEmailInput = styled.input`
  display: flex;
  flex: 2;

  background: ${({ theme }) => theme.primaryColors.primaryFooter};
  border: 2px solid ${({ theme }) => theme.primaryColors.primaryFooter};
  outline: none;
  cursor: pointer;

  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  padding: 10px;
`;
export const HeaderButton = styled.button`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  border: none;

  background-color: ${({ theme }) => theme.primaryColors.primary_02};
  color: ${({ theme }) => theme.primaryColors.primary_01};

  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  padding: 10px;
  outline: none;
  cursor: pointer;
`;

export const HeaderText = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  text-align: justify;
  color: ${({ theme }) => theme.primaryColors.primaryText};

  font-weight: 400;
  font-size: 16px;
  line-height: 30px;

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      font-size: 12px;
      line-height: 18px;
    }

    @media only screen and (min-width: ${theme.breakpoints
        .sm}) and (max-width: ${theme.breakpoints.md}) {
      font-size: 14px;
      line-height: 22px;
    }
  `}
`;

export const HeaderPeople = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const HeaderPeopleImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  transition: 1s;

  :hover {
    transform: scale(1.1);
  }

  cursor: pointer;
`;
export const HeaderPeopleContent = styled.p``;

export const HeaderImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const HeaderImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  transition: 1s;

  :hover {
    transform: scale(1.2);
  }

  cursor: pointer;
`;
