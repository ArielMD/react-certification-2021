import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0005;
  position: absolute;
  top: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginWrapper = styled.form`
  background-color: white;
  padding: 2rem;
  min-width: 20rem;
`;

export const ModalTitle = styled.h2`
  text-align: center;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 20px;
  width: 100%;

  .input {
    display: inline-flex;
    align-items: center;
    padding: 10px;

    input {
      width: 100%;
      border: none;
      border-bottom: 2px solid black;
      padding: 10px;
    }
    i {
      margin-right: 1rem;
      font-size: 1rem;
    }
  }
`;

export const Button = styled.button`
  width: 5rem;
  height: 2rem;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.white};
  border-radius: 0.5rem;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
`;

export const Error = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: -1rem;
  padding: 1rem;
`;
