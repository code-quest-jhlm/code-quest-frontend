import {
  Box,
  Modal,
  ModalBaseProps,
  Title,
} from '@mantine/core';
import { FC } from 'react';

interface DrawWinnerProps extends ModalBaseProps {
  centered?: boolean;
}

const DrawWinner: FC<DrawWinnerProps> = (props) => (
  <>
    <Modal {...props} title={<Title order={3}>Ganadores</Title>} size="xl">
      <Box>
        Hello
      </Box>
    </Modal>
  </>
);

export default DrawWinner;
