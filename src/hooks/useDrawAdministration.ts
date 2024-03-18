import { useCallback, useState } from 'react';
import { CreateDrawPayload, DrawItemValue } from '@/interfaces/common.interface';
import AdminService from '@/services/AdminService';
import { TOKEN_KEY } from '@/constants';

const useDrawAdministration = () => {
  const [currentDraw, setCurrentDraw] = useState<DrawItemValue | null>();
  const createDraw = useCallback(async (values: CreateDrawPayload) => {
    try {
      await AdminService.adminDrawCreate({
        ...values,
        state: true,
        totalWinners: +values.totalWinners,
      }, {
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
      const data = await AdminService.adminDrawFindOne<DrawItemValue>(drawId);
      setCurrentDraw(data);
    } catch (error) {
      setCurrentDraw(null);
    }
  }, []);

  return {
    currentDraw,
    createDraw,
    getDraw,
    updateDraw,
  };
};

export default useDrawAdministration;
