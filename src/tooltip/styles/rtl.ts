import type { RtlItem } from '../../config-provider/src/internal-interface'
import { popoverRtl } from '../../popover/styles/rtl'
import rtlStyle from '../src/styles/rtl.cssr'

export const tooltipRtl: RtlItem = {
  name: 'Tooltip',
  style: rtlStyle,
  peers: [popoverRtl]
}
