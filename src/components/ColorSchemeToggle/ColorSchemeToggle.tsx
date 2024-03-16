import { Button, Group, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center" mt="xl">
      <Button size="lg" onClick={() => setColorScheme('light')}>Light</Button>
      <Button size="lg" onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button size="lg" onClick={() => setColorScheme('auto')}>Auto</Button>
    </Group>
  );
}
