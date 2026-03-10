import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import svgPaths from "../imports/svg-6zd0nrlowv";
import imgScreenshot20260304At1757451 from "../assets/0994413d3af1202eddbaef7bb68d7e8d993e516b.png";
import imgScreenshot20260303At1419581 from "../assets/6cb3fe99ec2911ae439a5dd1f3eb2032f795ead3.png";
import { DeliteliOtvetviteliTab } from "./components/DeliteliOtvetviteliTab";
import { PerekhodyTab } from "./components/PerekhodyTab";
import { InstrumentyTab } from "./components/InstrumentyTab";
import { KombayneryTab } from "./components/KombayneryTab";
import { GrozozashchitaTab } from "./components/GrozozashchitaTab";
import { MobileMenu } from "./components/MobileMenu";

export default function App() {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isPrimenenieMenuOpen, setIsPrimenenieMenuOpen] = useState(false);
  const [isProizvoditeliMenuOpen, setIsProizvoditeliMenuOpen] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [menuScrollOffset, setMenuScrollOffset] = useState(0); // Для Product_Menu_open
  const [activeMenuItem, setActiveMenuItem] = useState(0); // 0 = "Все продукты", 1 = "Соединители", и т.д.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Сброс скролла при изменении активного пункта меню
  const handleActiveMenuItemChange = (index: number) => {
    setActiveMenuItem(index);
    setScrollOffset(0); // Сбрасываем скролл при переключении вкладок
  };

  return (
    <div className="w-full min-h-screen bg-white overflow-auto">
      {/* Мобильное меню */}
      <MobileMenu isOpen={isMobileMenuOpen} onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      
      {/* Desktop layout with fixed canvas size, no auto scaling */}
      <div className="hidden md:block w-[1728px] h-[1117px] min-w-[1728px] mx-auto">
        <CatalogueContent 
          isProductMenuOpen={isProductMenuOpen}
          setIsProductMenuOpen={setIsProductMenuOpen}
          isPrimenenieMenuOpen={isPrimenenieMenuOpen}
          setIsPrimenenieMenuOpen={setIsPrimenenieMenuOpen}
          isProizvoditeliMenuOpen={isProizvoditeliMenuOpen}
          setIsProizvoditeliMenuOpen={setIsProizvoditeliMenuOpen}
          scrollOffset={scrollOffset}
          setScrollOffset={setScrollOffset}
          menuScrollOffset={menuScrollOffset}
          setMenuScrollOffset={setMenuScrollOffset}
          activeMenuItem={activeMenuItem}
          setActiveMenuItem={handleActiveMenuItemChange}
        />
      </div>
    </div>
  );
}

