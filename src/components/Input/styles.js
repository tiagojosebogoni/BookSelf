import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & + div {
    margin-top: 18px;
  }

  input {
    height: 54px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;

    &::placeholder {
      color: #666;
    }
  }
`;

export const Label = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
  color: #333;
  font-weight: 650;
`;
