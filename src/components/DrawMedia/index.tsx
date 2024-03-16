import { Button, CopyButton, Flex, Title } from '@mantine/core';
import { QRCode } from 'react-qrcode-logo';

import './DrawMedia.scss';

const DrawMedia = () => (
  <Flex direction="column" align="center" rowGap={16} mx="auto">
    <Title order={3}>QR PARA PARTICIPAR</Title>
    <QRCode value="https://github.com/code-quest-jhlm/code-quest-frontend/pull/2" size={140} />
    <CopyButton value="https://mantine.dev">
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
