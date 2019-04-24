/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const Path = require("path")

function shim(name) {
  return Path.resolve(__dirname, "config", "shims", name)
}

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /ScrollMagic/,
//             use: loaders.null(),
//           },
//         ],
//       },
//       resolve: {
//         alias: {
//           //   scrollmagic: shim("scrollmagic"),
//           //   ScrollMagic: shim("scrollmagic"),
//           ScrollMagic: Path.resolve(
//             "node_modules",
//             "scrollmagic/scrollmagic/uncompressed/ScrollMagic.js"
//           ),
//         },
//       },
//     })
//   }
// }
