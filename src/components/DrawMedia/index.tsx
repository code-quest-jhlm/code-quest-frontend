import { Button, CopyButton, Flex, Title } from '@mantine/core';
import { QRCode } from 'react-qrcode-logo';

import './DrawMedia.scss';
import { FC } from 'react';
import { DrawItemValue } from '@/interfaces/common.interface';

interface DrawMediaProps {
  drawItem:DrawItemValue
}

const DrawMedia: FC<DrawMediaProps> = ({
  drawItem,
}) => (
  <Flex direction="column" align="center" rowGap={16} mx="auto">
    <Title order={3}>QR PARA PARTICIPAR</Title>
    <QRCode value={`${document.location.href}/${drawItem.id}`} size={140} />
    <CopyButton value={`${document.location.href}/${drawItem.id}`}>
      {({ copied, copy }) => (
        <Button
          className="cq-copy-button"
          variant="subtle"
          onClick={copy}
          size="xs">
          {copied ? 'Enlace copiado' : 'Copiar enlace para inscribir'}
        </Button>
      )}
    </CopyButton>
  </Flex>
);

export default DrawMedia;
