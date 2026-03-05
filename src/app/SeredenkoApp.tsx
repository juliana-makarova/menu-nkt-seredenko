import { useState } from "react";
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

          <div className="relative z-30">
            <MenuMain onProductsClick={() => setIsProductOpen(!isProductOpen)} isProductActive={isProductOpen} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuMain({ onProductsClick, isProductActive }: { onProductsClick: () => void; isProductActive: boolean }) {
  const menuItems = [
    { text: "Продукция", onClick: onProductsClick, isActive: isProductActive },
    { text: "Применение" },
    { text: "Производители" },
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
              : "px-[12px] py-[10px]"
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
    <div className="bg-white flex flex-col items-start pb-[12px] pt-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.15)] w-[289px]">
      <div className="w-full">
        <div className="flex items-center pb-[6px] pt-[12px] px-[20px] w-full">
          <p className="flex-1 font-['Roboto_Condensed',sans-serif] font-medium leading-[normal] text-[16px] text-black">
            {title}
          </p>
        </div>
      </div>

      {items.map((item, index) => (
        <button
          key={`${title}-${item}-${index}`}
          type="button"
          className="w-full text-left cursor-pointer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex items-center pb-[6px] pt-[6px] px-[20px] w-full">
            <p
              className="flex-1 font-['Roboto_Condensed',sans-serif] font-light leading-[normal] text-[16px]"
              style={{ color: hoveredIndex === index ? "#3D6BD0" : "black" }}
            >
              {item}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
