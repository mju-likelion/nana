import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalContainer = styled.div`
  width: 700px;
  height: 500px;
  margin-top: 50px;
  border-radius: 20px;
  background-color: #ffffff;

  @media screen and (max-width: 1024px) {
    width: 300px;
    height: 350px;
  }
`;

const Modal = ({ openModal }) => {
  return (
    <Container onClick={openModal}>
      <Background>
        {/* 모달창 바깥쪽에만 off되도록 stopPropagation 적용 */}
        <ModalContainer onClick={(e) => e.stopPropagation()} />
      </Background>
    </Container>
  );
};

export default Modal;
