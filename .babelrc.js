module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": process.env.MODULES || false
      }
    ],
    "@babel/preset-typescript"
  ],
  "plugins": [[
    "@babel/plugin-transform-runtime",
    { "useESModules": !process.env.MODULES }
  ]]
};
