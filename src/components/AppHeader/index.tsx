import { Container, Avatar, UnstyledButton, Group, Text, Menu, rem, Image } from '@mantine/core';
import { IconLogout } from '@tabler/icons-react';

import logo from '@/assets/detalles_light_logo.png';

import classes from './AppHeader.module.css';

const user = {
  name: 'Fernando Herrera',
  email: 'janspoon@fighter.dev',
  image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
};

const AppHeader = () => (
  <div className={classes.header}>
    <Container className={classes.mainSection} size="lg">
      <Group justify="space-between">
        <Image
          src={logo}
          h={30}
        />

        <Menu
          width={260}
          position="bottom-end"
          transitionProps={{ transition: 'pop-top-right' }}
          withinPortal
        >
          <Menu.Target>
            <UnstyledButton>
              <Group gap={7}>
                <div>
                  <Text fw={500} size="sm" lh={1} mr={3}>
                    {user.name}
                  </Text>
                  <small>#Klerith</small>
                </div>
                <Avatar src={user.image} alt={user.name} radius="xl" size={54} />
              </Group>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Settings</Menu.Label>
            <Menu.Item
              leftSection={<IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            >
              Cerrar sesión
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Container>
  </div>
);
export default AppHeader;
