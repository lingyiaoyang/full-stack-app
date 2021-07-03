export function nonBrowser() {
  return typeof window === 'undefined';
}
