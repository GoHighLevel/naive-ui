import { c, cB, cE, cM } from '../../../_utils/cssr'

export default cB('upload', [
  cM('rtl', `
    direction: rtl;
  `, [
    cB('upload-dragger', `
      text-align: center;
    `),
    cB('upload-file-list', [
      cB('upload-file', `
        padding: 0px 6px 0 12px;
      `, [
        cB('upload-file-info', [
          cE('thumbnail', [
            cB('base-icon', `
              margin-left: 2px;
              margin-right: 0;
            `)
          ]),
          cE('action', `
            left: 0;
            right: unset;
          `, [
            cB('button', [
              c('&:not(:last-child)', {
                marginLeft: '4px',
                marginRight: '0'
              })
            ]),
            cM('image-type', `
              left: 0;
              right: unset;
            `)
          ])
        ])
      ])
    ])
  ])
])
