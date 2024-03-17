import { Image } from '@mantine/core';
import { FC, memo } from 'react';
import Empty from '@/assets/404.png';
import Attendee from './Attendee';

const user = {
  name: 'Francisco Marin',
  email: 'janspoon@fighter.dev',
  image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
};

interface RenderGridProps {
  users: any[]
}

const RenderGrid: FC<RenderGridProps> = ({
  users,
}) => {
  if (users.length <= 0) {
    return (
      <Image
        src={Empty}
        style={{
          gridColumnStart: 2,
        }}
      />
    );
  }
  return (
    <>
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
      <Attendee image={user.image} userName={user.name} />
    </>
  );
};

export default memo(RenderGrid);
