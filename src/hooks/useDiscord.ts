import AdminService from '@/services/AdminService';

const useDiscord = () => {
  const authenticationWithDiscord = (id: string) => AdminService.discordLogin(id);

  return {
    authenticationWithDiscord,
  };
};

export default useDiscord;
