const variants = {
  mark: {
    src: '/logo-mark.png',
    className: 'h-9 w-auto object-contain sm:h-10',
    width: 1827,
    height: 861,
  },
  hero: {
    src: '/logo.png',
    className: 'mx-auto w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl h-auto',
    width: 1536,
    height: 1024,
  },
}

export default function SiteLogo({ variant = 'mark', className = '' }) {
  const logo = variants[variant]

  return (
    <img
      src={logo.src}
      alt=""
      aria-hidden="true"
      className={`${logo.className} ${className}`.trim()}
      width={logo.width}
      height={logo.height}
      decoding="async"
    />
  )
}
