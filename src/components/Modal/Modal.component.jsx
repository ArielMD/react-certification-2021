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
  }, [ref]);

  return { ref };
};

const Modal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsModalOpen, authenticateUser } = useContext(GlobalContext);
  const { ref } = useOutside(() => setIsModalOpen(false));

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser(email, password);
  };

  return ReactDOM.createPortal(
    <ModalContainer>
      <LoginWrapper ref={ref} onSubmit={handleSubmit}>
        <ModalTitle>Authenticate user</ModalTitle>
        <ModalContent>
          <InputGroup>
            <label className="input" htmlFor="email">
              <i className="fas fa-user" />
              <input
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
          <Button type="submit">Login</Button>
        </ModalContent>
      </LoginWrapper>
    </ModalContainer>,
    modalContainer
  );
};

export default Modal;
