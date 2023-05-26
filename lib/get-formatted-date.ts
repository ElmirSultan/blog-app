export function getFormattedDate(dateString: string) {
  return Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
