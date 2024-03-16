import { Button, Group, Text } from '@mantine/core';

const ClientForm = () => (
  <>
    <Text>Presiona el botón e Inicia sesión en Discord y estarás participando en el sorteo.</Text>
    <Group justify="center" mt="md">
      <Button type="submit" size="lg">
        Participar!
      </Button>
    </Group>
  </>
);

export default ClientForm;
