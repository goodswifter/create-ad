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
    },
  },
})
