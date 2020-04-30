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
  justify-content: center;
  margin: 10px 0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.1);

  max-width: 1120px;
`;

export const Form = styled.form`
  height: 100%;
  max-width: 1120px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const Inputs = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ContentImage = styled.div`
  display: flex;
  margin-right: 40px;
  align-items: center;
  justify-content: center;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
