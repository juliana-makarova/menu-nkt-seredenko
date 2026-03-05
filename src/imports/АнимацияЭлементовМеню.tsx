import imgImg from "figma:asset/0994413d3af1202eddbaef7bb68d7e8d993e516b.png";
import imgImg1 from "figma:asset/6cb3fe99ec2911ae439a5dd1f3eb2032f795ead3.png";

function Img() {
  return (
    <div className="absolute h-[1080.531px] left-[-1.63px] top-[0.02px] w-[1728.859px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function Img1() {
  return (
    <div className="absolute h-[1113.063px] left-0 top-0 w-[1574px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg1} />
    </div>
  );
}

function Img2() {
  return (
    <div className="absolute h-[1113.063px] left-0 top-0 w-[1574px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg1} />
    </div>
  );
}

function Img3() {
  return (
    <div className="absolute h-[1113.063px] left-0 top-0 w-[1574px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg1} />
    </div>
  );
}

function Img4() {
  return (
    <div className="h-[1280.016px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg1} />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1113.063px] items-start left-0 overflow-clip top-0 w-[1574px]" data-name="Container">
      <Img4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[1113.063px] left-[80.81px] top-[131.02px] w-[1574px]" data-name="Container">
      <Img1 />
      <Img2 />
      <Img3 />
      <Container2 />
    </div>
  );
}

function Img5() {
  return (
    <div className="absolute h-[970.172px] left-0 top-0 w-[1574px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg1} />
    </div>
  );
}

function Img6() {
  return (
    <div className="absolute h-[970.172px] left-0 top-0 w-[1574px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg1} />
    </div>
  );
}

function Img7() {
  return (
    <div className="absolute h-[970.172px] left-0 top-0 w-[1574px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg1} />
    </div>
  );
}

function Img8() {
  return (
    <div className="h-[1279.938px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg1} />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[970.172px] items-start left-0 overflow-clip pt-[-193.344px] top-0 w-[1574px]" data-name="Container">
      <Img8 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[970.172px] left-[80.81px] top-[279.41px] w-[1574px]" data-name="Container">
      <Img5 />
      <Img6 />
      <Img7 />
      <Container4 />
    </div>
  );
}

function Container5() {
  return <div className="absolute bg-[#eaf3ff] h-[42.078px] left-[248.42px] top-[238.69px] w-[1109.141px]" data-name="Container" />;
}

function P() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[21.36px] top-[12px] w-[73.266px]" data-name="p">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">Продукция</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[41px] left-0 top-0 w-[116px]" data-name="Container">
      <P />
    </div>
  );
}

function P1() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[12px] top-[10px] w-[83.281px]" data-name="p">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">Применение</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[39px] left-[131px] top-px w-[107.281px]" data-name="Container">
      <P1 />
    </div>
  );
}

function P2() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[12px] top-[10px] w-[103.531px]" data-name="p">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">Производители</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[39px] left-[253.28px] top-px w-[127.531px]" data-name="Container">
      <P2 />
    </div>
  );
}

function P3() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[12px] top-[10px] w-[79.25px]" data-name="p">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">О компании</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[39px] left-[395.81px] top-px w-[103.25px]" data-name="Container">
      <P3 />
    </div>
  );
}

function P4() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[12px] top-[10px] w-[95.75px]" data-name="p">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">Производство</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[39px] left-[514.06px] top-px w-[119.75px]" data-name="Container">
      <P4 />
    </div>
  );
}

function P5() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[12px] top-[10px] w-[65.641px]" data-name="p">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">Контакты</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[39px] left-[648.81px] top-px w-[89.641px]" data-name="Container">
      <P5 />
    </div>
  );
}

function P6() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[12px] top-[10px] w-[48.078px]" data-name="p">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">Знания</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[39px] left-[753.45px] top-px w-[72.078px]" data-name="Container">
      <P6 />
    </div>
  );
}

function P7() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[12px] top-[10px] w-[59.25px]" data-name="p">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">События</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[39px] left-[840.53px] top-px w-[83.25px]" data-name="Container">
      <P7 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#eaf3ff] h-[41px] left-[248px] top-[237px] w-[1109px]" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Img9() {
  return (
    <div className="absolute h-[106.484px] left-0 top-0 w-[1574px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg1} />
    </div>
  );
}

function Img10() {
  return (
    <div className="absolute h-[106.484px] left-0 top-0 w-[1574px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg1} />
    </div>
  );
}

function Img11() {
  return (
    <div className="absolute h-[106.484px] left-0 top-0 w-[1574px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg1} />
    </div>
  );
}

function Img12() {
  return (
    <div className="h-[1279.891px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg1} />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col h-[106.484px] items-start left-0 overflow-clip top-0 w-[1574px]" data-name="Container">
      <Img12 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[106.484px] left-[80.81px] top-[131.02px] w-[1574px]" data-name="Container">
      <Img9 />
      <Img10 />
      <Img11 />
      <Container16 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white h-[1117px] left-0 overflow-clip top-[-112.5px] w-[1128px]" data-name="Container">
      <Img />
      <Container1 />
      <Container3 />
      <Container5 />
      <Container6 />
      <Container15 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="Анимация элементов меню">
      <Container />
    </div>
  );
}