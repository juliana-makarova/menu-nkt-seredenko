import { useState } from "react";
import { motion } from "motion/react";
import imgHeader from "../assets/0994413d3af1202eddbaef7bb68d7e8d993e516b.png";
import imgBackground from "../assets/6cb3fe99ec2911ae439a5dd1f3eb2032f795ead3.png";

type Section = {
  title: string;
  items: string[];
};

type ColumnDefinition = {
  blocks: Section[];
};

const columns: ColumnDefinition[] = [
  {
    blocks: [
      {
        title: "Коаксиальные",
        items: [
          "Коаксиальные соединители",
          "Коаксиальные кабели",
          "Коаксиальные кабельные сборки",
          "Коаксиальные переходы",
          "Аттенюаторы",
          "Согласованные нагрузки",
          "Делители и ответвители",
          "Изоляторы и циркуляторы",
          "Фильтры",
          "Антенны",
          "Грозозащита",
          "Комбайнеры и компоненты",
          "Переключатели",
          "Корректоры фазы",
          "Инжекторы питания",
          "Блокировки DC",
        ],
      },
    ],
  },
  {
    blocks: [
      {
        title: "Оптические",
        items: [
          "Оптические кабели",
          "Оптические соединители",
          "Оптические компоненты",
        ],
      },
      {
        title: "Электрические",
        items: [
          "Электрические кабели",
          "Кабели передачи данных",
        ],
      },
    ],
  },
  {
    blocks: [
      {
        title: "Волноводные",
        items: [
          "Коаксиально-волноводные переходы",
          "Волноводные секции",
          "Волноводные переходы",
          "Волноводные аттенюаторы",
          "Волноводные нагрузки",
          "Волноводне ответвители",
          "Волноводные переключатели",
          "Рупорные антенны",
        ],
      },
    ],
  },
  {
    blocks: [
      {
        title: "Инструменты",
        items: [
          "Для подготовки гофрированных кабелей",
          "Для монтажа ВЧ соединителей",
          "Моментные ключи",
          "Калибровочные наборы",
        ],
      },
      {
        title: "Аксессуары",
        items: [
          "Колпачки для соединителей",
          "Крепления FIMO для кабелей",
          "Вводные панели",
          "Кабельные вводы",
          "Заглушки",
          "Герметизиция",
        ],
      },
    ],
  },
];

