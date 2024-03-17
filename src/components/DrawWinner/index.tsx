import { Flex, Modal, ModalBaseProps, rem } from '@mantine/core';
import { FC } from 'react';

import WinnerInfo from '../WinnerInfo';
import './DrawWinner.scss';

interface DrawWinnerProps extends ModalBaseProps {
  centered?: boolean;
}

const DrawWinner: FC<DrawWinnerProps> = (props) => (
  <>
    <Modal
      className={`q-wrapper-modal-winner ${props.className}`}
      {...props}
      title="Ganadores"
      size="lg"
    >
      <Modal.Body className="cq-body-modal-winner">
        <Flex
          h={rem(200)}
          bg="var(--mantine-primary-color-filled)"
          justify="center"
          align="center"
          columnGap={rem(80)}
        >
          <WinnerInfo
            username="Lorem ipsum"
            avatarUrl="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
          />
        </Flex>
        <Flex
          className="cq-more-winner"
          justify="center"
          columnGap={rem(80)}
          h={rem(140)}
          px={rem(40)}
          align="center"
          mt={rem(32)}

        >
          <WinnerInfo
            username="Lorem ipsum"
            avatarUrl="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"
          />
          <WinnerInfo
            username="Lorem ipsum"
            avatarUrl="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png"
          />
          <WinnerInfo
            username="Lorem ipsum"
            avatarUrl="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
          />
        </Flex>
      </Modal.Body>
    </Modal>
  </>
);

export default DrawWinner;
