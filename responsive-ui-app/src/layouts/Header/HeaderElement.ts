import styled from "styled-components";

export const HeaderSection = styled.div`
  display: flex;
  flex: 1;
  /* background-color: grey; */
`;

export const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-flow: column wrap;
  padding: 2rem 6rem;
  row-gap: 25px;
`;
export const GradientTextHeading = styled.h1`
  display: flex;
  flex: 1;
  flex-flow: row wrap;

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

  background: ${({ theme }) => theme.primaryColors.primary_03};
  border: 0;
  outline: none;
  cursor: pointer;

  font-weight: 700;
  padding: 10px;
`;
export const HeaderButton = styled.button`
  display: flex;
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.primaryColors.primary_02};
  border-color: ${({ theme }) => theme.primaryColors.primary_02};
  -webkit-text-fill-color: ${({ theme }) => theme.primaryColors.primary_01};

  font-weight: 700;
  padding: 10px;
`;

export const HeaderText = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  color: ${({ theme }) => theme.primaryColors.primaryText};
`;

export const HeaderContentPeople = styled.div``;

export const HeaderContentPeopleImg = styled.img``;
export const HeaderContentPeopleContent = styled.h1``;
