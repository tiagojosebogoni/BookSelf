import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;

  align-items: center;
`;

export const Content = styled.div`
  flex-direction: column;
  max-width: 1120px;
  height: 100%;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
  padding: 20px;
  border-radius: 10px;
`;

export const ContentBook = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  margin-bottom: 35px;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;
  margin: 10px;

  > button {
    width: 250px;
  }

  > input {
    width: 350px;
  }
`;

export const BookList = styled.ul`
  display: flex;
  flex: 1;

  overflow-x: auto;
  list-style: none;
  padding: 0;
`;

export const BookItem = styled.li`
  display: flex;
  flex: 1;

  display: inline-block;

  padding: 8px 16px;
  margin-right: 16px;
  align-items: center;
`;
