export function minDelay<T>(promise: Promise<T>, delay: number): Promise<T> {
  return Promise.all([
    promise,
    new Promise((resolve) => setTimeout(resolve, delay)),
  ]).then(([result]) => result);
}
