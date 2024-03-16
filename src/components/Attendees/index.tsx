import { ScrollArea } from '@mantine/core';
import React, { FC } from 'react';

interface AttendeesProps {
  users: any[]
}

const Attendees: FC<AttendeesProps> = () => (
    <ScrollArea.Autosize mah={275} maw="1280" offsetScrollbars p="md">

    </ScrollArea.Autosize>
  );

export default Attendees;
