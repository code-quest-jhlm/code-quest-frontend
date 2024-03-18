import { useCallback, useEffect, useState } from 'react';
import AdminService from '@/services/AdminService';
import { CreateDrawPayload } from '@/interfaces/common.interface';

interface UseDrawParams {
  token: string
}

const useDraw = ({ token }: UseDrawParams) => {
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
      const drawCreated = await AdminService.adminDrawCreate(values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log({ drawCreated });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    listDraw();
  }, []);

  return {
    drawList,
    hasData: !hasError && drawList.length,
    isFetchingDraw,
    createDraw,
  };
};

export default useDraw;
