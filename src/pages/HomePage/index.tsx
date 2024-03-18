import { Button, Flex, Image, ScrollArea, Text, Title, rem } from '@mantine/core';
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
          <Flex direction="column" align="center" justify="center">
            <Image
              src={NotDraw}
              fit="cover"
              w={{ base: rem(300), md: rem(400) }}
              h={{ base: rem(300), md: rem(400) }}
            />
            <Text fw="bold" mr={{ base: rem(32), md: rem(48) }}>No hay sorteos activos</Text>
          </Flex>
        )}
      </ScrollArea.Autosize>
      <DrawCreator opened={opened} onClose={close} centered />
      <DrawCancel opened={openedCancel} onClose={closeClosure} centered />
    </DashboardLayout>
  );
};

export default HomePage;
