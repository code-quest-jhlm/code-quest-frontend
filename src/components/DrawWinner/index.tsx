import { Flex, Modal, ModalBaseProps, rem } from '@mantine/core';
import { FC } from 'react';

import WinnerInfo from '../WinnerInfo';
import './DrawWinner.scss';

interface DrawWinnerProps extends ModalBaseProps {
  centered?: boolean;
  winners: any[]
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
            username={props.winners[0]?.name}
            avatarUrl={props.winners[0]?.image}
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
          {props.winners?.slice(1).map((winner) => (
            <WinnerInfo
              username={winner?.name}
              avatarUrl={winner?.image}
            />
          ))}
        </Flex>
      </Modal.Body>
    </Modal>
  </>
);

export default DrawWinner;
