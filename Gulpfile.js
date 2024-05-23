const { src, dest, parallel, watch } = require("gulp");
const { exec } = require("child_process");

const htmlGlob = "source/**/*.html";
function copyHtml() {
  return src(htmlGlob).pipe(dest("public"));
}

const staticGlob = "source/**/*.{ttf,woff}";
function copyStatic() {
  return src(staticGlob).pipe(dest("public"));
}

function tailwindCss() {
  return exec(
    "tailwindcss -i ./source/style.css -o ./public/style.css --minify"
  );
}

const build = parallel(copyHtml, copyStatic, tailwindCss);

function serve() {
  watch(htmlGlob, { ignoreInitial: false }, copyHtml);
  watch(staticGlob, { ignoreInitial: false }, copyStatic);
  watch(
    ["source/style.css", "tailwind.config.js", htmlGlob],
    { ignoreInitial: false },
    tailwindCss
  );
}

function clean() {
  return exec("rm -rf public");
}

exports.clean = clean;
exports.build = build;
if (process.env.NODE_ENV === "production") {
  exports.default = build;
} else {
  exports.default = serve;
}
