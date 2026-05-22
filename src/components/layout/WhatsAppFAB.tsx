import { useState, useRef, useEffect, useCallback } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { openWhatsApp, buildInquiryMessage } from '../../lib/whatsapp';

export default function WhatsAppFAB() {
  const [pos, setPos] = useState({ x: window.innerWidth - 80, y: window.innerHeight - 80 });
  const [dragging, setDragging] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, px: 0, py: 0 });
  const dragDistance = useRef(0);
  const ref = useRef<HTMLButtonElement>(null);

  const snapToEdge = useCallback((x: number, y: number) => {
    const size = 56;
    const margin = 20;
    const midX = window.innerWidth / 2;
    const snappedX = x < midX ? margin : window.innerWidth - size - margin;
    const clampedY = Math.max(margin + 72, Math.min(window.innerHeight - size - margin, y));
    return { x: snappedX, y: clampedY };
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    dragStart.current = { x: e.clientX, y: e.clientY, px: pos.x, py: pos.y };
    dragDistance.current = 0;
    setDragging(true);
  }, [pos]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    dragDistance.current = Math.sqrt(dx * dx + dy * dy);
    setPos({ x: dragStart.current.px + dx, y: dragStart.current.py + dy });
  }, [dragging]);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    setDragging(false);
    const snapped = snapToEdge(pos.x, pos.y);
    setPos(snapped);
    if (dragDistance.current < 5) {
      // It's a click, not a drag
      openWhatsApp(buildInquiryMessage());
    }
    dragDistance.current = 0;
  }, [pos, snapToEdge]);

  useEffect(() => {
    const onResize = () => {
      setPos((p) => snapToEdge(p.x, p.y));
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [snapToEdge]);

  // Snap to default position on first load
  useEffect(() => {
    setPos(snapToEdge(window.innerWidth - 80, window.innerHeight - 80));
  }, [snapToEdge]);

  return (
    <div
      style={{ position: 'fixed', left: pos.x, top: pos.y, zIndex: 9999, userSelect: 'none' }}
    >
      {/* Tooltip */}
      {showTooltip && !dragging && (
        <div
          className="absolute right-[68px] top-1/2 -translate-y-1/2 bg-black text-white
                     font-body text-[12px] font-semibold tracking-wider uppercase
                     px-3 py-2 whitespace-nowrap pointer-events-none
                     animate-fade-in"
        >
          Chat with us
        </div>
      )}

      {/* FAB button */}
      <button
        ref={ref}
        aria-label="Chat with us on WhatsApp"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`
          fab-pulse relative w-14 h-14 text-white
          rounded-full flex items-center justify-center
          shadow-[0_8px_30px_rgba(37,211,102,0.4)]
          transition-transform duration-200
          ${dragging ? 'scale-110 cursor-grabbing' : 'hover:scale-105 cursor-grab'}
        `}
        style={{ touchAction: 'none', backgroundColor: '#25D366' }}

      >
        <FaWhatsapp className="w-7 h-7 text-white" size={28} />
      </button>
    </div>
  );
}
