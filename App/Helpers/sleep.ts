export default (delay: number = 1000): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, delay));
