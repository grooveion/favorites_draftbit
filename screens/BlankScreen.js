import React from 'react';
import * as CustomCode from '../custom-files/CustomCode';
import * as Utils from '../utils';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { useWindowDimensions } from 'react-native';

const BlankScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Utils.CustomCodeErrorBoundary>
        <CustomCode.List />
      </Utils.CustomCodeErrorBoundary>
    </ScreenContainer>
  );
};

export default withTheme(BlankScreen);
