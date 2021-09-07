import React, { useContext, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { GlobalContext } from '../../providers/Global';
import {
  ModalContainer,
  LoginWrapper,
  ModalContent,
  ModalTitle,
  InputGroup,
  Button,
  Error,
} from './modal.styles';

const modalContainer = document.getElementById('modalContainer');

const useOutside = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const refEvent = ref.current && !ref.current.contains(event.target);

      if (refEvent) callback();
    };

    modalContainer.addEventListener('mousedown', handleClickOutside);

    return () => {
      modalContainer.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);

  return { ref };
};

const Modal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsModalOpen, authenticateUser, errorLogin } = useContext(GlobalContext);
  const { ref } = useOutside(() => setIsModalOpen(false));
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser(email, password);
  };

  useEffect(() => {
    const escEvent = (event) => {
      if (event.keyCode === 27) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener('keydown', escEvent, false);

    return () => {
      document.removeEventListener('keydown', escEvent, false);
    };
  }, [setIsModalOpen]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return ReactDOM.createPortal(
    <ModalContainer>
      <LoginWrapper ref={ref} onSubmit={handleSubmit}>
        <ModalTitle>Authenticate user</ModalTitle>
        <ModalContent>
          <InputGroup>
            <label className="input" htmlFor="email">
              <i className="fas fa-user" />
              <input
                ref={inputRef}
                id="email"
                type="text"
                placeholder="email or username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </InputGroup>
          <InputGroup>
            <label className="input" htmlFor="password">
              <i className="fas fa-lock" />
              <input
                id="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </InputGroup>
          <Error>{errorLogin && errorLogin}</Error>
          <Button type="submit">Login</Button>
        </ModalContent>
      </LoginWrapper>
    </ModalContainer>,
    modalContainer
  );
};

export default Modal;
