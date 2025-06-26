// 1. 大驼峰转短横线
export const camelCaseToKebabCase = (str: string): string => {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
} 