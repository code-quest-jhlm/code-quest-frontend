import { useState } from 'react';

interface UseDrawParams {}

const useDraw = (params?: UseDrawParams) => {
  const [hasError, setHasError] = useState(true);
  const [drawList, setDrawList] = useState([]);

  return {
    params,
    drawList,
    hasData: !hasError && drawList.length,
  };
};

export default useDraw;
