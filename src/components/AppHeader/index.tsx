import { Container, Avatar, UnstyledButton, Group, Text, Menu, rem, Image } from '@mantine/core';
import { IconLogout } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

import logo from '@/assets/detalles_light_logo.png';

import classes from './AppHeader.module.css';
import { useAppContext } from '@/provider/AppProvider';

const AppHeader = () => {
  const navigate = useNavigate();
  const { profileInformation } = useAppContext();

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="lg">
        <Group justify="space-between">
          <Image
            src={logo}
            className={classes.logo}
            h={30}
            onClick={() => {
              navigate('/home');
            }}
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
                      {profileInformation?.fullName}
                    </Text>
                    <small>#{profileInformation?.username?.toUpperCase()}</small>
                  </div>
                  <Avatar
                    src={
                      profileInformation?.username}
                    alt={profileInformation?.username}
                    radius="xl"
                    size={54}
                  />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Settings</Menu.Label>
              <Menu.Item
                leftSection={
                  <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                }
                onClick={() => {
                  sessionStorage.clear();
                  navigate('/');
                }}
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
