import { useCallback } from 'react';
import { CreateDrawPayload } from '@/interfaces/common.interface';
import AdminService from '@/services/AdminService';
import { TOKEN_KEY } from '@/constants';

const useDrawAdministration = () => {
  const createDraw = useCallback(async (values: CreateDrawPayload) => {
    try {
      await AdminService.adminDrawCreate(values, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem(TOKEN_KEY)}`,
        },
      });
      // TODO: Mostrar notificacion
    } catch (error) {
      // TODO: Mostrar notificacion
    }
  }, []);

  const updateDraw = useCallback(async (drawId: string) => {
    try {
      await AdminService.adminDrawUpdateOne(drawId, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem(TOKEN_KEY)}`,
        },
      });
      // TODO: Mostrar notificacion
    } catch (error) {
      // TODO: Mostrar notificacion
    }
  }, []);

  const getDraw = useCallback(async (drawId: string) => {
    try {
      await AdminService.adminDrawFindOne(drawId, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem(TOKEN_KEY)}`,
        },
      });
      // TODO: Mostrar notificacion
    } catch (error) {
      // TODO: Mostrar notificacion
    }
  }, []);

  return {
    createDraw,
    getDraw,
    updateDraw,
  };
};

export default useDrawAdministration;
