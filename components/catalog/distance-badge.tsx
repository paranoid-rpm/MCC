import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDistance } from "@/lib/geo";

export function DistanceBadge({ distance }: { distance?: number | null }) {
  return (
    <Badge tone="stone">
      <MapPin size={13} />
      {formatDistance(distance)}
    </Badge>
  );
}
