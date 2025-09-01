import { cB, cE, cM, cNotM } from '../../../_utils/cssr'

export default cB('switch', [
  cM('rtl', `
    direction: rtl;
  `, [
    cE('checked', `
      right: unset;
      left: 0;
      padding-right: unset;
      padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
    `),
    cE('unchecked', `
      left: unset;
      right: 0;
      justify-content: flex-start;
      padding-left: unset;
      padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
    `),
    cM('active', [
      cE('rail', [
        cE('button', `
          left: unset;
          right: calc(100% - var(--n-button-width) - var(--n-offset));
        `)
      ])
    ]),
    cNotM('disabled', [
      cNotM('icon', [
        cM('rubber-band', [
          cM('active', [
            cM('pressed', [
              cE('rail', [
                cE('button', `
                  left: unset;
                  right: calc(100% - var(--n-offset) - var(--n-button-width));
                `)
              ])
            ]),
            cE('rail', [
              cE('button', `
                left: unset;
                right: calc(100% - var(--n-offset) - var(--n-button-width));
              `)
            ])
          ])
        ])
      ])
    ]),
    cE('rail', [
      cE('button', `
        left: unset;
        right: var(--n-offset);
      `)
    ])
  ])
])
