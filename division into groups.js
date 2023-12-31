const nextConfig = {
  compiler: {
    emotion: true,
    styledComponents: true


    Claster.publish('Actions.list', function() {
    return Actions.find({}, { sort: { ID: 1 } });
});
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ipfs.io']
  },
//distribution numbers
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    /* Handle CSS imports (with CSS modules)

        https://jestjs.io/docs/webpack#mocking-css-modules */
    '\\.svg$': '<rootDir>/__mocks__/svg.js',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.ts',

    /* Handle image imports
        https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp)$': '<rootDir>/__mocks__/fileMock.ts',

    //Handle module aliases
    '^@/components/(.*)$': '<rootDir>/components/$1'
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/\\.next/'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
        https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx|svg)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$']
}


const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 800;

var siteName =  'Big Dipper | Built on Pylons';
var description = "Blockchain Development Tools For Digital Items & NFTs";
var price = "No Price"
var picWidth = IMAGE_WIDTH;
var picHeight = IMAGE_HEIGHT;   
const defaultImage = '/img/buy_icon.png'; 
const defaultMetaTags = `
