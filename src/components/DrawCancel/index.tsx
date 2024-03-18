import { Modal, ModalBaseProps, Flex, Button, rem } from '@mantine/core';
import { FC, useEffect, useState } from 'react';
import './DrawCancel.scss';

interface DrawCancelProps extends ModalBaseProps {
  centered?: boolean;
  deleteDraw: Function
}

const DrawCancel: FC<DrawCancelProps> = (props) => {
  const [drawId, setDrawId] = useState('');
  useEffect(() => {
    const listener = ((event: CustomEvent<{ id: string }>) => {
      setDrawId(event.detail.id);
    }) as EventListener;
    window.addEventListener('CQ::SEND::ID', listener);
    return () => {
      window.removeEventListener('CQ::SEND::ID', listener);
    };
  }, []);

  return (
    <Modal
      className={`q-wrapper-modal-cancel ${props.className}`}
      {...props}
      title="¿Está seguro que desea cancelar el sorteo?"
      size="lg"
    >
      <Modal.Body p={rem(32)}>
        <Flex justify="flex-end" gap={rem(16)}>
          <Button className="cq-button" color="transparent" onClick={props.onClose}>No</Button>
          <Button
            className="cq-button"
            onClick={async () => {
              await props.deleteDraw(drawId);
              props.onClose();
            }}
          >
            Si
          </Button>
        </Flex>
      </Modal.Body>
    </Modal>
  );
};

export default DrawCancel;
