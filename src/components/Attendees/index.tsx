import {
  ScrollArea,
  Paper,
  Title,
  Flex,
  Space,
  SimpleGrid,
  rem,
  ActionIcon,
} from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';
import { FC } from 'react';
import './Attendees.scss';
import RenderGrid from './partials/RenderGrid';

interface AttendeesProps {
  users: any[]
}

const Attendees: FC<AttendeesProps> = ({
  users,
}) => (
  <Paper>
    <Flex gap={rem(10)}>
      <Title
        order={1}
        size={rem(18)}
      >
        Participantes activos: {users.length}
      </Title>
      <ActionIcon variant="subtle" className="cq-action-button">
        <IconRefresh
          cursor="pointer"
          color="#A8A5FB"
          onClick={() => {}}
        />
      </ActionIcon>
    </Flex>
    <Space style={{ marginBottom: rem(16) }} />
    <ScrollArea.Autosize
      mah={275}
      maw="1280"
      offsetScrollbars
      pl={rem(24)}
      pb={rem(21)}
      pt={rem(16)}
      pr={rem(16)}
      className="cq-attendees"
    >
      <SimpleGrid cols={{ base: 1, xs: 3 }}>
        <RenderGrid users={users} />
      </SimpleGrid>
    </ScrollArea.Autosize>
  </Paper>
);

export default Attendees;
