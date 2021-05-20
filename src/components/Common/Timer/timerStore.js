import { readable } from 'svelte/store';
import formatDistance from 'date-fns/formatDistanceStrict';

export default function start() {
  const KEY = 'startDate';
  const session = window.sessionStorage;
  const sessionStartDate = session.getItem(KEY);

  let startDate;
  if (sessionStartDate) {
    startDate = new Date(sessionStartDate);
  } else {
    startDate = new Date();
    session.setItem(KEY, startDate);
  }

  const elapsed = readable('', function start(set) {
    const interval = setInterval(() => {
      const formatted = formatDistance(new Date(), startDate, {
        unit: 'minute',
        roundingMethod: 'floor',
      })
        .replace(' minutes', 'm')
        .replace(' minute', 'm')
        .replace(' seconds', 's')
        .replace(' second', 's')
        .replace(' hours', 'h')
        .replace(' hour', 'h');

      set(formatted);
    }, 1000);

    return () => clearInterval(interval);
  });

  return elapsed;
}
