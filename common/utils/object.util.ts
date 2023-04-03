export function pick<T extends object, U extends keyof T>(
  object: T,
  ...keys: U[]
): Pick<T, U> {
  const pickedObject = keys.reduce<Pick<T, U>>(
    (acc, curr) => ({ ...acc, [curr]: object[curr] }),
    {} as Pick<T, U>
  );

  return pickedObject;
}
