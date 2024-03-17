import { Button, Flex, Image, ScrollArea, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import DashboardLayout from '@/layouts/DashboardLayout';

import DrawItem from '@/components/DrawItem';
import DrawCreator from '@/components/DrawCreator';
import DrawCancel from '@/components/DrawCancel';

import useDraw from '@/hooks/useDraw';

import NotDraw from '@/assets/not_draw.png';

const HomePage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [openedCancel, { open: openClosure, close: closeClosure }] = useDisclosure(false);

  const { hasData, drawList } = useDraw();

  return (
    <DashboardLayout>
      <Flex justify="space-between" align="center" mb="sm">
        <Title order={2}>Tus sorteos </Title>
        <Button size="lg" onClick={open}>
          ¡Crear sorteo!
        </Button>
      </Flex>
      <ScrollArea.Autosize mah={620} maw="1280" mx="auto" offsetScrollbars p="md">
        {hasData ? (
          drawList.map((item) => <DrawItem item={item} openClosure={openClosure} />)
        ) : (
          <Image src={NotDraw} fit="contain" />
        )}
      </ScrollArea.Autosize>
      <DrawCreator opened={opened} onClose={close} centered />
      <DrawCancel opened={openedCancel} onClose={closeClosure} centered />
    </DashboardLayout>
  );
};

export default HomePage;
