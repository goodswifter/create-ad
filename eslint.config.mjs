import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: {
    overrides: {
      'ts/ban-ts-comment': 'off',
      'ts/prefer-ts-expect-error': 'off',
    },
  },
  stylistic: {
    overrides: {
      // 允许单行 if 语句不换行
      'antfu/if-newline': 'off',
      // 禁用花括号换行规则
      'style/brace-style': 'off',
    },
  },
  rules: {
    // 禁用 prefer-node-protocol 规则
    'unicorn/prefer-node-protocol': 'off',
    'node/prefer-global/process': 'off',
    'antfu/top-level-function': 'off', // 禁用 top-level-function 规则
    'no-console': 'off',
  },
})
