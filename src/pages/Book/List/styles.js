import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;

  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  max-width: 1120px;
  justify-content: center;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
  padding: 20px;
  border-radius: 10px;
`;

export const ContentImage = styled.div`
  margin-right: 30px;
`;

export const ContentBook = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
`;

export const Buttons = styled.div`
  display: flex;
  width: 80%;

  > button {
    max-width: 150px;
    margin-right: 10px;

    &:button {
      margin-right: 0;
    }
  }
`;

export const Title = styled.p`
  font-size: 25px;
`;

export const Author = styled.p`
  font-size: 18px;
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 25px;
`;

export const TitleComment = styled.h2`
  font-size: 20px;
  margin: 20px 0;
  color: #333;
`;

export const ContentComment = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  flex-direction: column;
`;

export const ContentDate = styled.div`
  flex-direction: column;
`;

export const ContentAux = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 20px;
`;
