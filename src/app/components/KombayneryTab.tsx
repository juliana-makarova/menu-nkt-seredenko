import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

// Компонент вкладки "Комбайнеры и компоненты"
export function KombayneryTab({ scrollOffset, setScrollOffset }: { scrollOffset: number; setScrollOffset: (value: number) => void }) {

  return (
    <div className="absolute h-[971px] left-[246px] overflow-clip top-[146px] w-[1277px]">
      {/* Rectangle 1 - фон */}
      <div className="absolute bg-[#f5faff] h-[969.282px] left-0 top-0 w-[1278.53px]" />
      
      {/* Vse producty_1 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[293.68px] top-[44px] w-[289px]"
      >
        <KombayneryColumn1 />
      </motion.div>
      
      {/* Vse producty_2 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[622.6px] top-[44px] w-[289px]"
      >
        <KombayneryColumn2 />
      </motion.div>
      
      {/* Vse producty_3 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[951.52px] top-[44px] w-[289px]"
      >
        <KombayneryColumn3 />
      </motion.div>
    </div>
  );
}

// Колонка 1 комбайнеров
function KombayneryColumn1() {
  return (
    <>
      <Column title="Компактные комбайнеры" items={[]} />
      <Column title="Комбайнеры на объемных резонаторах" items={[]} />
    </>
  );
}

// Колонка 2 комбайнеров
function KombayneryColumn2() {
  return (
    <>
      <Column title="Комбайнерные системы" items={[]} />
      <Column title="Компоненты комбайнеров" items={[]} />
    </>
  );
}

// Колонка 3 комбайнеров
function KombayneryColumn3() {
  return (
    <>
      <Column title="Распределительные панели" items={[]} />
    </>
  );
}

// Универсальная колонка
function Column({ title, items }: { title: string; items: string[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredTitle, setHoveredTitle] = useState(false);

  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[12px] pt-[6px] relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.15)] shrink-0 w-full">
      {/* Заголовок с ховером */}
      <div 
        className="relative shrink-0 w-full cursor-pointer"
        onMouseEnter={() => setHoveredTitle(true)}
        onMouseLeave={() => setHoveredTitle(false)}
      >
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pb-[6px] pt-[12px] px-[20px] relative w-full">
            <p 
              className="flex-[1_0_0] font-['Roboto_Condensed',sans-serif] font-medium leading-[normal] min-h-px min-w-px relative text-[16px]"
              style={{ color: hoveredTitle ? '#3D6BD0' : 'black' }}
            >
              {title}
            </p>
          </div>
        </div>
      </div>
      
      {/* Элементы */}
      {items.map((item, index) => (
        <div 
          key={index}
          className="relative shrink-0 w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center pb-[6px] pt-[6px] px-[20px] relative w-full">
              <p 
                className="flex-[1_0_0] font-['Roboto_Condensed',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[16px]"
                style={{ color: hoveredIndex === index ? '#3D6BD0' : 'black' }}
              >
                {item}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
