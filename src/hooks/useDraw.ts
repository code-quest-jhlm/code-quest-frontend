import { useCallback, useEffect, useState } from 'react';
import AdminService from '@/services/AdminService';

interface UseDrawParams {
  token: string
}

const useDraw = ({ token }: UseDrawParams) => {
  const [isFetchingDraw, setIsFetchingDraw] = useState(true);
  const [hasError, setHasError] = useState(true);
  const [drawList, setDrawList] = useState([]);

  const listDraw = () => useCallback(async () => {
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

  useEffect(() => {
    listDraw();
  }, []);

  return {
    drawList,
    hasData: !hasError && drawList.length,
    isFetchingDraw,
  };
};

export default useDraw;
