import { Avatar, Flex, Text, rem } from '@mantine/core';
import { FC, memo } from 'react';

interface AttendeeProps {
  image: string;
  userName: string;
}

const Attendee: FC<AttendeeProps> = ({
  image,
  userName,
}) => (
  <Flex gap={rem(8)} align="center">
    <Avatar src={image} alt={userName} radius="xl" size={20} />
    <Text size=".875rem">{userName}</Text>
  </Flex>
);

export default memo(Attendee);
