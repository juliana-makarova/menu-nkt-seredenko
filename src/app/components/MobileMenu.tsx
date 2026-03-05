import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight, ChevronLeft } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  const [currentView, setCurrentView] = useState<'main' | 'products' | 'productDetail'>('main');
  const [selectedProduct, setSelectedProduct] = useState<number>(0);

  const mainMenuItems = [
    { text: "Продукция", active: true },
    { text: "Применение", active: false },
    { text: "Производители", active: false },
    { text: "О компании", active: false },
    { text: "Производство", active: false },
    { text: "Контакты", active: false },
  ];

  const productMenuItems = [
    { text: "Все продукты" },
    { text: "Соединители" },
    { text: "Кабели" },
    { text: "Антенны" },
    { text: "Пассивные компоненты" },
    { text: "Фильтры" },
    { text: "Кабельные вводы, крепления, герметизация" },
    { text: "Кабельные сборки" },
    { text: "Волноводные компоненты" },
    { text: "Оптические компоненты" },
    { text: "Делители, ответвители и разветвители" },
    { text: "Переходы" },
    { text: "Инструменты" },
    { text: "Комбайнеры и компоненты" },
    { text: "Грозозащита" },
  ];

  const productDetails: Record<number, Array<{ title: string; items: string[] }>> = {
    0: [ // Все продукты
      { title: "Радиочастотные соединители", items: ["Кабельные и приборно-кабельные соединители", "Приборные соединители", "Соединители для печатных плат"] },
      { title: "Соединители для радиоизлучающих кабелей", items: [] },
      { title: "Соединители оптические", items: ["Защищенные оптические соединители", "Стандартные оптические соединители", "Гибридные оптические соединители", "Соединители полевого монтажа"] },
      { title: "Оптические преобразователи", items: ["RF-over-Fiber"] },
      { title: "Коаксиальные кабели", items: ["Сверхгибкие", "Гибкие", "Полугибкие", "Жесткие"] },
      { title: "Оптические кабели", items: ["Защищенные оптические кабели", "Стандартные оптические кабели"] },
      { title: "Кабели электрические", items: ["Автомобильные", "Индустриальные"] },
      { title: "Кабели передачи данных", items: [] },
      { title: "Телекоммуникационные кабели SPUMA", items: [] },
      { title: "Антенны", items: ["Wi-Fi", "GPS", "LTE", "GNSS", "Bluetooth", "ISM", "UWB"] },
      { title: "Антенные кабели", items: [] },
      { title: "Аттенюаторы", items: [] },
      { title: "Нагрузки", items: ["Коаксиальные", "Волноводные"] },
      { title: "Фильтры коаксиальные", items: ["Полосовые", "Режекторные", "Подавители гармоник"] },
      { title: "Комбайнеры и дуплексеры", items: [] },
      { title: "Фильтры волноводные", items: ["Полосовые", "Режекторные", "Подавители гармоник"] },
      { title: "Кабельные вводы", items: [] },
      { title: "Крепления", items: [] },
      { title: "Герметизация", items: [] },
      { title: "Кабельные сборки", items: ["Коаксиальные", "Оптические", "Электрические", "Гибридные"] },
      { title: "Волноводы", items: [] },
      { title: "Переходы волноводные", items: [] },
      { title: "Повороты волноводные", items: [] },
      { title: "Фланцы", items: [] },
      { title: "Оптические адаптеры", items: [] },
      { title: "Оптические аттенюаторы", items: [] },
      { title: "Оптические переходы", items: [] },
      { title: "Делители мощности", items: [] },
      { title: "Ответвители", items: [] },
      { title: "Переходы", items: [] },
      { title: "Инструменты", items: [] },
      { title: "Комбайнеры и компоненты", items: [] },
      { title: "Грозозащита", items: [] },
      { title: "Изоляторы и циркуляторы", items: [] },
      { title: "Инжекторы питания", items: [] },
      { title: "Блокировки DC", items: [] },
    ],
    1: [ // Соединители
      { title: "Радиочастотные соединители", items: ["Кабельные и приборно-кабельные соединители", "Приборные соединители", "Соединители для печатных плат"] },
      { title: "Соединители для радиоизлучающих кабелей", items: [] },
      { title: "Соединители оптические", items: ["Защищенные оптические соединители", "Стандартные оптические соединители", "Гибридные оптические соединители", "Соединители полевого монтажа"] },
      { title: "Оптические преобразователи", items: ["RF-over-Fiber"] },
    ],
    2: [ // Кабели
      { title: "Коаксиальные кабели", items: ["Сверхгибкие", "Гибкие", "Полугибкие", "Жесткие"] },
      { title: "Оптические кабели", items: ["Защищенные оптические кабели", "Стандартные оптические кабели"] },
      { title: "Кабели электрические", items: ["Автомобильные", "Индустриальные"] },
      { title: "Кабели передачи данных", items: [] },
      { title: "Телекоммуникационные кабели SPUMA", items: [] },
    ],
    3: [ // Антенны
      { title: "Антенны", items: ["Wi-Fi", "GPS", "LTE", "GNSS", "Bluetooth", "ISM", "UWB"] },
      { title: "Антенные кабели", items: [] },
    ],
    4: [ // Пассивные компоненты
      { title: "Аттенюаторы", items: [] },
      { title: "Нагрузки", items: ["Коаксиальные", "Волноводные"] },
    ],
    5: [ // Фильтры
      { title: "Фильтры коаксиальные", items: ["Полосовые", "Режекторные", "Подавители гармоник"] },
      { title: "Комбайнеры и дуплексеры", items: [] },
      { title: "Фильтры волноводные", items: ["Полосовые", "Режекторные", "Подавители гармоник"] },
    ],
    6: [ // Кабельные вводы
      { title: "Кабельные вводы", items: [] },
      { title: "Крепления", items: [] },
      { title: "Герметизация", items: [] },
    ],
    7: [ // Кабельные сборки
      { title: "Кабельные сборки", items: ["Коаксиальные", "Оптические", "Электрические", "Гибридные"] },
    ],
    8: [ // Волноводные компоненты
      { title: "Волноводы", items: [] },
      { title: "Переходы волноводные", items: [] },
      { title: "Повороты волноводные", items: [] },
      { title: "Фланцы", items: [] },
    ],
    9: [ // Оптические компоненты
      { title: "Оптические адаптеры", items: [] },
      { title: "Оптические аттенюаторы", items: [] },
      { title: "Оптические переходы", items: [] },
    ],
    10: [ // Делители
      { title: "Делители мощности", items: [] },
      { title: "Ответвители", items: [] },
    ],
    11: [ // Переходы
      { title: "Переходы", items: [] },
    ],
    12: [ // Инструменты
      { title: "Инструменты", items: [] },
    ],
    13: [ // Комбайнеры
      { title: "Комбайнеры и компоненты", items: [] },
    ],
    14: [ // Грозозащита
      { title: "Грозозащита", items: [] },
    ],
  };

  const handleMainMenuClick = (item: any) => {
    if (item.text === "Продукция") {
      setCurrentView('products');
    }
  };

  const handleProductClick = (index: number) => {
    setSelectedProduct(index);
    setCurrentView('productDetail');
  };

  const handleBack = () => {
    if (currentView === 'productDetail') {
      setCurrentView('products');
    } else if (currentView === 'products') {
      setCurrentView('main');
    }
  };

  const handleClose = () => {
    setCurrentView('main');
    onToggle();
  };

  return (
    <>
      {/* Бургер кнопка */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 w-12 h-12 bg-[#dceafc] rounded-lg flex items-center justify-center"
        onClick={onToggle}
      >
        <Menu className="w-6 h-6 text-[#3d6bd0]" />
      </button>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/50 z-40"
              onClick={handleClose}
            />

            {/* Menu Container */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="md:hidden fixed left-0 top-0 h-full w-full bg-white z-50 overflow-y-auto"
            >
              {/* Main Menu */}
              {currentView === 'main' && (
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold">Меню</h2>
                    <button onClick={handleClose} className="p-2">
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="flex-1">
                    {mainMenuItems.map((item, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-4 border-b border-gray-100 ${
                          item.active ? 'cursor-pointer hover:bg-gray-50' : 'text-gray-400'
                        }`}
                        onClick={() => item.active && handleMainMenuClick(item)}
                      >
                        <span className="text-base font-['Roboto_Condensed',sans-serif]">{item.text}</span>
                        {item.active && <ChevronRight className="w-5 h-5 text-gray-400" />}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Products Menu */}
              {currentView === 'products' && (
                <div className="flex flex-col h-full bg-[#dceafc]">
                  <div className="flex items-center justify-between p-4 border-b border-[#c5dbf7]">
                    <button onClick={handleBack} className="p-2">
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <h2 className="text-lg font-semibold">Продукция</h2>
                    <button onClick={handleClose} className="p-2">
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="flex-1">
                    {productMenuItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border-b border-[#c5dbf7] cursor-pointer hover:bg-[#c5dbf7]"
                        onClick={() => handleProductClick(index)}
                      >
                        <span className="text-base font-['Roboto_Condensed',sans-serif]">{item.text}</span>
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Product Detail */}
              {currentView === 'productDetail' && (
                <div className="flex flex-col h-full bg-[#f5faff]">
                  <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-[#f5faff] z-10">
                    <button onClick={handleBack} className="p-2">
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <h2 className="text-lg font-semibold">{productMenuItems[selectedProduct].text}</h2>
                    <button onClick={handleClose} className="p-2">
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="flex-1 p-4">
                    {productDetails[selectedProduct]?.map((section, idx) => (
                      <div key={idx} className="mb-6">
                        <h3 className="text-base font-semibold mb-3 font-['Roboto_Condensed',sans-serif]">
                          {section.title}
                        </h3>
                        {section.items.length > 0 && (
                          <ul className="space-y-2">
                            {section.items.map((item, itemIdx) => (
                              <li 
                                key={itemIdx} 
                                className="text-sm font-light pl-4 font-['Roboto_Condensed',sans-serif]"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
