import { defineBuildConfig } from 'unbuild'

/**
 * "build": "./node_modules/.bin/unbuild",
 * "dev": "./node_modules/.bin/unbuild --stub",
 */
export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  declaration: 'node16',
  clean: true,
  externals: [],
  rollup: {
    inlineDependencies: true,
    dts: {
      respectExternal: true,
    },
  },
})
