/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useState } from 'react';
import AdminService from '@/services/AdminService';
import { TOKEN_KEY } from '@/constants';

const useDraw = () => {
  const [isFetchingDraw, setIsFetchingDraw] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [drawList, setDrawList] = useState<any[]>([]);

  const listDraw = useCallback(async () => {
    try {
      const list = await AdminService.adminDrawFindAll({
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem(TOKEN_KEY)}`,
        },
      });
      setDrawList(list as any);
      setIsFetchingDraw(false);
    } catch (error: any) {
      setIsFetchingDraw(false);
      setHasError(true);
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
    deleteDraw,
  };
};

export default useDraw;
