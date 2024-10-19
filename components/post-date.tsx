import { parseISO, format } from "date-fns";
import { sv } from "date-fns/locale";

export default function PostDate({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "MMMM d, yyyy", { locale: sv })}</time>;
}
