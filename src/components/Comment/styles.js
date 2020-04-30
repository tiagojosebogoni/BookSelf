import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 5px 20px;
  margin: 5px 0;
  border-radius: 10px;
  border: 1px solid #444;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  button {
    border: 0;
  }

  svg {
    margin: 0 10px;
  }
`;

export const Dated = styled.p`
  font-size: 14px;
  line-height: 30px;
  color: #444;
`;

export const Body = styled.p`
  font-size: 16px;
  line-height: 25px;
`;

export const Author = styled.p`
  font-size: 18px;

  font-weight: bold;
`;

export const Right = styled.div``;

export const Header = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;