function CatalogueContent({ 
  isProductMenuOpen, 
  setIsProductMenuOpen, 
  isPrimenenieMenuOpen,
  setIsPrimenenieMenuOpen,
  isProizvoditeliMenuOpen,
  setIsProizvoditeliMenuOpen,
  scrollOffset, 
  setScrollOffset,
  menuScrollOffset,
  setMenuScrollOffset,
  activeMenuItem,
  setActiveMenuItem
}: { 
  isProductMenuOpen: boolean; 
  setIsProductMenuOpen: (value: boolean) => void;
  isPrimenenieMenuOpen: boolean;
  setIsPrimenenieMenuOpen: (value: boolean) => void;
  isProizvoditeliMenuOpen: boolean;
  setIsProizvoditeliMenuOpen: (value: boolean) => void;
  scrollOffset: number;
  setScrollOffset: (value: number) => void;
  menuScrollOffset: number;
  setMenuScrollOffset: (value: number) => void;
  activeMenuItem: number;
  setActiveMenuItem: (value: number) => void;
}) {
  return (
    <div className="bg-white relative size-full overflow-hidden" data-name="Catalogue_comp">
      {/* Header Upper - шапка сайта с логотипом */}
      <div className="absolute h-[131px] left-[80.82px] top-0 w-[1574px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgScreenshot20260304At1757451} />
        </div>
      </div>
      
      {/* Background images */}
      
      <div className="absolute h-[1113.073px] left-[80.82px] top-0 w-[1574px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgScreenshot20260303At1419581} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgScreenshot20260303At1419581} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgScreenshot20260303At1419581} />
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[115%] left-0 max-w-none top-0 w-full" src={imgScreenshot20260303At1419581} />
          </div>
        </div>
      </div>
      
      <div className="absolute h-[970.182px] left-[80.82px] top-[148.39px] w-[1574px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgScreenshot20260303At1419581} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgScreenshot20260303At1419581} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgScreenshot20260303At1419581} />
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[131.93%] left-0 max-w-none top-[-19.93%] w-full" src={imgScreenshot20260303At1419581} />
          </div>
        </div>
      </div>
      
      <div className="absolute bg-[#eaf3ff] h-[42.093px] left-[248.43px] top-[107.68px] w-[1109.155px]" />
      
      {/* Vse_tab - показывается при клике на Products */}
      {isProductMenuOpen && activeMenuItem === 0 && (
        <div className="relative z-20">
          <VseTab scrollOffset={scrollOffset} setScrollOffset={setScrollOffset} />
        </div>
      )}
      
      {/* SoediniteliTab - показывается при выборе "Соединители" */}
      {isProductMenuOpen && activeMenuItem === 1 && (
        <div className="relative z-20">
          <SoediniteliTab scrollOffset={scrollOffset} setScrollOffset={setScrollOffset} />
        </div>
      )}
      
      {/* KabeliTab - показывается при выборе "Кабели" */}
      {isProductMenuOpen && activeMenuItem === 2 && (
        <div className="relative z-20">
          <KabeliTab scrollOffset={scrollOffset} setScrollOffset={setScrollOffset} />
        </div>
      )}
      
      {/* AntennyTab - показывается при выборе "Антенны" */}
      {isProductMenuOpen && activeMenuItem === 3 && (
        <div className="relative z-20">
          <AntennyTab scrollOffset={scrollOffset} setScrollOffset={setScrollOffset} />
        </div>
      )}
      
      {/* PassivnyeKomponentyTab - показывается при выборе "Пассивные компоненты" */}
      {isProductMenuOpen && activeMenuItem === 4 && (
        <div className="relative z-20">
          <PassivnyeKomponentyTab scrollOffset={scrollOffset} setScrollOffset={setScrollOffset} />
        </div>
      )}
      
      {/* FiltryTab - показывается при выборе "Фильтры" */}
      {isProductMenuOpen && activeMenuItem === 5 && (
        <div className="relative z-20">
          <FiltryTab scrollOffset={scrollOffset} setScrollOffset={setScrollOffset} />
        </div>
      )}
      
      {/* KabelnyeVvodyTab - показывается при выборе "Кабельные вводы, крепления, герметизация" */}
      {isProductMenuOpen && activeMenuItem === 6 && (
        <div className="relative z-20">
          <KabelnyeVvodyTab scrollOffset={scrollOffset} setScrollOffset={setScrollOffset} />
        </div>
      )}
      
      {/* KabelnySborkiTab - показывается при выборе "Кабельные сборки" */}
      {isProductMenuOpen && activeMenuItem === 7 && (
        <div className="relative z-20">
          <KabelnySborkiTab scrollOffset={scrollOffset} setScrollOffset={setScrollOffset} />
        </div>
      )}
      
      {/* VolnovodnyeKomponentyTab - показывает��я при выборе "Волноводные компоненты" */}
      {isProductMenuOpen && activeMenuItem === 8 && (
        <div className="relative z-20">
          <VolnovodnyeKomponentyTab scrollOffset={scrollOffset} setScrollOffset={setScrollOffset} />
        </div>
      )}
      
      {/* OpticheskieKomponentyTab - показывается при выборе "Оптические компоненты" */}
      {isProductMenuOpen && activeMenuItem === 9 && (
        <div className="relative z-20">
          <OpticheskieKomponentyTab scrollOffset={scrollOffset} setScrollOffset={setScrollOffset} />
        </div>
      )}
      
      {/* DeliteliOtvetviteliTab - показывается при выборе "Делители, ответвители" */}
      {isProductMenuOpen && activeMenuItem === 10 && (
        <div className="relative z-20">
          <DeliteliOtvetviteliTab scrollOffset={scrollOffset} setScrollOffset={setScrollOffset} />
        </div>
      )}
      
      {/* PerekhodyTab - показывается при выборе "Переходы" */}
      {isProductMenuOpen && activeMenuItem === 11 && (
        <div className="relative z-20">
          <PerekhodyTab scrollOffset={scrollOffset} setScrollOffset={setScrollOffset} />
        </div>
      )}
      
      {/* InstrumentyTab - показывается при выборе "Инструменты" */}
      {isProductMenuOpen && activeMenuItem === 12 && (
        <div className="relative z-20">
          <InstrumentyTab scrollOffset={scrollOffset} setScrollOffset={setScrollOffset} />
        </div>
      )}
      
      {/* KombayneryTab - показывается при выборе "Комбайнеры и компоненты" */}
      {isProductMenuOpen && activeMenuItem === 13 && (
        <div className="relative z-20">
          <KombayneryTab scrollOffset={scrollOffset} setScrollOffset={setScrollOffset} />
        </div>
      )}
      
      {/* GrozozashchitaTab - показывается при выборе "Грозозащита" */}
      {isProductMenuOpen && activeMenuItem === 14 && (
        <div className="relative z-20">
          <GrozozashchitaTab scrollOffset={scrollOffset} setScrollOffset={setScrollOffset} />
        </div>
      )}
      
      {/* Product_Menu_open - показывается при клике на Products */}
      {isProductMenuOpen && (
        <div className="relative z-20">
          <ProductMenuOpen menuScrollOffset={menuScrollOffset} setMenuScrollOffset={setMenuScrollOffset} activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
        </div>
      )}

      {isPrimenenieMenuOpen && (
        <div className="relative z-20">
          <PrimenenieMenuOpen />
        </div>
      )}

      {isProizvoditeliMenuOpen && (
        <div className="relative z-20">
          <ProizvoditeliMenuOpen />
        </div>
      )}
      
      {/* Menu_main - должен быть поверх overlay */}
      <div className="relative z-30">
        <MenuMain
          onProductsClick={() => {
            const next = !isProductMenuOpen;
            setIsProductMenuOpen(next);
            if (next) {
              setIsPrimenenieMenuOpen(false);
              setIsProizvoditeliMenuOpen(false);
            }
          }}
          onPrimenenieClick={() => {
            const next = !isPrimenenieMenuOpen;
            setIsPrimenenieMenuOpen(next);
            if (next) {
              setIsProductMenuOpen(false);
              setIsProizvoditeliMenuOpen(false);
            }
          }}
          onProizvoditeliClick={() => {
            const next = !isProizvoditeliMenuOpen;
            setIsProizvoditeliMenuOpen(next);
            if (next) {
              setIsProductMenuOpen(false);
              setIsPrimenenieMenuOpen(false);
            }
          }}
          isProductActive={isProductMenuOpen}
          isPrimenenieActive={isPrimenenieMenuOpen}
          isProizvoditeliActive={isProizvoditeliMenuOpen}
        />
      </div>
    </div>
  );
}

