export function getItem<T>(key: string) {
  if (typeof localStorage !== 'undefined') {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
  }
  return null;
}

export function setItem<T>(key: string, value: T) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
}