const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
   isProd: isProd,
   isDev: isDev,
   htmlMin: {
      collapseWhitespace: isProd
   },
   webpack: {
      mode: isProd ? "production" : "development"
   },
   imagemin: {
      verbose: true
   },
   fonter: {
      formats: ["ttf", "woff", "eot", "svg"]
   }
}