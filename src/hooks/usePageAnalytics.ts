import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { firePageView } from '../utils/analytics';

export function usePageAnalytics(): void {
  const location = useLocation();

  useEffect(() => {
    firePageView();
  }, [location.pathname]);
}
