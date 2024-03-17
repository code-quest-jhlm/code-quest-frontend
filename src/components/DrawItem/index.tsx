import { Flex, Text, Avatar, Paper, Space, Box, ActionIcon, Group, Badge } from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

import './DrawItem.scss';

interface DrawItemProps {
  item: any;
  openClosure: () => void
}

const DrawItem: FC<DrawItemProps> = ({
  openClosure,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Paper className="cq-draw-item" shadow="lg" p="md" radius="md">
        <Flex justify="space-between">
          <Box>
            <Flex direction="column">
              <Flex align="center" columnGap={8}>
                <Text fw={700}>Nombre del sorteo </Text>
                <Badge size="xs" circle color="green" />
              </Flex>
              <Text size="sm">Fecha: xx/xx/xxxx</Text>
              <Space h="xs" />
            </Flex>
            <Avatar.Group>
              <Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png"
                size="sm"
              />
              <Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"
                size="sm"
              />
              <Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
                size="sm"
              />
              <Avatar size="sm">+5</Avatar>
            </Avatar.Group>
          </Box>

          <Group>
            <ActionIcon variant="subtle" color="blue">
              <IconPencil
                size={32}
                stroke={1.5}
                onClick={() => {
                  navigate('/draw');
                }}
              />
            </ActionIcon>
            <ActionIcon variant="subtle" color="red">
              <IconTrash
                size={32}
                stroke={1.5}
                onClick={openClosure}
              />
            </ActionIcon>
          </Group>
        </Flex>
      </Paper>
      <Space h="md" />
    </>
  );
};

export default DrawItem;
