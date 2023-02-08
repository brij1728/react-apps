import styled, { css } from "styled-components";

export const GPT3Section = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  row-gap: 20px;
  padding: 2rem 6rem;

  background: ${({ theme }) => theme.primaryColors.primaryFooter};

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      flex-flow: column wrap;
      padding: 0.5rem 1rem;
    }

    @media only screen and (min-width: ${theme.breakpoints
        .xs}) and (max-width: ${theme.breakpoints.md}) {
      flex-flow: column wrap;
      padding: 1rem 2.5rem;
    }
  `}
`;

export const GPT3Feature = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GPT3Heading = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      flex-flow: column wrap;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 10px;
    }

    @media only screen and (min-width: ${theme.breakpoints
        .sm}) and (max-width: ${theme.breakpoints.md}) {
      flex-flow: column wrap;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 10px;
    }
  `}
`;

export const GradientTextHeading = styled.h1`
  flex: 2;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;

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

export const GPT3HeadingParagraph = styled.p`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;

  font-weight: 500;
  font-size: 16px;
  line-height: 30px;

  color: ${({ theme }) => theme.primaryColors.primarySubtext};

  cursor: pointer;

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      font-size: 12px;
      line-height: 18px;
    }

    @media only screen and (min-width: ${theme.breakpoints
        .sm}) and (max-width: ${theme.breakpoints.md}) {
      font-size: 14px;
      line-height: 20px;
    }
  `}
`;

export const GPT3Container = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;

  gap: 50px;

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      flex-flow: column wrap;
      gap: 10px;
    }

    @media only screen and (min-width: ${theme.breakpoints
        .sm}) and (max-width: ${theme.breakpoints.md}) {
      flex-flow: column wrap;
      gap: 10px;
    }
  `}
`;
