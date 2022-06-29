const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@assets': 'src/assets',
        '@components': 'src/components',
        '@store': 'src/store',
        '@styles': 'src/styles',
        '@tools': 'src/tools',
    })(config);

    return config;
}