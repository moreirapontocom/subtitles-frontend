export function trimToLength(string, length = 20) {
  return string.length > length
    ? string.substring(0, length - 3) + "..."
    : string;
}
