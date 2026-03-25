import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to top on forward navigation only.
 * Preserves scroll position when the user hits the browser back button.
 *
 * Detection: react-router-dom v6 sets window.history.state.key on every push/replace.
 * On a popstate (back/forward), the browser restores the previous state including
 * the scroll position — so we only need to scroll to top when navigating *to* a new
 * entry (action === 'PUSH' or 'REPLACE'), not on 'POP'.
 */
export function useScrollRestoration(): void {
  const location = useLocation();

  useEffect(() => {
    // location.state may carry a custom flag; we also check the navigation type
    // via the Navigation API when available, falling back to history.state check.
    const isPopNavigation =
      (window.history.state as { idx?: number } | null)?.idx !== undefined &&
      (window.performance?.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined)
        ?.type === 'back_forward';

    if (!isPopNavigation) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
}
