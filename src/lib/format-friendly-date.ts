/**
 * Converts a date string to a friendly description.
 * @param date - The date in string format (YYYY-MM-DD).
 * @returns The friendly description (e.g., "4 days ago", "1 year ago").
 */
export function formatFriendlyDate(date?: string): string {
  if (!date) return '';
  const dateObj = new Date(date);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - dateObj.getTime());

  const diffSeconds = Math.floor(diffTime / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffMonths / 12);

  if (diffYears > 1) {
    return `${diffYears} years ago`;
  } else if (diffYears === 1) {
    return `1 year ago`;
  } else if (diffMonths > 1) {
    return `${diffMonths} months ago`;
  } else if (diffMonths === 1) {
    return `1 month ago`;
  } else if (diffDays > 1) {
    return `${diffDays} days ago`;
  } else if (diffDays === 1) {
    return `1 day ago`;
  } else if (diffHours > 1) {
    return `${diffHours} hours ago`;
  } else if (diffHours === 1) {
    return `1 hour ago`;
  } else if (diffMinutes > 1) {
    return `${diffMinutes} minutes ago`;
  } else if (diffMinutes === 1) {
    return `1 minute ago`;
  } else {
    return `${diffSeconds} seconds ago`;
  }
}
