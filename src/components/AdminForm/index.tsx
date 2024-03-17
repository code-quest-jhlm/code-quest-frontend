import { Button, Group, PasswordInput, TextInput } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminForm = () => {
  const navigate = useNavigate();

  return (
  <form>
    <TextInput label="Usuario" placeholder="Ingrese su usuario" />
    <PasswordInput label="Contraseña" placeholder="Ingrese su contraseña" />
    <Group justify="center" mt="md">
      <Button type="submit" size="lg" onClick={() => navigate('/home')}>
        Log in
      </Button>
    </Group>
  </form>
);
};

export default AdminForm;
