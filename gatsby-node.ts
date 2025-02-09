import type { GatsbyNode } from 'gatsby';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = args => {
  args.actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /zcv\.wasm$/,
          type: 'javascript/auto',
          loader: 'file-loader',
        },
      ],
    },
  });
};
