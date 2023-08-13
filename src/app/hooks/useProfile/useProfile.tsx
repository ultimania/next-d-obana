import * as React from 'react';
import Profile from '../../layouts/Profile';

export const useProfile = (initial = false) => {
  const [isShowProfile, setIsSnowProfile] = React.useState(initial);

  const getProfile = <Profile />;
  const toggle = React.useCallback(() => {
    setIsSnowProfile((prevIsShow) => !prevIsShow);
  }, []);

  return { isShowProfile, getProfile, toggle };
};
