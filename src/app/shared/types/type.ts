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

interface ApiMenu {
  details: { title: string; image: string; price: string; active:boolean}
  submenu: MenuItem[];
  bonus: { title: string; img: string; }[];
  itemsMenu:{ title: string; img: string; backgroudImg: string; description: String}
}
