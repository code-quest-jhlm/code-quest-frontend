import { Avatar, Flex, Text, rem } from '@mantine/core';
import React, { FC } from 'react';

interface WinnerInfoProps {
  avatarUrl: string;
  username: string;
}

const WinnerInfo: FC<WinnerInfoProps> = ({ avatarUrl, username }) => (
  <Flex className="cq-winner-info" direction="column" align="center" rowGap={rem(16)}>
    <Avatar h={rem(80)} w={rem(80)} src={avatarUrl} />
    <Text size="xl" fw="bold">{username}</Text>
  </Flex>
);

export default WinnerInfo;
