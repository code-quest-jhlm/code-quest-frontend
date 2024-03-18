import {
  ActionIcon,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Image,
  Select,
  TextInput,
  Title,
  rem,
  Space,
} from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';
import { IconPencil, IconChevronLeft } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

import DashboardLayout from '@/layouts/DashboardLayout';

import Attendees from '@/components/Attendees';
import DrawMedia from '@/components/DrawMedia';

import DrawButtonImage from '@/assets/draw_button_image.png';

import './DrawPage.scss';
import DrawWinner from '@/components/DrawWinner';
import DrawCancel from '@/components/DrawCancel';
import useDraw from '@/hooks/useDraw';
import { useAppContext } from '@/provider/AppProvider';

const DrawPage = () => {
  const { token } = useAppContext();
  const [opened, { open, close }] = useDisclosure(false);
  const [openedCancel, { open: openClosure, close: closeClosure }] = useDisclosure(false);
  const navigate = useNavigate();
  const { deleteDraw } = useDraw({ token });
  return (
    <DashboardLayout>
      <Flex justify="flex-start" align="center" mb="sm" columnGap={8}>
        <ActionIcon variant="subtle">
          <IconChevronLeft
            size={32}
            stroke={1.5}
            onClick={() => {
              navigate('/home');
            }}
          />
        </ActionIcon>

        <Title order={2}>Nombre del sorteo</Title>

        <ActionIcon variant="subtle">
          <IconPencil size={20} stroke={1.5} />
        </ActionIcon>
      </Flex>
      <Divider my="md" color="dark" />

      <Grid>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Box>
            <Grid>
              <Grid.Col span={{ base: 12, md: 12 }}>
                <Select
                  leftSectionPointerEvents="none"
                  leftSection="#"
                  label="Número de ganadores"
                  placeholder="Ej: 1"
                  data={['1', '2', '3', '4']}
                />
              </Grid.Col>
            </Grid>

            <Grid>
              <Grid.Col span={{ base: 12, md: 5 }}>
                <TextInput label="Premio 1" placeholder="Ej: Subscripción Anual DevTalles" />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 5 }}>
                <TextInput label="Premio 2" placeholder="Ej: Subscripción Trimestral DevTalles" />
              </Grid.Col>
            </Grid>
          </Box>
          <Space style={{ marginBottom: rem(24) }} />
          <Attendees users={[]} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Flex justify="space-between" direction="column" align="center">
            <DrawMedia />
            <Flex mt={rem(40)} rowGap={rem(24)} direction="column" align="center">
              <Button className="cq-start-draw-button" onClick={open}>
                <Image className="cq-start-draw-button__image" src={DrawButtonImage} />
                ¡SORTEAR!
              </Button>
              <Button className="cq-cancel-draw-button" variant="subtle" color="red" onClick={openClosure}>Cancelar sorteo</Button>
            </Flex>
          </Flex>
        </Grid.Col>
      </Grid>
      <DrawWinner opened={opened} onClose={close} centered />
      <DrawCancel opened={openedCancel} onClose={closeClosure} deleteDraw={deleteDraw} centered />
    </DashboardLayout>
  );
};

export default DrawPage;
