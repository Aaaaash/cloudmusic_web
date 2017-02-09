import styled from 'styled-components';

export const FindContainer = styled.div`
  flex: 1;
  padding: 0 30px;
  background-color: #FAFAFA;
`;

export const TopNav = styled.ul`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #E1E1E2;
`;

export const NavItem = styled.li`
  list-style: none;
  margin: 0 20px;
  line-height: 44px;
  cursor: pointer;
  color: ${(props) => props.current ? '#C62F2F' : ''};
  border-bottom: ${(props) => props.current ? '2px solid #C62F2F' : ''};
  &:hover {
    color: #C62F2F;
  }
`;
