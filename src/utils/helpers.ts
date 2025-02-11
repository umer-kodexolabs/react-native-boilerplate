const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }

  return text;
};

const capitalizeFirstChar = (text: string): string => {
  if (!text) return text;

  return text.replace(/^./, (char) => char.toUpperCase());
};

export { truncateText, capitalizeFirstChar };
