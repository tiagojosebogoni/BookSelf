import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  display: flex;
  background: ${(props) => (props.remove ? '#FE3131' : '#007a63')};
  height: 46px;
  border-radius: 10px;
  padding: 0 10px;
  width: 100%;
  color: #fff;
  font-weight: bold;
  border: 0;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => shade(0.2, props.remove ? '#FE3131' : '#007a63')};
  }

  svg {
    margin-right: 20px;
  }
`;
