import { useState } from "react";
import {
  BarChart3,
  ChevronUp,
  Search,
  ShoppingCart,
  Star,
  UserCircle,
} from "lucide-react";
import iconArrow from "../assets/product/icon-arrow.svg";
import iconEye from "../assets/product/icon-eye.svg";
import iconFile from "../assets/product/icon-file.svg";
import logoNkt from "../assets/product/logo-nkt.svg";
import productImage from "../assets/product/image-tovar-1.png";
import relatedImage from "../assets/product/image-tovar-related.png";

const files = [
  "HUBER+SUHNER 16_MMCX-50-2-13111_OE DataSheet",
  "HUBER+SUHNER 16_MMCX-50-2-13111_OE OutlineDrawing (1)",
  "HUBER+SUHNER 16_MMCX-50-2-13111_OE CatalogueDrawing (1)",
  "HUBER+SUHNER 16_MMCX-50-2-13111_OE AssemblyInstruction",
];

const specs = [
  ["Мнемоника", "16 MMCX-50-2-13/111 OE"],
  ["Артикул", "84032569"],
  ["Бренд:", "H+S"],
  ["Производитель:", "HUBER+SUHNER"],
  ["Серия:", "MMCX"],
  ["Полярность:", "вилка"],
  ["Конфигурация:", "угловая"],
  ["Тип:", "кабельная"],
  ["Тип кабеля:", "EZ 86 / Sucoform 86 / Multiflex 86"],
  ["Монтаж центрального контакта:", "пайка"],
  ["Монтаж внешнего контакта:", "пайка"],
  ["Волновое сопротивление, Ом:", "50"],
  ["Верхняя частота (для серии), ГГц:", "6"],
  ["Нижняя рабочая температура, °C:", "-55"],
  ["Верхняя рабочая температура, °C", "155"],
  ["Кабельная группа:", "У3 / У11 / У16"],
  ["Краткое описание:", "MMCX вилка кабельная угловая"],
];

const relatedProducts = Array.from({ length: 4 }, (_, index) => ({
  id: index,
  title: "Соединитель коаксиальный NKT PRO NK-RM_MMCX_2_13",
}));

