/* eslint-disable no-plusplus */
import {
  Button,
  Flex,
  Grid,
  Modal,
  ModalBaseProps,
  Select,
  TextInput,
  SimpleGrid,
  rem,
} from '@mantine/core';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { FC } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { CreateDrawPayload } from '@/interfaces/common.interface';

interface DrawCreatorProps extends ModalBaseProps {
  centered?: boolean;
  onSubmitForm: (values: CreateDrawPayload) => void;
  navigate: NavigateFunction;
}

const DrawCreator: FC<DrawCreatorProps> = ({ onSubmitForm, navigate, ...props }) => {
  const { handleSubmit, control, reset } = useForm<any>({
    defaultValues: {
      title: '',
      description: '',
      totalWinners: '',
      awards: [],
    },
  });

  const totalWinners = useWatch({
    control,
    name: 'totalWinners',
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
                name="totalWinners"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'Debe definir al menos un ganador',
                  },
                }}
                render={({ field, fieldState }) => (
                  <Select
                    {...field}
                    withAsterisk
                    leftSectionPointerEvents="none"
                    leftSection="#"
                    label="Número de ganadores"
                    placeholder="Ej: 1"
                    error={fieldState.error?.message}
                    data={['1', '2', '3', '4']}
                  />
                )}
              />
            </Grid.Col>
          </Grid>

          <SimpleGrid mt={rem(24)} verticalSpacing={{ base: 'md', sm: 'md' }}>
            {Array.from({ length: parseInt(totalWinners, 10) }).map((_, index) => (
              <Controller
                name={`awards[${index}]`}
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: `Por favor detalle el premio ${index + 1} el sorteo`,
                  },
                }}
                render={({ field, fieldState }) => (
                  <div key={`Premio ${index}`}>
                    <TextInput
                      {...field}
                      label={`Premio ${index + 1}`}
                      placeholder="Ej: Subscripción Anual DevTalles"
                      error={fieldState.error?.message}
                    />
                  </div>
                )}
              />
            ))}
          </SimpleGrid>

          <Flex mt={32} justify="flex-end" columnGap={32}>
            <Button
              variant="subtle"
              size="lg"
              color="white"
              onClick={() => {
                reset();
                props.onClose();
              }}
            >
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