export default function SeredenkoApp() {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isPrimenenieOpen, setIsPrimenenieOpen] = useState(false);
  const [isProizvoditeliOpen, setIsProizvoditeliOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white overflow-auto">
      <div className="hidden md:block w-[1728px] h-[1117px] min-w-[1728px] mx-auto">
        <div className="bg-white relative size-full overflow-hidden" data-name="Catalogue_comp">
          <div className="absolute h-[131px] left-[80.82px] top-0 w-[1574px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgHeader} />
            </div>
          </div>

          <div className="absolute h-[1113.073px] left-[80.82px] top-0 w-[1574px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute h-[115%] left-0 max-w-none top-0 w-full" src={imgBackground} />
              </div>
            </div>
          </div>

          <div className="absolute h-[970.182px] left-[80.82px] top-[148.39px] w-[1574px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
              <div className="absolute inset-0 overflow-hidden">
                <img
                  alt=""
                  className="absolute h-[131.93%] left-0 max-w-none top-[-19.93%] w-full"
                  src={imgBackground}
                />
              </div>
            </div>
          </div>

          <div className="absolute bg-[#eaf3ff] h-[42.093px] left-[248.43px] top-[107.68px] w-[1109.155px]" />

          {isProductOpen && (
            <div className="absolute h-[971px] left-[246px] overflow-clip top-[147px] w-[1277px] z-20">
              <div className="absolute bg-[#f5faff] h-[969.282px] left-0 top-0 w-[1278.53px]" />

              <div className="absolute left-[30px] top-[44px] right-[30px] flex gap-[20px] items-start">
                {columns.map((column, index) => (
                  <ColumnStack key={`column-${index}`} blocks={column.blocks} />
                ))}
              </div>
            </div>
          )}

          {isPrimenenieOpen && <PrimenenieMenuOpen />}
          {isProizvoditeliOpen && <ProizvoditeliMenuOpen />}

          <div className="relative z-30">
            <MenuMain
              onProductsClick={() => {
                const next = !isProductOpen;
                setIsProductOpen(next);
                if (next) {
                  setIsPrimenenieOpen(false);
                  setIsProizvoditeliOpen(false);
                }
              }}
              onPrimenenieClick={() => {
                const next = !isPrimenenieOpen;
                setIsPrimenenieOpen(next);
                if (next) {
                  setIsProductOpen(false);
                  setIsProizvoditeliOpen(false);
                }
              }}
              onProizvoditeliClick={() => {
                const next = !isProizvoditeliOpen;
                setIsProizvoditeliOpen(next);
                if (next) {
                  setIsProductOpen(false);
                  setIsPrimenenieOpen(false);
                }
              }}
              isProductActive={isProductOpen}
              isPrimenenieActive={isPrimenenieOpen}
              isProizvoditeliActive={isProizvoditeliOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

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
    { text: "События" },
  ];

  return (
    <div className="absolute bg-[#eaf3ff] content-stretch flex gap-[15px] items-center left-[248px] top-[106px] w-[1109px] h-[41px]">
      {menuItems.map((item, index) => (
        <div
          key={index}
          onClick={item.onClick}
          className={`content-stretch flex items-center justify-center ${
            index === 0
              ? `${item.isActive ? "bg-[#dceafc]" : ""} h-[41px] pb-[9px] pt-[11px] px-[21px] w-[116px]`
              : `${item.isActive ? "bg-[#dceafc]" : ""} px-[12px] py-[10px]`
          } relative shrink-0 ${item.onClick ? "cursor-pointer hover:bg-[#dceafc]" : ""}`}
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
      className="absolute bg-[#dceafc] left-[379px] top-[147px] w-[256px] z-20"
    >
      <div className="bg-[#dceafc] flex flex-col items-start w-[256px]">
        {items.map((item, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <button
              key={item}
              type="button"
              className="w-full cursor-pointer"
              style={{ backgroundColor: isHovered ? "#f5faff" : "transparent" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center justify-between px-[20px] py-[12px] w-full">
                <p
                  className="font-['Roboto_Condensed',sans-serif] font-medium leading-[normal] text-[16px] text-left flex-1"
                  style={{ color: isHovered ? "#3D6BD0" : "black" }}
                >
                  {item}
                </p>
                <svg className="ml-[10px] h-[10px] w-[8px] shrink-0" fill="none" viewBox="0 0 8 10">
                  <path d="M1 1L7 5L1 9" stroke={isHovered ? "#3D6BD0" : "black"} strokeWidth="1.5" />
                </svg>
              </div>
            </button>
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
      className="absolute bg-[#dceafc] left-[518px] top-[147px] w-[256px] z-20"
    >
      <div className="bg-[#dceafc] flex flex-col items-start w-[256px]">
        {items.map((item, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <button
              key={item}
              type="button"
              className="w-full cursor-pointer"
              style={{ backgroundColor: isHovered ? "#f5faff" : "transparent" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center justify-between px-[20px] py-[12px] w-full">
                <p
                  className="font-['Roboto_Condensed',sans-serif] font-medium leading-[normal] text-[16px] text-left flex-1"
                  style={{ color: isHovered ? "#3D6BD0" : "black" }}
                >
                  {item}
                </p>
                <svg className="ml-[10px] h-[10px] w-[8px] shrink-0" fill="none" viewBox="0 0 8 10">
                  <path d="M1 1L7 5L1 9" stroke={isHovered ? "#3D6BD0" : "black"} strokeWidth="1.5" />
                </svg>
              </div>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

function ColumnStack({ blocks }: { blocks: Section[] }) {
  return (
    <div className="flex flex-col gap-[24px] items-start w-[289px]">
      {blocks.map((block) => (
        <SectionCard key={block.title} title={block.title} items={block.items} />
      ))}
    </div>
  );
}

function SectionCard({ title, items }: Section) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-white flex flex-col items-start pb-[14px] pt-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.15)] w-[289px]">
      <div className="w-full">
        <div className="flex items-center pb-[8px] pt-[12px] pl-[20px] pr-[28px] w-full">
          <p className="flex-1 font-['Roboto_Condensed',sans-serif] font-medium leading-[normal] text-[16px] text-black">
            {title}
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-[4px]">
        {items.map((item, index) => (
          <button
            key={`${title}-${item}-${index}`}
            type="button"
            className="relative w-full text-left cursor-pointer py-[8px] pl-[20px] pr-[14px]"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <p
              className="font-['Roboto_Condensed',sans-serif] font-light leading-[1.25] text-[16px] whitespace-normal break-words pr-[16px]"
              style={{ color: hoveredIndex === index ? "#3D6BD0" : "black" }}
            >
              {item}
            </p>
            <span
              aria-hidden="true"
              className="absolute right-[10px] top-1/2 -translate-y-1/2"
              style={{ color: hoveredIndex === index ? "#3D6BD0" : "black" }}
            >
              <svg className="block h-[10px] w-[8px]" fill="none" viewBox="0 0 8 10">
                <path d="M1 1L7 5L1 9" stroke="currentColor" strokeWidth="1" />
              </svg>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
