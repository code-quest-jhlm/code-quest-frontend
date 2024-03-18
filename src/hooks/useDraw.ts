/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useState } from 'react';
import AdminService from '@/services/AdminService';
import { CreateDrawPayload } from '@/interfaces/common.interface';
import { useAppContext } from '@/provider/AppProvider';

const useDraw = () => {
  const { token } = useAppContext();
  const [isFetchingDraw, setIsFetchingDraw] = useState(true);
  const [hasError, setHasError] = useState(true);
  const [drawList, setDrawList] = useState([]);

  const listDraw = useCallback(async () => {
    try {
      const list = await AdminService.adminDrawFindAll({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log({ list });
      setIsFetchingDraw(false);
    } catch (error) {
      setIsFetchingDraw(false);
      console.log(error);
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

  useEffect(() => {
    listDraw();
  }, []);

  return {
    drawList,
    hasData: !!hasError && drawList.length,
    isFetchingDraw,
    createDraw,
  };
};

export default useDraw;
