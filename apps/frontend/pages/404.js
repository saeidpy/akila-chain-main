import React from 'react';
import styled from 'styled-components';

const NotFound = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <Parent>
      <Header>404</Header>
      <NotFoundText>Not Found</NotFoundText>
      <Desc>The resource requested could not be found on this server!</Desc>
    </Parent>
  );
};

export default NotFound;

const Parent = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-primary);
  gap: 16px;
  flex-direction: column;
`;
const Header = styled.p`
  font-size: 180px;
  font-weight: 600;
`;
const NotFoundText = styled.h1`
  font-weight: 600;
`;
const Desc = styled.p`
  font-weight: 400;
`;
