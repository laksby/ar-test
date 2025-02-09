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

  if (args.stage === 'build-html' || args.stage === 'develop-html') {
    args.actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@zappar\/zappar-react-three-fiber/,
            use: args.loaders.null(),
          },
        ],
      },
    });
  }
};
