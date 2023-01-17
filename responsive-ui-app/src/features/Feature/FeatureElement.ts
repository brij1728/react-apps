import styled from "styled-components";

export const FeatureSection = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: flex-start;

  row-gap: 20px;
`;

export const FeatureTitle = styled.h1`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FeatureText = styled.p`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;

  font-weight: 500;
  font-size: 16px;
  line-height: 30px;

  color: ${({ theme }) => theme.primaryColors.primaryText};
`;
