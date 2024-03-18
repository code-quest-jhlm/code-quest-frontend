/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useState } from 'react';
import AdminService from '@/services/AdminService';
import { CreateDrawPayload } from '@/interfaces/common.interface';
import { useAppContext } from '@/provider/AppProvider';

const useDraw = () => {
  const { token } = useAppContext();
  const [isFetchingDraw, setIsFetchingDraw] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [drawList, setDrawList] = useState<any[]>([]);

  const listDraw = useCallback(async () => {
    try {
      const list = await AdminService.adminDrawFindAll({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDrawList(list as any);
      setIsFetchingDraw(false);
    } catch (error: any) {
      setIsFetchingDraw(false);
      setHasError(true);
    }
  }, []);

  const createDraw = useCallback(async (values: CreateDrawPayload) => {
    try {
      await AdminService.adminDrawCreate(values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // TODO: Mostrar notificacion

    } catch (error) {
      // TODO: Mostrar notificacion
    }
  }, []);

  const deleteDraw = useCallback(async (drawId: string) => {
    try {
      await AdminService.adminDrawRemove(drawId, {
        state: false,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDrawList([]);
      listDraw();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    listDraw();
  }, []);

  return {
    drawList,
    hasData: !!hasError && drawList.length,
    isFetchingDraw,
    createDraw,
    deleteDraw,
  };
};

export default useDraw;
