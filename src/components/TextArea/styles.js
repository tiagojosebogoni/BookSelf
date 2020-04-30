import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & + div {
    margin-top: 18px;
  }

  textarea {
    width: 100%;
    height: 100%;
    min-height: 140px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
    resize: vertical;

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
