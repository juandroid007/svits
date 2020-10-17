// import path from 'path'
// import svite from 'svite'

// const sviteConfig = {
//   hot: true,
//   useTransformCache: false, // default is true, but HMR is broken then
// }

let config = {
  // alias: {
  //   '/src/': path.resolve(__dirname, './src'),
  // },
  // plugins: [
  //   svite(sviteConfig),
  // ],
  optimizeDeps: {
    exclude: ['@roxi/routify'],
  },
}

export default config
