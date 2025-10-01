// Centralized formatting utilities to avoid duplication across components

export const formatRating = (rating: number | null | undefined): string => {
  if (!rating) return "No ratings yet";
  return rating.toFixed(1);
};

export const formatDuration = (days: number): string => {
  return `${days} ${days === 1 ? 'Day' : 'Days'}`;
};

export const formatPrice = (price: number | null | undefined): string => {
  if (!price) return "Contact for pricing";
  return `$${price.toLocaleString()}`;
};

export const formatDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const formatCapacity = (capacity: string | number): string => {
  if (typeof capacity === 'number') {
    return `${capacity} people`;
  }
  return capacity;
};