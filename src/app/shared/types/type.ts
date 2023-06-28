interface MenuItem {
  title: string;
  items: string[];
}
interface typeDetail{
  id: number,
  title: string,
  price: string,
  image:string
}

interface Api {
  details: { title: string; image: string; price: string; active:boolean};
  submenu: MenuItem[];
  bonus: { title: string; img: string; }[];
  itemsMenu:{ title: string; img: string; backgroudImg: string; description: string};
  apiAbout: {title: string; img: string; id: number, des:string, bg: string, titleDes: string}
}
