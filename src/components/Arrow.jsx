export default function Arrow({ direction = 'right' }) {
  return <span aria-hidden="true">{direction === 'right' ? '↗' : '↓'}</span>
}
