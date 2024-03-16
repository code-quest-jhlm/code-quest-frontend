import cx from 'clsx';
import { useState } from 'react';
import {
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  rem,
} from '@mantine/core';
import {
  IconLogout,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './AppHeader.module.css';

const user = {
  name: 'Jane Spoonfighter',
  email: 'janspoon@fighter.dev',
  image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};

const AppHeader = () => {
  const [userMenuOpened, setUserMenuOpened] = useState(true);

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="lg">
        <Group justify="space-between">
          <MantineLogo size={28} />

          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: 'pop-top-right' }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
              >
                <Group gap={7}>
                  <div>
                  <Text fw={500} size="sm" lh={1} mr={3}>
                    {user.name}
                  </Text>
                    <small>Your Best UX</small>
                  </div>
                  <Avatar src={user.image} alt={user.name} radius="xl" size={54} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>

              <Menu.Label>Settings</Menu.Label>
              <Menu.Item
                leftSection={
                  <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                }
              >
                Cerrar sesión
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
    </div>
  );
};

export default AppHeader;