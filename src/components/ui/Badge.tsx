interface BadgeProps {
  children: string;
  variant?: 'black' | 'sold-out' | 'tag';
}

export default function Badge({ children, variant = 'tag' }: BadgeProps) {
  const styles: Record<string, string> = {
    black:    'bg-black text-white',
    'sold-out': 'bg-black text-white',
    tag:      'bg-light-gray text-charcoal',
  };

  return (
    <span
      className={`
        inline-block font-body text-[10px] font-semibold tracking-[0.15em] uppercase
        px-2 py-1
        ${styles[variant]}
      `}
    >
      {children}
    </span>
  );
}
