import { Box, BoxComponentProps, Image, ImageProps } from '@mantine/core';
import React, { FC } from 'react';

interface AssetRenderProps {
  boxConfig: BoxComponentProps;
  imageConfig: ImageProps;
}

const AssetRender: FC<AssetRenderProps> = ({ boxConfig, imageConfig }) => (
  <Box {...boxConfig} style={{ zIndex: 2 }}>
    <Image {...imageConfig} />
  </Box>
);

export default AssetRender;
