interface SectionLabelProps {
  children: string;
  light?: boolean;
  className?: string;
}

export default function SectionLabel({ children, light = false, className = '' }: SectionLabelProps) {
  return (
    <p
      className={`
        font-body text-[11px] font-semibold tracking-[0.2em] uppercase mb-3
        ${light ? 'text-white/60' : 'text-mid-gray'}
        ${className}
      `}
    >
      {children}
    </p>
  );
}
