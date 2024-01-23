export const formatDate = (date: string) => {
  const [year, month, day] = date.split('-').map(Number);

  const dateObj = new Date(year, month - 1, day);

  return dateObj.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
};