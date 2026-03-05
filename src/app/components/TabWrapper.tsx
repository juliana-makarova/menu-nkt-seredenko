import React from "react";
import { motion } from "motion/react";

// Универсальная обертка для вкладок с прокруткой колесиком
export function TabWrapper({ 
  scrollOffset, 
  setScrollOffset, 
  children,
  showScrollbar = false
}: { 
  scrollOffset: number; 
  setScrollOffset: (value: number) => void;
  children: React.ReactNode;
  showScrollbar?: boolean;
}) {
  // Прокрутка колесиком мыши
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const scrollSpeed = 1.5;
    const deltaScroll = e.deltaY * scrollSpeed;
    const newContentScroll = Math.max(-600, Math.min(0, scrollOffset - deltaScroll));
    setScrollOffset(newContentScroll);
  };

  return (
    <div 
      className="absolute h-[840px] left-[246px] overflow-clip top-[146px] w-[1277px]"
      onWheel={handleWheel}
    >
      {/* Rectangle 1 - фон */}
      <div className="absolute bg-[#f5faff] h-[969.282px] left-0 top-0 w-[1276.53px]" />
      
      {children}
      
      {/* Scroll_bar_right - показывается только если showScrollbar = true (для VseTab) */}
      {showScrollbar && (
        <motion.div
          animate={{ top: 5.48 + ((scrollOffset / -600) * 400) }}
          className="absolute bg-[#b3cae8] h-[582.432px] left-[1271.91px] rounded-[10px] w-[4.1685px]"
          style={{ userSelect: 'none', pointerEvents: 'none' }}
        />
      )}
    </div>
  );
}
