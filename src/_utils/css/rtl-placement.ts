import type { FollowerPlacement } from 'vueuc'

/**
 * Mirrors placement for RTL mode
 * - start <-> end
 * - left <-> right
 * - top/bottom remain unchanged
 */
export function mirrorPlacementForRTL(
  placement: FollowerPlacement
): FollowerPlacement {
  if (placement.includes('start')) {
    return placement.replace('start', 'end') as FollowerPlacement
  }
  if (placement.includes('end')) {
    return placement.replace('end', 'start') as FollowerPlacement
  }
  if (placement.includes('left')) {
    return placement.replace('left', 'right') as FollowerPlacement
  }
  if (placement.includes('right')) {
    return placement.replace('right', 'left') as FollowerPlacement
  }
  return placement
}
