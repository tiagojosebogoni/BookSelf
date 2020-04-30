import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-radius: 5px;
  padding: 10px;
  border: 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  height: 150px;
  width: 450px;
  flex-wrap: wrap;

  :hover {
    opacity: 0.9;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  color: #333;
  font-weight: bold;
`;

export const Author = styled.p`
  font-size: 18px;
  color: #555;
`;

export const DateCriation = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #888;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
`;

export const ContentBook = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  margin: 0 10px;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const ContentImage = styled.div`
  display: flex;
`;
