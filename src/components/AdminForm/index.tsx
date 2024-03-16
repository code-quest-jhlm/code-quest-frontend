import { Button, Group, PasswordInput, TextInput } from '@mantine/core';
import React from 'react';

const AdminForm = () => (
  <form>
    <TextInput label="Usuario" placeholder="Ingrese su usuario" />
    <PasswordInput label="Contraseña" placeholder="Ingrese su contraseña" />
    <Group justify="center" mt="md">
      <Button type="submit" size="lg">
        Log in
      </Button>
    </Group>
  </form>
);

export default AdminForm;
