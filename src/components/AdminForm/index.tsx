import { Button, Group, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';

import { useAppContext } from '@/provider/AppProvider';
import useAuthentication from '@/hooks/useAuthentication';

import { extractFirstErrorForEachField } from '@/helpers';

const AdminForm = () => {
  const navigate = useNavigate();
  const { setToken, setProfileInformation } = useAppContext();

  const { login, errorFields, setErrorFields } = useAuthentication({
    navigate,
    setToken,
    setProfileInformation,
  });

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    onValuesChange(values) {
      if (values.username.length || values.password.length) {
        setErrorFields([]);
      }
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => login(values))}>
      <TextInput
        label="Usuario"
        placeholder="Ingrese su usuario"
        {...form.getInputProps('username')}
        error={extractFirstErrorForEachField(errorFields)?.username || ''}
      />
      <PasswordInput
        label="Contraseña"
        placeholder="Ingrese su contraseña"
        {...form.getInputProps('password')}
        error={extractFirstErrorForEachField(errorFields)?.password || ''}
      />
      <Group justify="center" mt="md">
        <Button type="submit" size="lg">
          Log in
        </Button>
      </Group>
    </form>
  );
};

export default AdminForm;
