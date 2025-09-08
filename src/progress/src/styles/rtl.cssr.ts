import { cB, cM } from '../../../_utils/cssr'

export default cB('progress', [
  cM('rtl', `
    direction: rtl;
  `, [
    cM('line', [
      cB('progress-content', [
        cB('progress-graph', [
          cB('progress-graph-line', [
            cB('progress-graph-line-rail', [
              cB('progress-graph-line-fill', `
                transform-origin: right center;
              `)
            ])
          ])
        ])
      ]),
      cB('progress-custom-content', {
        marginLeft: 0,
        marginRight: '14px'
      }),
      cB('progress-icon', `
        padding-left: 0;
        padding-right: 14px;
      `, [
        cM('as-text', `
          padding-left: 0;
          padding-right: 4px;
        `)
      ])
    ]),
    cM('circle, dashboard', [
      cB('progress-graph', [
        cB('progress-graph-circle', `
          transform: scaleX(-1);
        `)
      ]),
      cB('progress-text', `
        direction: ltr;
      `),
      cB('progress-custom-content', `
        direction: ltr;
      `),
      cB('progress-icon', `
        direction: ltr;
      `)
    ]),
    cM('multiple-circle', [
      cB('progress-graph', [
        cB('progress-graph-circle', `
          transform: scaleX(-1);
        `)
      ]),
      cB('progress-text', `
        direction: ltr;
      `),
      cB('progress-custom-content', `
        direction: ltr;
      `)
    ])
  ])
])
