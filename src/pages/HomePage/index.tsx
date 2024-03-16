import { Button, Flex, ScrollArea, Title } from '@mantine/core';
import DashboardLayout from '@/layouts/DashboardLayout';
import DrawItem from '@/components/DrawItem';

const HomePage = () => (
  <DashboardLayout>
    <Flex justify="space-between" align="center" mb="sm">
      <Title order={2}>Tus sorteos </Title>
      <Button size="lg">¡Crear sorteo!</Button>
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
  </DashboardLayout>
);

export default HomePage;
