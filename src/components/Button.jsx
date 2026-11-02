import Arrow from './Arrow'

export default function Button({ href, variant = 'primary', arrow = 'right', download, children }) {
  const base = 'inline-flex min-h-[50px] items-center justify-between gap-8 border px-5 text-[13px] font-semibold transition-colors duration-200 motion-reduce:transition-none max-sm:w-full'
  const variants = {
    primary: 'border-accent-strong bg-accent-strong text-btn-fg hover:border-ink hover:bg-ink hover:text-paper',
    secondary: 'border-ink text-ink hover:bg-ink hover:text-paper',
    text: 'border-transparent px-0 text-ink hover:text-accent-strong',
  }
  return (
    <a className={`${base} ${variants[variant] || variants.primary}`} href={href} download={download}>
      <span>{children}</span>
      <Arrow direction={arrow} />
    </a>
  )
}
