import { Button, Group, Text } from '@mantine/core';
import useDiscord from '@/hooks/useDiscord';
import { DrawItemValue } from '@/interfaces/common.interface';

interface ClientFormProps {
  drawItem: DrawItemValue
}

const ClientForm = ({ drawItem }: ClientFormProps) => {
  const { authenticationWithDiscord } = useDiscord();

  return (
    <>
      <Text>Presiona el botón e Inicia sesión en Discord y estarás participando en el sorteo.</Text>
      <Group justify="center" mt="md">
        <Button type="button" size="lg" onClick={() => authenticationWithDiscord(drawItem.id)}>
          Participar!
        </Button>
      </Group>
    </>
  );
};

export default ClientForm;
