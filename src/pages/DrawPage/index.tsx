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
  SimpleGrid,
  Text,
} from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';
import { IconPencil, IconChevronLeft } from '@tabler/icons-react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';

import Attendees from '@/components/Attendees';
import DrawMedia from '@/components/DrawMedia';

import DrawButtonImage from '@/assets/draw_button_image.png';

import './DrawPage.scss';
import DrawWinner from '@/components/DrawWinner';
import DrawCancel from '@/components/DrawCancel';
import useDrawAdministration from '@/hooks/useDrawAdministration';
import useRandomSelection from '@/hooks/useRandomSelection';

const DrawPage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [openedCancel, { open: openClosure, close: closeClosure }] = useDisclosure(false);

  const navigate = useNavigate();
  const { state } = useLocation();

  const { deleteDraw, getParticipants, currentDraw } = useDrawAdministration();
  const participants = (currentDraw ?? state)?.participants?.map(
    (p: any) => ({ name: p.name, image: p.avatar })
  );
  const { winners, generateWinners } = useRandomSelection();
  useEffect(() => {
    const listener = (() => {
      navigate('/home');
    }) as EventListener;
    window.addEventListener('CQ::GO::BACK', listener);
    return () => {
      window.removeEventListener('CQ::GO::BACK', listener);
    };
  }, []);

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

        <Title order={2}>{state.title}</Title>

        <ActionIcon variant="subtle">
          <IconPencil size={20} stroke={1.5} />
        </ActionIcon>
      </Flex>
      <Text>{state.description}</Text>
      <Divider my="md" color="dark" />

      <Grid>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Box>
            <Grid>
              <Grid.Col span={{ base: 12, md: 12 }}>
                <Select
                  disabled
                  leftSectionPointerEvents="none"
                  leftSection="#"
                  label="Número de ganadores"
                  placeholder="Ej: 1"
                  value={state?.totalWinners?.toString()}
                  data={['1', '2', '3', '4']}
                />
              </Grid.Col>
            </Grid>

            <SimpleGrid cols={2} mt={rem(24)} verticalSpacing={{ base: 'md', sm: 'xs' }}>
              {Array.from({ length: parseInt(state?.totalWinners, 10) }).map((_, index) => (
                <TextInput
                  disabled
                  label={`Premio ${index + 1}`}
                  placeholder="Ej: Subscripción Anual DevTalles"
                  value={state?.awards?.[index]}
                />
              ))}
            </SimpleGrid>
          </Box>
          <Space style={{ marginBottom: rem(24) }} />
          <Attendees
            users={participants}
            refresh={async () => {
              await getParticipants(state?.id);
            }}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Flex justify="space-between" direction="column" align="center">
            <DrawMedia drawItem={state} />
            <Flex mt={rem(40)} rowGap={rem(24)} direction="column" align="center">
              <Button
                className="cq-start-draw-button"
                onClick={() => {
                  generateWinners(participants, state?.totalWinners);
                  open();
                }}>
                <Image className="cq-start-draw-button__image" src={DrawButtonImage} />
                ¡SORTEAR!
              </Button>
              <Button
                className="cq-cancel-draw-button"
                variant="subtle"
                color="red"
                onClick={() => {
                  const event = new CustomEvent('CQ::SEND::ID', { detail: { id: state?.id } });
                  window.dispatchEvent(event);
                  openClosure();
                }}
              >
                Cancelar sorteo
              </Button>
            </Flex>
          </Flex>
        </Grid.Col>
      </Grid>
      <DrawWinner winners={winners} opened={opened} onClose={close} centered />
      <DrawCancel opened={openedCancel} onClose={closeClosure} deleteDraw={deleteDraw} centered />
    </DashboardLayout>
  );
};

export default DrawPage;
