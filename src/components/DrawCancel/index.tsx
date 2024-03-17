import { Modal, ModalBaseProps, Flex, Button, rem } from '@mantine/core';
import { FC } from 'react';
import './DrawCancel.scss';

interface DrawCancelProps extends ModalBaseProps {
  centered?: boolean;
}

const DrawCancel: FC<DrawCancelProps> = (props) => (
  <Modal
    className={`q-wrapper-modal-cancel ${props.className}`}
    {...props}
    title="¿Está seguro que desea cancelar el sorteo?"
    size="lg"
  >
    <Modal.Body p={rem(32)}>
      <Flex justify="flex-end" gap={rem(16)}>
        <Button className="cq-button" color="transparent" onClick={props.onClose}>No</Button>
        <Button className="cq-button">Si</Button>
      </Flex>
    </Modal.Body>
  </Modal>
);

export default DrawCancel;
