import styled, { css } from "styled-components";

export const FeaturesSection = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;

  gap: 50px;
  padding: 2rem 6rem;

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      flex-flow: column wrap;
      padding: 0.5rem 1rem;
      gap: 20px;
    }

    @media only screen and (max-width: ${theme.breakpoints
        .md}) and (min-width: ${theme.breakpoints.sm}) {
      flex-flow: column wrap;
      padding: 1rem 2.5rem;
      gap: 35px;
    }
  `}
`;

export const FeaturesHeading = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;

  row-gap: 20px;
  margin-right: 5rem;

  text-align: left;

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints.md}) {
      margin-right: 0;
    }
  `}
`;

export const FeaturesGradientText = styled.h1`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  font-weight: 800;
  font-size: 34px;
  line-height: 45px;

  background: linear-gradient(
    103.22deg,
    ${({ theme }) => theme.primaryColors.primaryGradientText} -13.86%,
    ${({ theme }) => theme.secondaryColors.secondaryGradientText} 99.55%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      font-size: 22px;
      line-height: 25px;
    }

    @media only screen and (max-width: ${theme.breakpoints
        .md}) and (min-width: ${theme.breakpoints.sm}) {
      font-size: 28px;
      line-height: 35px;
    }
  `}
`;

export const FeaturesText = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  font-weight: 500;
  font-size: 16px;
  line-height: 30px;

  color: ${({ theme }) => theme.primaryColors.primarySubtext};

  margin-top: 2rem;

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      margin-top: 0;
    }
  `}
`;

export const FeaturesContainer = styled.div`
  flex: 1.5;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: center;
  row-gap: 20px;
`;
