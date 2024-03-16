import { Button, Flex, ScrollArea, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import DashboardLayout from '@/layouts/DashboardLayout';
import DrawItem from '@/components/DrawItem';
import DrawCreator from '@/components/DrawCreator';

const HomePage = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <DashboardLayout>
      <Flex justify="space-between" align="center" mb="sm">
        <Title order={2}>Tus sorteos </Title>
        <Button size="lg" onClick={open}>¡Crear sorteo!</Button>
      </Flex>
      <ScrollArea.Autosize mah={620} maw="1280" mx="auto" offsetScrollbars p="md" className="hello">
        <DrawItem />
        <DrawItem />
        <DrawItem />
        <DrawItem />
        <DrawItem />
        <DrawItem />
        <DrawItem />
        <DrawItem />
        <DrawItem />
      </ScrollArea.Autosize>
      <DrawCreator opened={opened} onClose={close} centered />
    </DashboardLayout>
  );
};

export default HomePage;
