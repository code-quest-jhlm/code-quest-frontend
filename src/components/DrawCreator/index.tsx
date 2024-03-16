import {
  Button,
  Flex,
  Grid,
  Modal,
  ModalBaseProps,
  Select,
  TextInput,
  Title,
} from '@mantine/core';
import { FC } from 'react';

interface DrawCreatorProps extends ModalBaseProps {
  centered?: boolean;
}

const DrawCreator: FC<DrawCreatorProps> = (props) => (
  <>
    <Modal {...props} title={<Title order={3}>Crear sorteo</Title>} size="xl">
      <Flex direction="column" rowGap={12}>
        <TextInput label="Nombre" placeholder="Ej: Sorteo 10M subscriptores" />
        <TextInput label="Descripción (Opcional)" placeholder="Ej: Lorem ipsum" />
      </Flex>
      <Grid mt={24}>
        <Grid.Col span={6}>
          <Select
            leftSectionPointerEvents="none"
            leftSection="#"
            w={240}
            label="Número de ganadores"
            placeholder="Ej: 1"
            data={['1', '2', '3', '4']}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            label="Máx. participantes"
            placeholder="Ej: 1200"
            leftSectionPointerEvents="none"
            leftSection="#"
          />
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={6}>
          <TextInput label="Premio 1" placeholder="Ej: Subscripción Anual DevTalles" />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput label="Premio 2" placeholder="Ej: Subscripción Trimestral DevTalles" />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput label="Premio 3" placeholder="Ej: Subscripción Semestral DevTalles" />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput label="Premio 4" placeholder="Ej: Teclado Redragon" />
        </Grid.Col>
      </Grid>

      <Flex mt={32} justify="flex-end" columnGap={32}>
        <Button variant="subtle" size="lg" color="white">
          Cancelar
        </Button>
        <Button variant="filled" size="lg">
          ¡Crear sorteo!
        </Button>
      </Flex>
    </Modal>
  </>
);

export default DrawCreator;
