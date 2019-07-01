import { numericMenu, panel } from 'instantsearch.js/es/widgets';
import {
  getTime,
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
} from 'date-fns';
import { getCurrentDate } from '../utils';

const currentDate = getCurrentDate();

const datesList = panel({
  templates: {
    header: 'Date',
  },
})(numericMenu);

export const dates = datesList({
  container: '[data-widget="dates"]',
  attribute: 'date',
  items: [
    { label: 'All time' },
    {
      label: 'Today',
      start: getTime(startOfDay(currentDate)),
      end: getTime(endOfDay(currentDate)),
    },
    {
      label: 'This week',
      start: getTime(startOfWeek(currentDate)),
      end: getTime(endOfWeek(currentDate)),
    },
    {
      label: 'This month',
      start: getTime(startOfMonth(currentDate)),
      end: getTime(endOfMonth(currentDate)),
    },
    {
      label: 'This year',
      start: getTime(startOfYear(currentDate)),
      end: getTime(endOfYear(currentDate)),
    },
  ],
});
