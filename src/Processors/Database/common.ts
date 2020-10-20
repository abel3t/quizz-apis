export function save<T>(model: any): Promise<T> {
  return new Promise((resolve, reject) => {
    model.save((error: Error, data: T) => {
      if (error) {
        reject(error);
      }
      resolve(data);
    });
  });
}