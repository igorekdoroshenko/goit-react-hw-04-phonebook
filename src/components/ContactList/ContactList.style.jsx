import styled from '@emotion/styled';

export const ContactWriper = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  list-style: none;

  width: 500px;
  padding: 12px;

`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  width: 500px;
  border: 1px solid black;
  padding: 10px;
  border-radius: 1px;
  margin-bottom: 5px;
  margin-left: -10px;
`;

export const ContactButton = styled.button`
  padding: 4px 8px;
  font: inherit;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: lightblue;
    cursor: pointer;
  }
`;
