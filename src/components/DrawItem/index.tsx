/* eslint-disable no-unsafe-optional-chaining */
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
  item,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Paper className="cq-draw-item" shadow="lg" p="md" radius="md">
        <Flex justify="space-between">
          <Box>
            <Flex direction="column">
              <Flex align="center" columnGap={8}>
                <Text fw={700}>{item.title} </Text>
                <Badge size="xs" circle color={item.state ? 'green' : 'red'} />
              </Flex>
              <Text size="sm">Fecha: {item.drawDate}</Text>
              <Space h="xs" />
            </Flex>
            <Avatar.Group>
              {item.participants?.slice(0, 3)?.map((participant: any) => (
                <Avatar
                  src={participant.avatar}
                  size="sm"
                />
              ))}
              {item.participants?.length > 3 && (<Avatar size="sm">+{item.participants?.length - 3}</Avatar>)}
            </Avatar.Group>
          </Box>

          <Group>
            {item.state && (
              <>
                <ActionIcon variant="subtle" color="blue">
                  <IconPencil
                    size={32}
                    stroke={1.5}
                    onClick={() => {
                      sessionStorage.setItem('DRAWID', item.id);
                      navigate('/draw');
                    }}
                  />
                </ActionIcon>
                <ActionIcon variant="subtle" color="red">
                  <IconTrash
                    size={32}
                    stroke={1.5}
                    onClick={() => {
                      openClosure();
                      const event = new CustomEvent('CQ::SEND::ID', { detail: { id: item.id } });
                      window.dispatchEvent(event);
                    }}
                  />
                </ActionIcon>
              </>
            )}
          </Group>
        </Flex>
      </Paper>
      <Space h="md" />
    </>
  );
};

export default DrawItem;
