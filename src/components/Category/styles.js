import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  padding: 5px;
  border-radius: 8px;

  background: ${(props) => (props.selected ? '#172' : 'blue')};
  width: 120px;
  height: 120px;

  h1 {
    font-size: 20px;
    margin-top: 10px;
  }
`;
