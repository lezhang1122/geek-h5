module.exports = {
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  globals: {
    $: false,
    jQuery: false,
    Highcharts: false,
    require: false,
  },
  rules: {
    "no-unused-vars": "warn",
    "no-use-before-define": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  }
};
