export function getFormattedDate(dateString: string) {
  return Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    new Date(dateString)
  );
}
