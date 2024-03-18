import { Image } from '@mantine/core';
import { FC, memo } from 'react';
import Empty from '@/assets/404.png';
import Attendee from './Attendee';

interface RenderGridProps {
  users: any[]
}

const RenderGrid: FC<RenderGridProps> = ({
  users,
}) => {
  if (!users) {
    return (
      <Image
        src={Empty}
        style={{
          gridColumnStart: 2,
        }}
      />
    );
  }
  return users?.map((user) => (
    <Attendee image={user.image} userName={user.name} />
  ));
};

export default memo(RenderGrid);
