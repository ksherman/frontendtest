export function displayDate(value) {
  if (value) {
    const options = {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    const incomingDate = new Date(value);
    return incomingDate.toLocaleDateString('en-US', options);
  }
  return 0;
}
