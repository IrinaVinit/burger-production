export default {

    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    testEnvironment: 'jsdom',
    // An array of directory names to be searched
    // recursively up from the requiring module's location
    moduleDirectories: [
        'node_modules',
    ],
    modulePaths: [
        '<rootDir>src',
    ],
    // An array of file extensions your modules use
    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    // The root directory that Jest should scan for tests and modules within
    rootDir: '../../',
    // The glob patterns Jest uses to detect test files
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
};
