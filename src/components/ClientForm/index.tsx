import { Button, Group, Text } from '@mantine/core';
import useDiscord from '@/hooks/useDiscord';
import { DrawItemValue } from '@/interfaces/common.interface';

interface ClientFormProps {
  drawItem: DrawItemValue;
  isEnrolled: boolean;
}

const ClientForm = ({ drawItem, isEnrolled }: ClientFormProps) => {
  const { authenticationWithDiscord } = useDiscord();

  return (
    <>
      <Text ta="center">
        {isEnrolled
          ? 'Lo sentimos, pero ya estas inscrito es este sorteo, te deseamos mucha suerte.'
          : 'Presiona el botón e Inicia sesión en Discord y estarás participando en el sorteo.'}
      </Text>
      <Group justify="center" mt="md">
        <Button
          disabled={isEnrolled}
          type="button"
          size="lg"
          onClick={async () => {
            const response: any = await authenticationWithDiscord(drawItem.id);
            window.location.href = response.discordUrl;
          }}
        >
          Participar!
        </Button>
      </Group>
    </>
  );
};

export default ClientForm;
