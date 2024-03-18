import { useCallback, useState } from 'react';
import { CreateDrawPayload, DrawItemValue } from '@/interfaces/common.interface';
import AdminService from '@/services/AdminService';
import { TOKEN_KEY } from '@/constants';

const useDrawAdministration = () => {
  const [isErrorCurrentDraw, setIsErrorCurrentDraw] = useState(false);
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
      //
    } catch (error) {
      //
    }
  }, []);

  const updateDraw = useCallback(async (drawId: string) => {
    try {
      await AdminService.adminDrawUpdateOne(drawId, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem(TOKEN_KEY)}`,
        },
      });
    } catch (error) {
      //
    }
  }, []);

  const getDraw = useCallback(async (drawId: string) => {
    try {
      const data = await AdminService.adminDrawFindOne<DrawItemValue>(drawId);
      setCurrentDraw(data);
    } catch (error) {
      setCurrentDraw(null);
      setIsErrorCurrentDraw(true);
    }
  }, []);

  const deleteDraw = useCallback(async (drawId: string) => {
    try {
      await AdminService.adminDrawRemove(drawId, {
        state: false,
      }, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem(TOKEN_KEY)}`,
        },
      });
    } catch (error) {
      //
    }
  }, []);

  const getParticipants = useCallback(async (drawId: string) => {
    try {
      const draw = await AdminService.adminParticipantsDrawFindOne<DrawItemValue>(drawId, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem(TOKEN_KEY)}`,
        },
      });
      setCurrentDraw(draw);
    } catch (error) {
      //
    }
  }, []);

  return {
    currentDraw,
    isErrorCurrentDraw,
    createDraw,
    getDraw,
    updateDraw,
    deleteDraw,
    getParticipants,
  };
};

export default useDrawAdministration;
