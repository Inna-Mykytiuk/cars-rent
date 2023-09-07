import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  justify-content: center;
  gap: 29px;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
`;

export const ListItem = styled.div`
  padding: 0;
  margin: 0;
`;

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  justify-content: center;
`;

export const Warning = styled.h3`
  padding: 16px 10px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  background-color: #ff9900;
`;