function Header() {
  const nav = ["Каталог", "Применение", "Производители", "О компании", "Производство", "Новости", "Контакты"];

  return (
    <header className="product-header">
      <div className="product-header__top">
        <a className="product-header__logo" href="../">
          <img src={logoNkt} alt="НКТ" />
        </a>

        <label className="product-header__search">
          <span>Поиск по сайту</span>
          <Search size={20} strokeWidth={2.1} />
        </label>

        <div className="product-header__contacts">
          <strong>+7 495 787 0550</strong>
          <span>10:00-18:00</span>
          <i />
          <span>Пн-Пт</span>
        </div>

        <div className="product-header__tools" aria-label="Инструменты">
          <button type="button"><Star size={24} /><span>Списки товаров</span></button>
          <button type="button"><BarChart3 size={25} /><span>Сравнить</span></button>
          <button type="button"><ShoppingCart size={24} /><span>Корзина</span></button>
          <button type="button"><UserCircle size={25} /><span>Личный кабинет</span></button>
        </div>
      </div>

      <nav className="product-header__nav" aria-label="Основная навигация">
        {nav.map((item, index) => (
          <a className={index === 0 ? "is-active" : ""} href="#" key={item}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

function BuyPanel({ className = "" }: { className?: string }) {
  return (
    <aside className={`buy-panel ${className}`}>
      <h2>Цена по запросу</h2>
      <button className="buy-panel__request" type="button">Запросить цену</button>
      <strong className="buy-panel__stock">Доступно к заказу</strong>
      <div className="buy-panel__counter" aria-label="Количество">
        <button type="button">-</button>
        <span>1</span>
        <button type="button">+</button>
      </div>
      <p>Минимальный заказ 1 шт.</p>
      <button className="buy-panel__cart" type="button">В корзину</button>
      <button className="buy-panel__compare" type="button">Сравнить</button>
      <div className="buy-panel__manager">
        <h3>Менеджер по товару</h3>
        <span>Павел Мельник</span>
        <span>pavel.melnik@nkt.ru</span>
        <span>+7 495 7870550 доб.9999</span>
      </div>
    </aside>
  );
}

function FileRow({ name }: { name: string }) {
  return (
    <div className="file-row">
      <div className="file-row__meta">
        <span>PDF</span>
        <p>{name}</p>
      </div>
      <div className="file-row__actions">
        <button type="button">Просмотр <img src={iconEye} alt="" /></button>
        <button type="button">Скачать <img src={iconFile} alt="" /></button>
      </div>
    </div>
  );
}

function ProductIntro() {
  return (
    <section className="product-intro">
      <div className="product-gallery">
        <div className="product-gallery__main">
          <img src={productImage} alt="Соединитель коаксиальный H+S" />
        </div>
        <div className="product-gallery__thumbs">
          {[0, 1, 2].map((item) => (
            <button className={item === 0 ? "is-active" : ""} type="button" key={item}>
              <img src={productImage} alt="" />
            </button>
          ))}
        </div>
      </div>

      <dl className="product-summary">
        <div><dt>Мнемоника</dt><dd>16 MMCX-50-2-13/111 OE</dd></div>
        <div><dt>Артикул</dt><dd>84032569</dd></div>
        <div><dt>Производитель</dt><dd>H+S</dd></div>
        <div><dt>Серия</dt><dd>MMCX</dd></div>
        <div><dt>Конфигурация</dt><dd>Угловая</dd></div>
        <div><dt>Тип кабеля</dt><dd>EZ 86 / Sucoform 86 / Multiflex 86</dd></div>
        <div><dt>Краткое описание</dt><dd>MMCX вилка кабельная угловая</dd></div>
      </dl>
    </section>
  );
}

function ProductFiles() {
  return (
    <section className="content-card product-files">
      <h2>Файлы</h2>
      <div className="product-files__grid">
        {files.map((file) => <FileRow name={file} key={file} />)}
      </div>
      <button className="text-link text-link--files" type="button">
        Посмотреть все файлы <img src={iconArrow} alt="" />
      </button>
    </section>
  );
}

function Description() {
  return (
    <section className="content-card product-description">
      <h2>Описание товара</h2>
      <p>
        16 MMCX-50-2-13/111 OE — угловая кабельная вилка MMCX (male) Huber+Suhner
        для гибких, формуемых вручную и полужестких кабелей сечения 0.086 дюйма.
        Центральный контакт и корпус соединителя под пайку. Для применения внутри
        аппаратуры или в помещении...
      </p>
      <button className="text-link" type="button">Читать далее</button>
    </section>
  );
}

function Specs() {
  return (
    <section className="content-card product-specs">
      <h2>Характеристики 16 MMCX-50-2-13/111 OE</h2>
      <dl>
        {specs.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Faq() {
  const [openItems, setOpenItems] = useState([0]);
  const items = [
    {
      question: "Совместима ли данная вилка с кабелями RG-316 и RG-178?",
      answer:
        "Да, вилка MMCX-50-2-13/111 OE совместима с кабелями RG-316 и RG-178. Это подтверждается данными из технической документации и спецификаций MMCX-разъёмов.",
    },
    {
      question: "RG-316 и RG-178 — подойдут ли к вилке MMCX-50-2-13/111 OE?",
      answer:
        "RG-316 и RG-178 — подойдут ли к вилке MMCX-50-2-13/111 OE? Для прототипа этот текст дублирует вопрос и показывает, как блок раскрывается при клике.",
    },
    {
      question: "Как правильно припаять центральный контакт вилки к кабелю?",
      answer:
        "Как правильно припаять центральный контакт вилки к кабелю? В рабочей версии здесь может быть инструкция по подготовке кабеля, пайке и проверке соединения.",
    },
    {
      question: "Какие типичные ошибки возникают при монтаже этой вилки?",
      answer:
        "Какие типичные ошибки возникают при монтаже этой вилки? Для наглядности текст раскрытого ответа занимает несколько строк и помогает проверить поведение аккордеона.",
    },
  ];
  const toggleItem = (index: number) => {
    setOpenItems((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  };

  return (
    <section className="content-card product-faq">
      <h2>FAQ</h2>
      {items.map((item, index) => {
        const isOpen = openItems.includes(index);
        return (
          <div className={`faq-item ${isOpen ? "is-open" : ""}`} key={item.question}>
            <button type="button" onClick={() => toggleItem(index)} aria-expanded={isOpen}>
              {isOpen ? <ChevronUp size={24} /> : <img className="faq-item__arrow" src={iconArrow} alt="" />}
              {item.question}
            </button>
            {isOpen && <p>{item.answer}</p>}
          </div>
        );
      })}
    </section>
  );
}

function RelatedProducts() {
  return (
    <section className="related-products" id="related-products">
      <h2>Похожие товары</h2>
      <div className="related-products__grid">
        {relatedProducts.map((product) => (
          <article className="related-card" key={product.id}>
            <div className="related-card__image">
              <img src={relatedImage} alt="" />
            </div>
            <h3>{product.title}</h3>
            <span>Цена по запросу</span>
            <strong>Доступно к заказу</strong>
            <div className="related-card__counter">
              <button type="button">-</button>
              <span>1</span>
              <button type="button">+</button>
            </div>
            <small>Минимальный заказ 1 шт.</small>
            <button className="related-card__cart" type="button">В корзину</button>
            <button className="related-card__compare" type="button">Сравнить</button>
            <button className="related-card__list" type="button">Добавить в список</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ProductPage() {
  return (
    <div className="product-page">
      <Header />
      <main className="product-shell">
        <div className="breadcrumbs">
          Главная <span /> Каталог <span /> Компоненты РЭА <span /> ВЧ соединители и компоненты <span />
          Радиочастотные соединители <span /> <a href="#">Соединитель коаксиальный H+S 16 MMCX-50-2-13/111 OE</a>
        </div>

        <h1>Соединитель коаксиальный H+S 16 MMCX-50-2-13/111 OE</h1>

        <div className="product-scroll-zone">
          <div className="product-content">
            <ProductIntro />
            <ProductFiles />
            <Description />
            <Specs />
            <Faq />
          </div>
          <BuyPanel className="buy-panel--sticky" />
        </div>

        <RelatedProducts />
      </main>
      <footer className="product-footer" />
    </div>
  );
}
