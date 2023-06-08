import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 10px;

  border: 1px solid black;
  border-radius: 1px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
  font-size: 18px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 1px;
  border: 1px solid black;

  font-size: 20px;

    &:hover {
    color: black;
    background-color: lightblue;
    cursor: pointer;
  }
`;