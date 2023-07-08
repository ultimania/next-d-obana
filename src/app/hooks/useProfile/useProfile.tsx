import * as React from 'react';
import Profile from '../../components/Profile';

export const useProfile = (initial = false) => {
  const [isShowProfile, setIsSnowProfile] = React.useState(initial);

  const getProfile = isShowProfile ? '' : <Profile />;
  const toggle = React.useCallback(
    () => setIsSnowProfile((state) => !state),
    [],
  );

  return { isShowProfile, getProfile, toggle };
};
