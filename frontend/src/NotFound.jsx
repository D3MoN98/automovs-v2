import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const NotFound = () => {
  return (
    <Container>
      <Title>404</Title>
      <Message>Page Not Found</Message>
    </Container>
  );
};

export default NotFound;
