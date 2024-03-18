import { Button, Flex, Grid, Modal, ModalBaseProps, Select, TextInput } from '@mantine/core';
import { useForm, Controller } from 'react-hook-form';
import { FC } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { CreateDrawPayload } from '@/interfaces/common.interface';

interface DrawCreatorProps extends ModalBaseProps {
  centered?: boolean;
  onSubmitForm: (values: CreateDrawPayload) => void;
  navigate: NavigateFunction;
}

const DrawCreator: FC<DrawCreatorProps> = ({ onSubmitForm, navigate, ...props }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      title: '',
      description: '',
      winners: '1',
    },
  });

  return (
    <>
      <Modal {...props} title="Crear sorteo" size="xl">
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Flex direction="column" rowGap={12}>
            <Controller
              name="title"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Por favor ingrese un nombre para el sorteo',
                },
              }}
              render={({ field, fieldState }) => (
                <TextInput
                  {...field}
                  withAsterisk
                  label="Nombre"
                  placeholder="Ej: Sorteo 10M subscriptores"
                  error={fieldState.error?.message}
                  />
              )}
            />
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Descripción (Opcional)"
                  placeholder="Ej: Lorem ipsum"
              />
              )}
            />

          </Flex>
          <Grid mt={24}>
            <Grid.Col span={12}>
            <Controller
              name="winners"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  withAsterisk
                  leftSectionPointerEvents="none"
                  leftSection="#"
                  label="Número de ganadores"
                  placeholder="Ej: 1"
                  data={['1', '2', '3', '4']}
              />
              )}
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
            <Button variant="subtle" size="lg" color="white" onClick={props.onClose}>
              Cancelar
            </Button>
            <Button type="submit" variant="filled" size="lg">
              ¡Crear sorteo!
            </Button>
          </Flex>
        </form>
      </Modal>
    </>
  );
};

export default DrawCreator;
