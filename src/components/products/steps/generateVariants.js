export function generateVariants(input) {
  const keys = Object.keys(input);
  if (keys.length === 0) return [];

  const arrays = keys.map((key) => input[key]);

  function cartesian(arr) {
    return arr.reduce(
      (acc, val) =>
        acc.flatMap((x) => val.map((y) => (Array.isArray(x) ? [...x, y] : [x, y]))),
      [[]]
    );
  }

  const combinations = cartesian(arrays);
  return combinations.map((combo) => combo.join(" - "));
}
