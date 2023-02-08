import styled, { css } from "styled-components";

export const HomeSection = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  /* row-gap: 20px; */

  /* ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      row-gap: 20px;
    }

    @media only screen and (max-width: ${theme.breakpoints
        .sm}) and (max-width: ${theme.breakpoints.md}) {
      row-gap: 30px;
    }
  `}; */
`;
export const NavHeader = styled.div``;
