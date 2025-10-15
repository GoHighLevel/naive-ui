import { c, cB, cM } from '../../../_utils/cssr'

export default c([
  cB('progress', [
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
                `, [
                  cM('processing', [
                    c('&::after', `
                      content: "";
                      background-image: var(--n-line-bg-processing);
                      animation: progress-processing-animation-rtl 2s var(--n-bezier) infinite;
                      position: absolute;
                      top: 0;
                      bottom: 0;
                      right: 0;
                      left: 100%;
                    `)
                  ])
                ])
              ])
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
  ]),
  c('@keyframes progress-processing-animation-rtl', `
    0% {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      left: 100%;
      opacity: 1;
    }
    66% {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      left: 0;
      opacity: 0;
    }
    100% {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      left: 0;
      opacity: 0;
    }
  `)
])
