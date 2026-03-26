import { getFilteredNotifications } from './notificationsSelector';

const notifications = [
  { id: '1', type: 'urgent', value: 'Urgent notification 1', isRead: false },
  { id: '2', type: 'default', value: 'Default notification 1', isRead: false },
  { id: '3', type: 'urgent', value: 'Urgent notification 2', isRead: false },
  { id: '4', type: 'default', value: 'Default notification 2', isRead: false },
];

const makeState = (notifs = notifications) => ({
  notifications: { notifications: notifs, loading: false },
});

test('returns all notifications when filter is "all"', () => {
  const result = getFilteredNotifications(makeState(), 'all');
  expect(result).toHaveLength(4);
  expect(result).toEqual(notifications);
});

test('returns only urgent notifications when filter is "urgent"', () => {
  const result = getFilteredNotifications(makeState(), 'urgent');
  expect(result).toHaveLength(2);
  result.forEach((n) => expect(n.type).toBe('urgent'));
});

test('returns only default notifications when filter is "default"', () => {
  const result = getFilteredNotifications(makeState(), 'default');
  expect(result).toHaveLength(2);
  result.forEach((n) => expect(n.type).toBe('default'));
});

test('returns memoized result when inputs have not changed', () => {
  const state = makeState();
  const result1 = getFilteredNotifications(state, 'urgent');
  const result2 = getFilteredNotifications(state, 'urgent');
  expect(result1).toBe(result2);
});
