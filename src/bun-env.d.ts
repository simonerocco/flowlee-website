declare module '*.svg' {
  const path: `${string}.svg`
  export = path
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.css' {}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export = classes
}