// Компонент главного меню
function MenuMain({
  onProductsClick,
  onPrimenenieClick,
  onProizvoditeliClick,
  isProductActive,
  isPrimenenieActive,
  isProizvoditeliActive,
}: {
  onProductsClick: () => void;
  onPrimenenieClick: () => void;
  onProizvoditeliClick: () => void;
  isProductActive: boolean;
  isPrimenenieActive: boolean;
  isProizvoditeliActive: boolean;
}) {
  const menuItems = [
    { text: "Продукция", onClick: onProductsClick, isActive: isProductActive },
    { text: "Применение", onClick: onPrimenenieClick, isActive: isPrimenenieActive },
    { text: "Производители", onClick: onProizvoditeliClick, isActive: isProizvoditeliActive },
    { text: "О компании" },
    { text: "Производство" },
    { text: "Контакты" },
    { text: "Знания" },
    { text: "События" }
  ];

  return (
    <div className="absolute bg-[#eaf3ff] content-stretch flex gap-[15px] items-center left-[248px] top-[106px] w-[1109px] h-[41px]">
      {menuItems.map((item, index) => (
        <div
          key={index}
          onClick={item.onClick}
          className={`content-stretch flex items-center justify-center ${
            index === 0
              ? `${item.isActive ? 'bg-[#dceafc]' : ''} h-[41px] pb-[9px] pt-[11px] px-[21px] w-[116px]`
              : `${item.isActive ? 'bg-[#dceafc]' : ''} px-[12px] py-[10px]`
          } relative shrink-0 ${item.onClick ? 'cursor-pointer hover:bg-[#dceafc]' : ''}`}
        >
          <p className="font-['Roboto_Condensed',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}

function PrimenenieMenuOpen() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const items = [
    "Антенно-фидерный тракт",
    "РЭА",
    "Измерения",
    "Промышленность",
    "Космос",
    "Авиация",
    "Телеком",
    "Транспорт",
    "Судостроение",
    "ЦОД",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute bg-[#dceafc] left-[379px] top-[147px] w-[256px]"
    >
      <div className="bg-[#dceafc] content-stretch flex flex-col items-start w-[256px]">
        {items.map((item, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={item}
              className="relative shrink-0 w-full cursor-pointer transition-colors duration-150"
              style={{ backgroundColor: isHovered ? '#f5faff' : 'transparent' }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center justify-between px-[20px] py-[12px] relative w-full">
                  <p
                    className="font-['Roboto_Condensed',sans-serif] font-medium leading-[normal] relative text-[16px] flex-1"
                    style={{ color: isHovered ? '#3D6BD0' : 'black' }}
                  >
                    {item}
                  </p>
                  <div className="h-[11.314px] relative shrink-0 w-[15.314px] ml-[10px]">
                    <div className="absolute inset-[-6.25%_0]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3137 12.7279">
                        <g>
                          <path d={svgPaths.p23012900} stroke={isHovered ? '#3D6BD0' : 'black'} strokeWidth="2" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

function ProizvoditeliMenuOpen() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const items = [
    "H+S",
    "NKT PRO",
    "Spectrum",
    "Rosenberger",
    "Amphenol Procom",
    "EUPEN",
    "Prysmian",
    "FIMO",
    "Pulsar",
    "SENKO",
    "RFOne",
    "Kenbotong Technology",
    "LEMO",
    "Cotran",
    "Hefei",
    "Лаборатория радиосвязи",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute bg-[#dceafc] left-[500px] top-[147px] w-[256px]"
    >
      <div className="bg-[#dceafc] content-stretch flex flex-col items-start w-[256px]">
        {items.map((item, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={item}
              className="relative shrink-0 w-full cursor-pointer transition-colors duration-150"
              style={{ backgroundColor: isHovered ? "#f5faff" : "transparent" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center justify-between px-[20px] py-[12px] relative w-full">
                  <p
                    className="font-['Roboto_Condensed',sans-serif] font-medium leading-[normal] relative text-[16px] flex-1"
                    style={{ color: isHovered ? "#3D6BD0" : "black" }}
                  >
                    {item}
                  </p>
                  <div className="h-[11.314px] relative shrink-0 w-[15.314px] ml-[10px]">
                    <div className="absolute inset-[-6.25%_0]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3137 12.7279">
                        <g>
                          <path d={svgPaths.p23012900} stroke={isHovered ? "#3D6BD0" : "black"} strokeWidth="2" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

// Компонент бокового меню продуктов
function ProductMenuOpen({ menuScrollOffset, setMenuScrollOffset, activeMenuItem, setActiveMenuItem }: { menuScrollOffset: number; setMenuScrollOffset: (value: number) => void; activeMenuItem: number; setActiveMenuItem: (value: number) => void }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [scrollBarY, setScrollBarY] = useState(3.15);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const hoverTimeoutRef = useRef<number | null>(null);
  
  const menuItems = [
    { text: "Все продукты", color: "#3d6bd0", bgColor: "#f5faff", width: "93px" },
    { text: "Соединители", width: "auto" },
    { text: "Кабели", width: "auto" },
    { text: "Антенны", width: "auto" },
    { text: "Пассивные компоненты", width: "auto" },
    { text: "Фильтры", width: "auto" },
    { text: "Кабельные вводы,\nкрепления, герметизация", isMultiline: true, width: "168px" },
    { text: "Кабельные сборки", width: "auto" },
    { text: "Волноводные компоненты", width: "180.307px" },
    { text: "Оптические компоненты", width: "auto" },
    { text: "Делители, ответвители\nи разветвители", isMultiline: true, width: "180px" },
    { text: "Переходы", width: "163.537px" },
    { text: "Инструменты", width: "163.537px" },
    { text: "Комбайнеры и компоненты", width: "auto" },
    { text: "Грозозащита", width: "auto" },
    { text: "Изоляторы и циркуляторы", width: "auto" },
    { text: "Инжекторы питания", width: "auto" },
    { text: "Блокировки DC", width: "auto" }
  ];

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    
    // Очищаем предыдущий таймер
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    // Устанавливаем задержку перед переключением вкладки (300ms)
    hoverTimeoutRef.current = window.setTimeout(() => {
      setActiveMenuItem(index);
    }, 300);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    
    // Отменяем переключение если курсор ушел до истечения задержки
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  // Очищаем таймер при размонтировании компонента
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartY(e.clientY);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    const deltaY = e.clientY - dragStartY;
    const maxScroll = 770; // максиальная высота прокрутки скроллбара для меню
    const minScrollBarY = 3.15;
    const maxScrollBarY = minScrollBarY + maxScroll;
    
    const newScrollBarY = Math.max(minScrollBarY, Math.min(maxScrollBarY, scrollBarY + deltaY));
    setScrollBarY(newScrollBarY);
    
    // Вычисляем смещение контента
    const scrollPercentage = (newScrollBarY - minScrollBarY) / maxScroll;
    const maxContentScroll = -400; // увеличено для показа в��ех элементов
    setMenuScrollOffset(scrollPercentage * maxContentScroll);
    
    setDragStartY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Прокрутка колесиком мыши для бокового меню
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const scrollSpeed = 1.5;
    const deltaScroll = e.deltaY * scrollSpeed;
    
    const maxScroll = 770;
    const minScrollBarY = 3.15;
    const maxScrollBarY = minScrollBarY + maxScroll;
    
    const scrollPercentage = (scrollBarY - minScrollBarY) / maxScroll;
    const currentContentScroll = scrollPercentage * -400;
    const newContentScroll = Math.max(-400, Math.min(0, currentContentScroll - deltaScroll));
    
    const newScrollPercentage = newContentScroll / -400;
    const newScrollBarY = minScrollBarY + (newScrollPercentage * maxScroll);
    
    setScrollBarY(newScrollBarY);
    setMenuScrollOffset(newContentScroll);
  };

  // Добавляем слушатели событий
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove as any);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove as any);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, scrollBarY, dragStartY]);

  return (
    <div 
      className="absolute bg-[#dceafc] h-[971px] left-[247px] overflow-clip top-[147px] w-[256px]"
      onMouseEnter={() => setIsMenuHovered(true)}
      onMouseLeave={() => setIsMenuHovered(false)}
      onWheel={handleWheel}
    >
      <motion.div 
        animate={{ y: menuScrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute bg-[#dceafc] content-stretch flex flex-col items-start left-0 top-0 w-[256px]"
      >
        {menuItems.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const isActive = index === activeMenuItem; // Активен текущий выбранный элемент
          
          return (
            <div
              key={index}
              className="relative shrink-0 w-full cursor-pointer transition-colors duration-150"
              style={{ 
                backgroundColor: isActive ? '#f5faff' : (isHovered ? '#f5faff' : 'transparent')
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center justify-between px-[20px] py-[12px] relative w-full">
                  <p 
                    className="font-['Roboto_Condensed',sans-serif] font-medium leading-[normal] relative text-[16px] flex-1"
                    style={{ 
                      color: (isActive || isHovered) ? '#3D6BD0' : 'black',
                      whiteSpace: item.isMultiline ? 'pre-wrap' : 'nowrap',
                      maxWidth: item.width === 'auto' ? 'calc(100% - 35px)' : item.width
                    }}
                  >
                    {item.text}
                  </p>
                  <div className="h-[11.314px] relative shrink-0 w-[15.314px] ml-[10px]">
                    <div className="absolute inset-[-6.25%_0]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3137 12.7279">
                        <g>
                          <path d={svgPaths.p23012900} stroke={(isActive || isHovered) ? '#3D6BD0' : 'black'} strokeWidth="2" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
      
      {/* Скроллбар - перетаскиваемый, показывается только при ховере */}
      <motion.div
        animate={{ 
          top: scrollBarY,
          opacity: isMenuHovered ? 1 : 0
        }}
        transition={{ opacity: { duration: 0.2 } }}
        onMouseDown={handleMouseDown}
        className="absolute bg-[#b3cae8] h-[192.955px] left-[251.78px] rounded-[10px] w-[4px] cursor-grab active:cursor-grabbing hover:bg-[#9bb8d8]"
        style={{ userSelect: 'none' }}
      />
    </div>
  );
}

// Компонент вкладки "Все"
function VseTab({ scrollOffset, setScrollOffset }: { scrollOffset: number; setScrollOffset: (value: number) => void }) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [scrollBarY, setScrollBarY] = useState(5.48);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartY(e.clientY);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    const deltaY = e.clientY - dragStartY;
    const maxScroll = 400; // максимальная высота прокрутки скроллбара
    const minScrollBarY = 5.48;
    const maxScrollBarY = minScrollBarY + maxScroll;
    
    const newScrollBarY = Math.max(minScrollBarY, Math.min(maxScrollBarY, scrollBarY + deltaY));
    setScrollBarY(newScrollBarY);
    
    // Вычисляем смещение контента (чем ниже скроллбар, тем выше контент)
    const scrollPercentage = (newScrollBarY - minScrollBarY) / maxScroll;
    const maxContentScroll = -600; // максимальное смещение контента вверх
    setScrollOffset(scrollPercentage * maxContentScroll);
    
    setDragStartY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Прокрутка колесиком мыши
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const scrollSpeed = 1.5; // Скорость прокрутки
    const deltaScroll = e.deltaY * scrollSpeed;
    
    const maxScroll = 400;
    const minScrollBarY = 5.48;
    const maxScrollBarY = minScrollBarY + maxScroll;
    
    const scrollPercentage = (scrollBarY - minScrollBarY) / maxScroll;
    const currentContentScroll = scrollPercentage * -600;
    const newContentScroll = Math.max(-600, Math.min(0, currentContentScroll - deltaScroll));
    
    const newScrollPercentage = newContentScroll / -600;
    const newScrollBarY = minScrollBarY + (newScrollPercentage * maxScroll);
    
    setScrollBarY(newScrollBarY);
    setScrollOffset(newContentScroll);
  };

  // Добавляем сл��шатели событий
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove as any);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove as any);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div 
      className="absolute h-[971px] left-[246px] overflow-clip top-[147px] w-[1277px]"
      onWheel={handleWheel}
    >
      {/* Rectangle 1 - фон */}
      <div className="absolute bg-[#f5faff] h-[969.282px] left-0 top-0 w-[1278.53px]" />
      
      {/* Vse producty_1 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[293.68px] top-[44px] w-[289px]"
      >
        <VseProductyColumn1 />
      </motion.div>
      
      {/* Vse producty_2 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[622.6px] top-[44px] w-[289px]"
      >
        <VseProductyColumn2 />
      </motion.div>
      
      {/* Vse producty_3 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[951.52px] top-[44px] w-[289px]"
      >
        <VseProductyColumn3 />
      </motion.div>
      
      {/* Scroll_bar_right - перетаскиваемый */}
      <motion.div
        animate={{ top: scrollBarY }}
        onMouseDown={handleMouseDown}
        className="absolute bg-[#b3cae8] h-[582.432px] left-[1271.91px] rounded-[10px] w-[4.1685px] cursor-grab active:cursor-grabbing hover:bg-[#9bb8d8]"
        style={{ userSelect: 'none' }}
      />
    </div>
  );
}

// Компонент вкладки "Соединители"
function SoediniteliTab({ scrollOffset, setScrollOffset }: { scrollOffset: number; setScrollOffset: (value: number) => void }) {
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
      className="absolute h-[971px] left-[246px] overflow-clip top-[147px] w-[1277px]"
      onWheel={handleWheel}
    >
      {/* Rectangle 1 - фон */}
      <div className="absolute bg-[#f5faff] h-[969.282px] left-0 top-0 w-[1278.53px]" />
      
      {/* Vse producty_1 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[293.68px] top-[44px] w-[289px]"
      >
        <SoediniteliColumn1 />
      </motion.div>
      
      {/* Vse producty_2 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[622.6px] top-[44px] w-[289px]"
      >
        <SoediniteliColumn2 />
      </motion.div>
      
      {/* Vse producty_3 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[951.52px] top-[44px] w-[289px]"
      >
        <SoediniteliColumn3 />
      </motion.div>
    </div>
  );
}

// Компонент вкладки "Кабели"
function KabeliTab({ scrollOffset, setScrollOffset }: { scrollOffset: number; setScrollOffset: (value: number) => void }) {
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
      className="absolute h-[971px] left-[246px] overflow-clip top-[147px] w-[1277px]"
      onWheel={handleWheel}
    >
      {/* Rectangle 1 - фон */}
      <div className="absolute bg-[#f5faff] h-[969.282px] left-0 top-0 w-[1278.53px]" />
      
      {/* Vse producty_1 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[293.68px] top-[44px] w-[289px]"
      >
        <KabeliColumn1 />
      </motion.div>
      
      {/* Vse producty_2 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[622.6px] top-[44px] w-[289px]"
      >
        <KabeliColumn2 />
      </motion.div>
      
      {/* Vse producty_3 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[951.52px] top-[44px] w-[289px]"
      >
        <KabeliColumn3 />
      </motion.div>
    </div>
  );
}

// Компон��нт вкладки "Антенн"
function AntennyTab({ scrollOffset, setScrollOffset }: { scrollOffset: number; setScrollOffset: (value: number) => void }) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [scrollBarY, setScrollBarY] = useState(5.48);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartY(e.clientY);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    const deltaY = e.clientY - dragStartY;
    const maxScroll = 400; // максимальная высота прокрутки скроллбара
    const minScrollBarY = 5.48;
    const maxScrollBarY = minScrollBarY + maxScroll;
    
    const newScrollBarY = Math.max(minScrollBarY, Math.min(maxScrollBarY, scrollBarY + deltaY));
    setScrollBarY(newScrollBarY);
    
    // Вычисляем смещение контента (чем ниже скроллбар, тем выше контент)
    const scrollPercentage = (newScrollBarY - minScrollBarY) / maxScroll;
    const maxContentScroll = -600; // максимальное смещение контента вверх
    setScrollOffset(scrollPercentage * maxContentScroll);
    
    setDragStartY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Добавляем слушатели событий
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove as any);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove as any);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div className="absolute h-[971px] left-[246px] overflow-clip top-[147px] w-[1277px]">
      {/* Rectangle 1 - фон */}
      <div className="absolute bg-[#f5faff] h-[969.282px] left-0 top-0 w-[1278.53px]" />
      
      {/* Vse producty_1 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[293.68px] top-[44px] w-[289px]"
      >
        <AntennyColumn1 />
      </motion.div>
      
      {/* Vse producty_2 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[622.6px] top-[44px] w-[289px]"
      >
        <AntennyColumn2 />
      </motion.div>
      
      {/* Vse producty_3 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[951.52px] top-[44px] w-[289px]"
      >
        <AntennyColumn3 />
      </motion.div>
    </div>
  );
}

// Компонент вкладки "Пассивные компоненты"
function PassivnyeKomponentyTab({ scrollOffset, setScrollOffset }: { scrollOffset: number; setScrollOffset: (value: number) => void }) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [scrollBarY, setScrollBarY] = useState(5.48);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartY(e.clientY);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    const deltaY = e.clientY - dragStartY;
    const maxScroll = 400; // максимальная высота прокрутки скроллбара
    const minScrollBarY = 5.48;
    const maxScrollBarY = minScrollBarY + maxScroll;
    
    const newScrollBarY = Math.max(minScrollBarY, Math.min(maxScrollBarY, scrollBarY + deltaY));
    setScrollBarY(newScrollBarY);
    
    // Вычисляем смещение контента (чем ниже скроллбар, тем выше контент)
    const scrollPercentage = (newScrollBarY - minScrollBarY) / maxScroll;
    const maxContentScroll = -600; // максимальное смещение контента вверх
    setScrollOffset(scrollPercentage * maxContentScroll);
    
    setDragStartY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Добавляем слушатели событий
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove as any);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove as any);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div className="absolute h-[971px] left-[246px] overflow-clip top-[147px] w-[1277px]">
      {/* Rectangle 1 - фон */}
      <div className="absolute bg-[#f5faff] h-[969.282px] left-0 top-0 w-[1278.53px]" />
      
      {/* Vse producty_1 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[293.68px] top-[44px] w-[289px]"
      >
        <PassivnyeKomponentyColumn1 />
      </motion.div>
      
      {/* Vse producty_2 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[622.6px] top-[44px] w-[289px]"
      >
        <PassivnyeKomponentyColumn2 />
      </motion.div>
      
      {/* Vse producty_3 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[951.52px] top-[44px] w-[289px]"
      >
        <PassivnyeKomponentyColumn3 />
      </motion.div>
    </div>
  );
}

// Компонент вкладки "Фильтры"
function FiltryTab({ scrollOffset, setScrollOffset }: { scrollOffset: number; setScrollOffset: (value: number) => void }) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [scrollBarY, setScrollBarY] = useState(5.48);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartY(e.clientY);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    const deltaY = e.clientY - dragStartY;
    const maxScroll = 400; // максимальная высота прокрутки скроллбара
    const minScrollBarY = 5.48;
    const maxScrollBarY = minScrollBarY + maxScroll;
    
    const newScrollBarY = Math.max(minScrollBarY, Math.min(maxScrollBarY, scrollBarY + deltaY));
    setScrollBarY(newScrollBarY);
    
    // Вычисляем смещение контента (чем ниже скроллбар, тем выше контент)
    const scrollPercentage = (newScrollBarY - minScrollBarY) / maxScroll;
    const maxContentScroll = -600; // максимальное смещение контента вверх
    setScrollOffset(scrollPercentage * maxContentScroll);
    
    setDragStartY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Добавляем слушатели событий
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove as any);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove as any);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div className="absolute h-[971px] left-[246px] overflow-clip top-[147px] w-[1277px]">
      {/* Rectangle 1 - фон */}
      <div className="absolute bg-[#f5faff] h-[969.282px] left-0 top-0 w-[1278.53px]" />
      
      {/* Vse producty_1 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[293.68px] top-[44px] w-[289px]"
      >
        <FiltryColumn1 />
      </motion.div>
      
      {/* Vse producty_2 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[622.6px] top-[44px] w-[289px]"
      >
        <FiltryColumn2 />
      </motion.div>
      
      {/* Vse producty_3 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[951.52px] top-[44px] w-[289px]"
      >
        <FiltryColumn3 />
      </motion.div>
    </div>
  );
}

// Компонент вкладки "Кабельные вводы, крепления, герметизация"
function KabelnyeVvodyTab({ scrollOffset, setScrollOffset }: { scrollOffset: number; setScrollOffset: (value: number) => void }) {
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
      className="absolute h-[971px] left-[246px] overflow-clip top-[147px] w-[1277px]"
      onWheel={handleWheel}
    >
      {/* Rectangle 1 - фон */}
      <div className="absolute bg-[#f5faff] h-[969.282px] left-0 top-0 w-[1278.53px]" />
      
      {/* Vse producty_1 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[293.68px] top-[44px] w-[289px]"
      >
        <KabelnyeVvodyColumn1 />
      </motion.div>
      
      {/* Vse producty_2 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[622.6px] top-[44px] w-[289px]"
      >
        <KabelnyeVvodyColumn2 />
      </motion.div>
      
      {/* Vse producty_3 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[951.52px] top-[44px] w-[289px]"
      >
        <KabelnyeVvodyColumn3 />
      </motion.div>
    </div>
  );
}

// Компонент вкладки "Кабельные сборки"
function KabelnySborkiTab({ scrollOffset, setScrollOffset }: { scrollOffset: number; setScrollOffset: (value: number) => void }) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [scrollBarY, setScrollBarY] = useState(5.48);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartY(e.clientY);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    const deltaY = e.clientY - dragStartY;
    const maxScroll = 400; // максимальная высота прокрутки скроллбара
    const minScrollBarY = 5.48;
    const maxScrollBarY = minScrollBarY + maxScroll;
    
    const newScrollBarY = Math.max(minScrollBarY, Math.min(maxScrollBarY, scrollBarY + deltaY));
    setScrollBarY(newScrollBarY);
    
    // Вычисляем смещение контента (чем ниже скроллбар, тем выше контент)
    const scrollPercentage = (newScrollBarY - minScrollBarY) / maxScroll;
    const maxContentScroll = -600; // максимальное смещение контента вверх
    setScrollOffset(scrollPercentage * maxContentScroll);
    
    setDragStartY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Добавляем слушатели событий
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove as any);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove as any);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div className="absolute h-[971px] left-[246px] overflow-clip top-[147px] w-[1277px]">
      {/* Rectangle 1 - фон */}
      <div className="absolute bg-[#f5faff] h-[969.282px] left-0 top-0 w-[1278.53px]" />
      
      {/* Vse producty_1 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[293.68px] top-[44px] w-[289px]"
      >
        <KabelnySborkiColumn1 />
      </motion.div>
      
      {/* Vse producty_2 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[622.6px] top-[44px] w-[289px]"
      >
        <KabelnySborkiColumn2 />
      </motion.div>
      
      {/* Vse producty_3 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[951.52px] top-[44px] w-[289px]"
      >
        <KabelnySborkiColumn3 />
      </motion.div>
    </div>
  );
}

// Колонка 1 продуктов
function VseProductyColumn1() {
  return (
    <>
      <Column title="Соединители" items={[
        "Радиочастотные соединители",
        "Соединители для радиоизлучающих кабелей",
        "Соединители оптические",
        "Колпачки для соединителей"
      ]} />
      <Column title="Пассивные компоненты" items={[
        "Аттенюаторы",
        "Согласованные нагрузки"
        "Изоляторы и циркуляторы",
        "Корректоры фазы",
        "Коаксиальные переключатели",
        "Изоляторы и циркуляторы",
        "Инжекторы питания",
        "Блокировка DC"
      ]} />
      <Column title="Переходы" items={[
        "Коаксиальные переходы",
        "Волноводные переходы",
        "Коаксиально-волноводные переходы",
        "Оптические преобразователи"
      ]} />
      <Column title="Кабельные вводы, крепления, герметизация" items={[
        "Крепления для коаксиальных кабелей",
        "Крепления для радиоизлучающих кабелей",
        "Вводные панели",
        "Кабельные вводы",
        "Заглушки и акусессуары",
        "Герметизация"
      ]} />
      <Column title="Инструменты" items={[
        "Для подготовки гофрированных кабелей",
        "Для монтажа ВЧ соединителей",
        "Моментные ключи",
        "Калибровочные наборы"
      ]} />
      <Column title="Комбайнеры и компоненты" items={[
        "Компактные комбайнеры",
        "Комбайнеры на объемных резонаторах",
        "Комбайнерные системы",
        "Компоненты комбайнеров",
        "Распределительные панели"
      ]} />
    </>
  );
}

// Колонка 2 продуктов
function VseProductyColumn2() {
  return (
    <>
      <Column title="Кабели" items={[
        "Коаксиальные радиочастотные кабели",
        "Гофрированные ВЧ кабели",
        "Радиоизлучающие кабели",
        "Кабели оптические",
        "Кбели электрические",
        "Кабели передачи данных"
      ]} />
      <Column title="Кабельные сборки" items={[
        "ВЧ/СВЧ кабельные сборки",
        "Оптические кабельные сборки",
        "Сборки на гофрированном кабеле (Джамперы)"
      ]} />
      <Column title="Волноводные компоненты" items={[
        "Волноводные компоненты",
        "Коаксиально-волноводные переходы",
        "Волнводные секции",
        "Волноводные аттенюаторы",
        "Волноводные нагрузки",
        "Рупоные антенны",
        "Волноводные ответвители",
        "Волноводные переходы",
        "Волноводные переключатели"
      ]} />
      <Column title="Оптические компоненты" items={[
        "Соединители оптические",
        "Адапетры оптические",
        "Оптические преобразователи",
        "Оптические разветвители"
      ]} />
      <Column title="Грозозащита" items={[
        "Устройства грозозащиты",
        "Газовые капсулы для устройств грозозащиты",
        "Аксессуары для монтажа грозозащиты",
        "Высоковольтные блокировки DC",
        "Заземлители"
      ]} />
    </>
  );
}

// Колонка 3 продуктов
function VseProductyColumn3() {
  return (
    <>
      <Column title="Антенны" items={[
        "Антенны базовых станций",
        "Автомобильные антенны",
        "DAS антенны",
        "Железнодорожные антенны",
        "Антенны для радиостанций",
        "Рупорные антенны"
      ]} />
      <Column title="Фильтры" items={[
        "Дуплексные фильтры",
        "Полосно пропускающие фильтры",
        "ФВЧ и ФНЧ",
        "Полосно-заграждающие фильтры",
        "Пропускающе-заграждающие фильтры",
        "Фильтры ВЧ/СВЧ",
        "Диплексоры",
        "Мультиплексоры"
      ]} />
      <Column title="Делители, ответвители и разветвители" items={[
        "СВЧ делители и ответвители",
        "Направленные ответвители DAS",
        "Ненаправленные ответвители (Тапперы)",
        "Кольцевые и резистивные делители DA",
        "Реактивные делители"
      ]} />
      <Column title="Изоляторы и циркуляторы" items={[]} />
      <Column title="Инжекторы питания" items={[]} />
      <Column title="Блокировка DC" items={[]} />
    </>
  );
}

// Колонка 1 соединителей
function SoediniteliColumn1() {
  return (
    <>
      <Column title="Радиочастотные соединители" items={[
        "Кабельные и приборно-кабельные соединители",
        "Приборные соединители",
        "Соединители для печатных плат"
      ]} />
      <Column title="Соединители для радиоизлучающих кабелей" items={[]} />
    </>
  );
}

// олонка 2 соединителей
function SoediniteliColumn2() {
  return (
    <>
      <Column title="Соединители оптические" items={[
        "Защищенные оптические соединители",
        "Стандартные оптические соединители",
        "Гибридные оптические соединители",
        "Соединители полевого монтажа"
      ]} />
      <Column title="Оптические преобразователи" items={[
        "GPS-over-Fiber",
        "LAN-over-Fiber",
        "RF-over-Fiber"
      ]} />
    </>
  );
}

// Колонка 3 соединителей
function SoediniteliColumn3() {
  return (
    <>
      <Column title="Колпачки для соединителей" items={[]} />
    </>
  );
}

// Колонка 1 кабелей
function KabeliColumn1() {
  return (
    <>
      <Column title="Коаксиальные радиочастотные кабели" items={[
        "Гибкие ВЧ кабели до 6 ГГц",
        "MULTIFLEX - гибкие СВЧ кабели",
        "SUCOFORM - формуемые вручную СВЧ кабели",
        "EZ - полужесткие СВЧ кабели SEMI-RIGID",
        "Фазостабильные СВЧ кабели с низкими потерями",
        "CT - температуростабильные СВЧ кабели",
        "Пожаробезопасные кабели на основе RADOX"
      ]} />
      <Column title="Гофрированные ВЧ кабели. SUCOFEED" items={[]} />
      <Column title="Радиоизлучающие кабели" items={[]} />
    </>
  );
}

// Колонка 2 кабелей
function KabeliColumn2() {
  return (
    <>
      <Column title="Кабели оптические" items={[
        "Outdoor оптические кабели",
        "Специальные оптические кабели",
        "Indoor оптические кабели",
        "Универсальные оптические кабели"
      ]} />
      <Column title="Кабели электрические" items={[
        "Автомобильные",
        "Индустриальные"
      ]} />
    </>
  );
}

// Колонка 3 кабелей
function KabeliColumn3() {
  return (
    <>
      <Column title="Кабели передачи данных" items={[]} />
      <Column title="Телекоммуникационные кабели SPUMA" items={[]} />
    </>
  );
}

// Колонка 1 антенн
function AntennyColumn1() {
  return (
    <>
      <Column title="Антенны базовых станций" items={[
        "ATEX",
        "Yagi",
        "Диполи и дипольные массивы",
        "Коллинеарные",
        "Навигационные",
        "Панельные"
      ]} />
    </>
  );
}

// Колонка 2 нтенн
function AntennyColumn2() {
  return (
    <>
      <Column title="DAS антенны" items={[]} />
      <Column title="Автомобильные антенны" items={[]} />
      <Column title="Железнодорожные антенны" items={[]} />
    </>
  );
}

// Колонка 3 антенн
function AntennyColumn3() {
  return (
    <>
      <Column title="Антенны для радиостанций" items={[]} />
      <Column title="Рупорные антенны" items={[]} />
      <Column title="Радиоизлучающие кабели, соединители и аксессуары к ним" items={[]} />
    </>
  );
}

// Колонка 1 пассивных компонентов
function PassivnyeKomponentyColumn1() {
  return (
    <>
      <Column title="Аттенюаторы" items={[
        "Подраздел 1",
        "Подраздел 2",
        "Подраздел 3",
        "Подраздел 4"
      ]} />
      <Column title="Изоляторы и циркуляторы" items={[
        "Подраздел 1",
        "Подраздел 2"
      ]} />
    </>
  );
}

// Колонка 2 пассивных компонентов
function PassivnyeKomponentyColumn2() {
  return (
    <>
      <Column title="Корректоры фазы" items={[
        "Подраздел 1",
        "Подраздел 2"
      ]} />
      <Column title="Коаксиальные переключатели" items={[
        "Подраздел 1",
        "Подраздел 2"
      ]} />
    </>
  );
}

// Колонка 3 пассивных компонентов
function PassivnyeKomponentyColumn3() {
  return (
    <>
      <Column title="Согласованные нагрузки" items={[
        "Подраздел 1",
        "Подраздел 2"
      ]} />
    </>
  );
}

// Колонка 1 фильтров
function FiltryColumn1() {
  return (
    <>
      <Column title="Дуплексные фильтры" items={[
        "Дуплексеры на объёмных резонаторах",
        "Дуплексеры на спиральных резонаторах",
        "Малогабаритные дуплексеры"
      ]} />
      <Column title="ФВЧ и ФНЧ" items={[]} />
    </>
  );
}

// Колонка 2 фильтров
function FiltryColumn2() {
  return (
    <>
      <Column title="Полосно-пропускающие фильтры" items={[]} />
      <Column title="Полосно-заграждающие фильтры" items={[]} />
      <Column title="Пропускающе-заграждающие фильтры" items={[]} />
    </>
  );
}

// Колонка 3 ф��льтров
function FiltryColumn3() {
  return (
    <>
      <Column title="Фильтры ВЧ/СВЧ" items={[]} />
      <Column title="Диплексоры" items={[]} />
      <Column title="Мультиплексоры" items={[]} />
    </>
  );
}

// Колонка 1 кабельных вводов, креплений, герметизации
function KabelnyeVvodyColumn1() {
  return (
    <>
      <Column title="Крепления для коаксиальных кабелей" items={[
        "Подраздел 1",
        "Подраздел 2"
      ]} />
      <Column title="Крепления для радиоизлучающих кабелей" items={[
        "Подраздел 1",
        "Подраздел 2"
      ]} />
    </>
  );
}

// Колонка 2 кабельных вводов, креплений, герметизации
function KabelnyeVvodyColumn2() {
  return (
    <>
      <Column title="Вводные панели" items={[
        "Подраздел 1",
        "Подраздел 2"
      ]} />
      <Column title="Кабельные вводы" items={[
        "Подраздел 1",
        "Подраздел 2"
      ]} />
    </>
  );
}

// Колонка 3 кабельных вводов, креплений, герметизации
function KabelnyeVvodyColumn3() {
  return (
    <>
      <Column title="Заглушки и аксессуары" items={[]} />
      <Column title="Герметизация" items={[]} />
    </>
  );
}

// Колонка 1 кабельных сборок
function KabelnySborkiColumn1() {
  return (
    <>
      <Column title="ВЧ/СВЧ кабельные сборки" items={[
        "Бортовые сборки для КА",
        "Миниатюрные СВЧ сборки",
        "Экономичные для измерений ECOTEST",
        "Фазостабильные кабельные сборки для векторных измерений",
        "Стандартные для измерений (SUCOTEST, TL-8A, 30 BNC)",
        "Гибкие СВЧ кабельные сборки для измерений",
        "Мультикоаксиальные сборки",
        "Гибкие сборки до 6 ГГц",
        "Кабельные сборки Sucoform и Multiflex",
        "Сборки для PIM измерений",
        "Гибкие термовакуумные испытаний",
        "Сборки для систем ЦОС"
      ]} />
    </>
  );
}

// Колонка 2 кабельных сборок
function KabelnySborkiColumn2() {
  return (
    <>
      <Column title="Оптические кабельные сборки" items={[
        "Защищённые оптические сборки",
        "Оптические сборки для помещений"
      ]} />
    </>
  );
}

// Колонка 3 кабельных сборок
function KabelnySborkiColumn3() {
  return (
    <>
      <Column title="Сборки на гофрированном кабеле (Джамперы)" items={[
        "Подраздел 1",
        "Подраздел 2",
        "Подраздел 3",
        "Подраздел 4"
      ]} />
    </>
  );
}

// Компонент вкладки "Волноводные компоненты"
function VolnovodnyeKomponentyTab({ scrollOffset, setScrollOffset }: { scrollOffset: number; setScrollOffset: (value: number) => void }) {
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
      className="absolute h-[971px] left-[246px] overflow-clip top-[147px] w-[1277px]"
      onWheel={handleWheel}
    >
      {/* Rectangle 1 - фон */}
      <div className="absolute bg-[#f5faff] h-[969.282px] left-0 top-0 w-[1278.53px]" />
      
      {/* Vse producty_1 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[293.68px] top-[44px] w-[289px]"
      >
        <VolnovodnyeKomponentyColumn1 />
      </motion.div>
      
      {/* Vse producty_2 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[622.6px] top-[44px] w-[289px]"
      >
        <VolnovodnyeKomponentyColumn2 />
      </motion.div>
      
      {/* Vse producty_3 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[951.52px] top-[44px] w-[289px]"
      >
        <VolnovodnyeKomponentyColumn3 />
      </motion.div>
    </div>
  );
}

// Колонка 1 волноводных компонентов
function VolnovodnyeKomponentyColumn1() {
  return (
    <>
      <Column title="Коаксиально-волноводные переходы" items={[]} />
      <Column title="Волноводные секции" items={[]} />
      <Column title="Волноводные переходы" items={[]} />
    </>
  );
}

// Колонка 2 волноводных компонентов
function VolnovodnyeKomponentyColumn2() {
  return (
    <>
      <Column title="Волноводные аттенюаторы" items={[]} />
      <Column title="Рупорные антенны" items={[]} />
      <Column title="Волноводные нагрузки" items={[]} />
    </>
  );
}

// Колонка 3 волноводных компонентов
function VolnovodnyeKomponentyColumn3() {
  return (
    <>
      <Column title="Волноводные ответвители" items={[]} />
      <Column title="Волноводные переключатели" items={[]} />
    </>
  );
}

// Компонент вкладки "Оптические компоненты"
function OpticheskieKomponentyTab({ scrollOffset, setScrollOffset }: { scrollOffset: number; setScrollOffset: (value: number) => void }) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [scrollBarY, setScrollBarY] = useState(5.48);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartY(e.clientY);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    const deltaY = e.clientY - dragStartY;
    const maxScroll = 400;
    const minScrollBarY = 5.48;
    const maxScrollBarY = minScrollBarY + maxScroll;
    
    const newScrollBarY = Math.max(minScrollBarY, Math.min(maxScrollBarY, scrollBarY + deltaY));
    setScrollBarY(newScrollBarY);
    
    const scrollPercentage = (newScrollBarY - minScrollBarY) / maxScroll;
    const maxContentScroll = -600;
    setScrollOffset(scrollPercentage * maxContentScroll);
    
    setDragStartY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove as any);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove as any);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div className="absolute h-[971px] left-[246px] overflow-clip top-[147px] w-[1277px]">
      {/* Rectangle 1 - фон */}
      <div className="absolute bg-[#f5faff] h-[969.282px] left-0 top-0 w-[1278.53px]" />
      
      {/* Vse producty_1 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[293.68px] top-[44px] w-[289px]"
      >
        <OpticheskieKomponentyColumn1 />
      </motion.div>
      
      {/* Vse producty_2 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[622.6px] top-[44px] w-[289px]"
      >
        <OpticheskieKomponentyColumn2 />
      </motion.div>
      
      {/* Vse producty_3 */}
      <motion.div 
        animate={{ y: scrollOffset }}
        transition={{ duration: 0.3 }}
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[951.52px] top-[44px] w-[289px]"
      >
        <OpticheskieKomponentyColumn3 />
      </motion.div>
    </div>
  );
}

// Колонка 1 оптических компонентов
function OpticheskieKomponentyColumn1() {
  return (
    <>
      <Column title="Адаптеры оптические" items={[
        "Подраздел 1",
        "Подраздел 2"
      ]} />
      <Column title="Оптические преобразователи" items={[
        "GPS-over-Fiber",
        "LAN-over-Fiber",
        "RF-over-Fiber"
      ]} />
    </>
  );
}

// Колонка 2 оптических компонентов
function OpticheskieKomponentyColumn2() {
  return (
    <>
      <Column title="Оптические разветвители" items={[
        "PLC планарные",
        "FBT сплавные"
      ]} />
    </>
  );
}

// Колонка 3 оптических компонентов
function OpticheskieKomponentyColumn3() {
  return (
    <>
      <Column title="Оптические соединители" items={[
        "Подраздел 1",
        "Подраздел 2"
      ]} />
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
            <div className="content-stretch flex items-center px-[20px] py-[6px] relative w-full">
              <p 
                className="flex-[1_0_0] font-['Roboto_Condensed',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[16px] whitespace-pre-wrap"
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
