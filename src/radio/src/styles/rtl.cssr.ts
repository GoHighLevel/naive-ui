import { c, cB, cE, cM } from '../../../_utils/cssr'

export default c([
  cB('radio', [
    cM('rtl', `
      direction: rtl;
    `, [
      cE('dot', `
        left: unset;
        right: 0;
      `),
      cE('label', `
        padding-left: 0;
        padding-right: 8px;
      `)
    ])
  ]),
  cB('radio-group', [
    cM('rtl', [
      cB('radio-button', [
        // Fix first-child to have right border radius when RTL flips the order
        c('&:first-child', `
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-top-right-radius: var(--n-button-border-radius);
          border-bottom-right-radius: var(--n-button-border-radius);
          border-left: none;
          border-right: 1px solid var(--n-button-border-color);
        `, [
          cE('state-border', `
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-top-right-radius: var(--n-button-border-radius);
            border-bottom-right-radius: var(--n-button-border-radius);
          `)
        ]),
        // Fix last-child to have left border radius when RTL flips the order
        c('&:last-child', `
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border-top-left-radius: var(--n-button-border-radius);
          border-bottom-left-radius: var(--n-button-border-radius);
          border-right: none;
          border-left: 1px solid var(--n-button-border-color);
        `, [
          cE('state-border', `
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            border-top-left-radius: var(--n-button-border-radius);
            border-bottom-left-radius: var(--n-button-border-radius);
          `),
          cM('checked', `
            border-left-color: var(--n-button-border-color-active);
          `)
        ]),
        // Fix first-child checked state border color in RTL
        c('&:first-child', [
          cM('checked', `
            border-right-color: var(--n-button-border-color-active);
          `)
        ])
      ])
    ])
  ])
])

// Note: RadioButton and RadioGroup share the same RTL config name 'Radio'
// The button group border-radius must be flipped because direction:rtl
// automatically reverses the visual order of first-child and last-child
