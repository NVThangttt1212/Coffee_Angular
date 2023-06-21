import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  checkUsernameAvailability(username: string): Promise<boolean>{
    return new Promise((resolve) => {
          setTimeout(() => {
            const forbidenusername =  ['admin', 'thang12']
            const isAvailable = !forbidenusername.includes(username)
            resolve(isAvailable);
          }, 2000); // Giả lập thời gian chờ từ API
        });
  }

//-----------------------------------------------------------------
  apimenu = {
    submenu: [
      {
        title: 'cà phê',
        item: ['Cà Phê Phin', 'PhinDi', 'Cà Phê Espresso']
      },
      {
        title: 'FREEZE',
        item: ['Freeze Cà Phê Phin', 'Freeze không cà phê']
      },
      {
        title: 'Trà',
        item: ['Trà sen vàng mới', 'Trà thạch đào', 'Trà thanh đào', 'Trà thạch vải', 'Trà Nhiệt đới(mới)']
      },
      {
        title: 'Khác',
        item: ['bánh ngọt', 'cà phê đóng gói', 'thực đơn giao hàng']
      }
    ],
    //----------------------------------------------------------
    bonus: [
      { title: 'PHIN SỮA ĐÁ ĐẬM ĐÀ CHẤT PHIN! 29.000đ',
        img: './assets/img/haha.png'
      }
    ],
    //---------------------------------------------------------
    details: [
      {
        title: 'Cà Phê phin',
        price: '55000 VNĐ',
        image: 'assets/img/1c.jpg',
        active: true
      },
      {
        title: 'phindi kem sữa',
        price: '50000 VNĐ',
        image: 'assets/img/2c.jpg',
        active: false
      },
      {
        title: 'bạc xỉu',
        price: '50000 VNĐ',
        image: 'assets/img/3c.jpg',
        active: false
      },
      {
        title: 'cappicino',
        price: '50000 VNĐ',
        image: 'assets/img/4c.jpg',
        active: false
      },
      {
        title: 'caramel macchiato',
        price: '50000 VNĐ',
        image: 'assets/img/1c.jpg',
        active: false
      },
      {
        title: 'americano',
        price: '50000 VNĐ',
        image: 'assets/img/2c.jpg',
        active: false
      },
      {
        title: 'phindi choco',
        price: '50000 VNĐ',
        image: 'assets/img/3c.jpg',
        active: false
      },
      {
        title: 'espesso',
        price: '50000 VNĐ',
        image: 'assets/img/4c.jpg',
        active: false
      },
      {
        title: 'capuccino',
        price: '50000 VNĐ',
        image: 'assets/img/5c.jpg',
        active: false
      }
    ],
    //-----------------------------------------------------------
    hotDetail :[
      {
        title: 'cream',
        price: '55000 VNĐ',
        image: 'assets/img/haha.png',
        active: true
      },
      {
        title: 'freeze sô cô la ',
        price: '50000 VNĐ',
        image: 'assets/img/hehe.png',
        active: false
      },
      {
        title: 'freeze trà xanh',
        price: '50000 VNĐ',
        image: 'assets/img/hoho.png',
        active: false
      },
      {
        title: 'caramel phin',
        price: '50000 VNĐ',
        image: 'assets/img/k1.jpg',
        active: false
      },
      {
        title: 'classic phin freeze ',
        price: '50000 VNĐ',
        image: 'assets/img/k2.jpg',
        active: false
      },
      {
        title: 'freeze coolies',
        price: '50000 VNĐ',
        image: 'assets/img/k3.jpg',
        active: false
      },
      {
        title: 'freeze sô cô la ',
        price: '50000 VNĐ',
        image: 'assets/img/k4.jpg',
        active: false
      },
      {
        title: 'freeze trà xanh',
        price: '50000 VNĐ',
        image: 'assets/img/k5.jpg',
        active: false
      },
      {
        title: 'cookies & cream',
        price: '50000 VNĐ',
        image: 'assets/img/k6.jpg',
        active: false
      }
    ],
    //-----------------------------------------------------------
    teaDetail :[
      {
        title: 'Trà Sen Vàng',
        price: '55000 VNĐ',
        image: 'assets/img/t1.jpg',
        active: true
      },
      {
        title: 'trà thạch vải',
        price: '50000 VNĐ',
        image: 'assets/img/t2.jpg',
        active: false
      },
      {
        title: 'trà thạch đào',
        price: '50000 VNĐ',
        image: 'assets/img/t3.jpg',
        active: false
      },
      {
        title: 'trà tuyết xoài ',
        price: '50000 VNĐ',
        image: 'assets/img/t4.jpg',
        active: false
      },
      {
        title: 'trà xanh đậu đỏ ',
        price: '50000 VNĐ',
        image: 'assets/img/t5.png',
        active: false
      },
      {
        title: 'trà tuyết phúc bồn tử',
        price: '50000 VNĐ',
        image: 'assets/img/t6.png',
        active: false
      },
      {
        title: 'trà sen vàng(sen)',
        price: '50000 VNĐ',
        image: 'assets/img/t1.jpg',
        active: false
      },
      {
        title: 'trà sen vàng(củ năng)',
        price: '50000 VNĐ',
        image: 'assets/img/t4.jpg',
        active: false
      },
      {
        title: 'trà thanh đào',
        price: '50000 VNĐ',
        image: 'assets/img/t7.jpg',
        active: false
      }
    ],



    itemsMenu: [
      {
        id: 1,
        title: 'Cà Phê',
        des: 'Cà phê là một loại thức uống phổ biến trên toàn thế giới, được chế biến từ hạt cà phê rang và xay. Nó có một lịch sử lâu đời và đóng vai trò quan trọng trong văn hóa và nền kinh tế của nhiều quốc gia.\n' +
          '\n' +
          'Cà phê thường được trồng trên các vùng cao nguyên, trong đó có những địa điểm nổi tiếng như Brazil, Colombia, Ethiopia, và Việt Nam. Cà phê có nhiều loại hạt, như Arabica và Robusta, mỗi loại mang lại hương vị và đặc tính riêng.\n' +
          '\n' +
          'Quá trình chế biến cà phê bao gồm rang hạt và xay hạt. Quá trình rang tạo ra hương thơm và hương vị đặc trưng của cà phê. Cà phê có thể được rang theo nhiều phương pháp khác nhau, từ rang bằng tay trong một cái chảo nhỏ cho đến sử dụng máy rang công nghiệp.\n' +
          '\n' +
          'Cà phê có thể được pha chế theo nhiều cách khác nhau, từ cà phê đen truyền thống cho đến các thức uống pha phin, espresso, cappuccino, latte, và nhiều hơn nữa. Mỗi phương pháp pha chế mang lại hương vị và cấu trúc khác nhau, tạo ra sự đa dạng trong trải nghiệm cà phê.',
        colorText: 'FAEBD7',
        img: './assets/img/haha.png',
        backgroudImg: '../../../../assets/img/menu-PSD-bg.jpg',
        description: 'Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.'
      },
      {
        id:2,
        title: 'FREEZE',
        des: 'Tham khảo cách làm Freeze trà xanh theo chuẩn hương vị Highlands Coffee\n' +
          '14\n' +
          'January 2022\n' +
          'Tham khảo cách làm Freeze trà xanh theo chuẩn hương vị Highlands Coffee\n' +
          ' \n' +
          '\n' +
          'Freeze trà xanh được coi là một trong những đồ uống “hot” nhất tại các chuỗi của hàng của Highlands Coffee. Khi nhắc tới freeze trà xanh, mọi người thường bị hấp dẫn bởi màu xanh tươi mát – màu xanh tạo cảm giác nhẹ nhàng, thư thái và căng tràn sức sống. Nếu bạn là tín đồ của những ly freeze trà xanh tươi ngon, thanh mát nhưng lại không thể sắp xếp thời gian đến thưởng thức chúng tại Highlands Coffee, thì bài viết này chắc chắn dành cho bạn. Trong bài viết này, Kendesign sẽ bật mí cho bạn cách tạo ra những ly freeze trà xanh thơm mát chỉ với một vài bước đơn giản.\n' +
          ' \n' +
          '\n' +
          'Freeze trà xanh là gì?\n' +
          'Freeze trà xanh là một thức uống mát lạnh, được chế biến từ những lá trà xanh thượng hạng trên cao nguyên Việt Nam. Về bản chất, Freeze đá xanh là sự kết hợp hài hòa của trà xanh, đá xay, thạch trà, được phủ phía trên một lớp kem tươi tạo cảm giác bắt mắt. Đây là thức uống rất thích hợp vào những ngày hè nóng bức bởi nó có tác dụng “giải nhiệt” rất tốt. ',
        colorText: '006400',
        img: './assets/img/hehe.png',
        backgroudImg: '../../../../assets/img/bg2.jpg',
        description: 'Sảng khoái với thức uống đá xay phong cách Việt. Freeze là thức uống đá xay mát lạnh được pha chế từ những nguyên liệu thuần túy của Việt Nam'
      },
      {
        id: 3  ,
        title: 'Trà',
        des:'Trà là thức uống phổ biến thứ 2 trên thế giới, chỉ sau nước. Tất cả các loại trà trên thế giới đều được làm từ một loại cây, gọi là cây trà (Cemellia Senensis), mọc trên các cao nguyên vùng nhiệt đới. Mặc dù là loài thân gỗ nhưng khi canh tác người ta thường trồng trà thành luống và liên tục đốn cắt để cây chỉ thấp ngang bụng, dễ thu hoạch búp và cho năng suất cao.\n' +
          '\n' +
          'Trà vằng, trà vối, trà atiso, trà cung đình Huế… không phải là trà vì không làm từ cây trà.',
        img: './assets/img/hoho.png',
        colorText: 'fff',
        backgroudImg: '../../../../assets/img/bg33.jpg',
        description: 'Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.'
      }
    ],
    getDataById(id: number): Observable<any> {
      const item = this.itemsMenu.find(item => item.id === id);
      return of(item)
    }

  };
  ApiNews = [
    {
      img: './assets/img/n1.jpg',
      title: 'mới! trà tuyết hightlands coffee',
      date: '17/05/2023, 12:09'
    },
    {
      img: './assets/img/n2.jpg',
      title: 'tri ân khách hàng - hightlands coffee',
      date: '04/05/2023, 15:37'
    },
    {
      img: './assets/img/n3.jpg',
      title: 'vị cool sảng khoái, trà dưa hấu vải',
      date: '17/03/2023, 18:42'
    },
    {
      img: './assets/img/n4.png',
      title: 'vị cool sảng khoái, trà dưa hấu vải',
      date: '17/03/2023, 18:42'
    },
    {
      img: './assets/img/n5.jpg',
      title: 'mạnh mẽ làm điều mình yêu!',
      date: '06/03/2023, 08:21'
    },
    {
      img: './assets/img/n1.jpg',
      title: 'mới! trà tuyết hightlands coffee',
      date: '17/05/2023, 12:09'
    },
    {
      img: './assets/img/n2.jpg',
      title: 'tri ân khách hàng - hightlands coffee',
      date: '04/05/2023, 15:37'
    },
    {
      img: './assets/img/n3.jpg',
      title: 'vị cool sảng khoái, trà dưa hấu vải',
      date: '17/03/2023, 18:42'
    },
    {
      img: './assets/img/n4.png',
      title: 'vị cool sảng khoái, trà dưa hấu vải',
      date: '17/03/2023, 18:42'
    },
    {
      img: './assets/img/n5.jpg',
      title: 'mạnh mẽ làm điều mình yêu!',
      date: '06/03/2023, 08:21'
    },
    {
      img: './assets/img/n1.jpg',
      title: 'mới! trà tuyết hightlands coffee',
      date: '17/05/2023, 12:09'
    },
    {
      img: './assets/img/n2.jpg',
      title: 'tri ân khách hàng - hightlands coffee',
      date: '04/05/2023, 15:37'
    },
    {
      img: './assets/img/n3.jpg',
      title: 'vị cool sảng khoái, trà dưa hấu vải',
      date: '17/03/2023, 18:42'
    },
    {
      img: './assets/img/n4.png',
      title: 'vị cool sảng khoái, trà dưa hấu vải',
      date: '17/03/2023, 18:42'
    },
    {
      img: './assets/img/n5.jpg',
      title: 'mạnh mẽ làm điều mình yêu!',
      date: '06/03/2023, 08:21'
    },
    {
      img: './assets/img/n1.jpg',
      title: 'mới! trà tuyết hightlands coffee',
      date: '17/05/2023, 12:09'
    },
    {
      img: './assets/img/n2.jpg',
      title: 'tri ân khách hàng - hightlands coffee',
      date: '04/05/2023, 15:37'
    },
    {
      img: './assets/img/n3.jpg',
      title: 'vị cool sảng khoái, trà dưa hấu vải',
      date: '17/03/2023, 18:42'
    },
    {
      img: './assets/img/n4.png',
      title: 'vị cool sảng khoái, trà dưa hấu vải',
      date: '17/03/2023, 18:42'
    },
    {
      img: './assets/img/n5.jpg',
      title: 'mạnh mẽ làm điều mình yêu!',
      date: '06/03/2023, 08:21'
    },
    {
      img: './assets/img/n1.jpg',
      title: 'mới! trà tuyết hightlands coffee',
      date: '17/05/2023, 12:09'
    },
    {
      img: './assets/img/n2.jpg',
      title: 'tri ân khách hàng - hightlands coffee',
      date: '04/05/2023, 15:37'
    },
    {
      img: './assets/img/n3.jpg',
      title: 'vị cool sảng khoái, trà dưa hấu vải',
      date: '17/03/2023, 18:42'
    },
    {
      img: './assets/img/n4.png',
      title: 'vị cool sảng khoái, trà dưa hấu vải',
      date: '17/03/2023, 18:42'
    },
    {
      img: './assets/img/n5.jpg',
      title: 'mạnh mẽ làm điều mình yêu!',
      date: '06/03/2023, 08:21'
    },
    {
      img: './assets/img/n1.jpg',
      title: 'mới! trà tuyết hightlands coffee',
      date: '17/05/2023, 12:09'
    },
    {
      img: './assets/img/n2.jpg',
      title: 'tri ân khách hàng - hightlands coffee',
      date: '04/05/2023, 15:37'
    },
    {
      img: './assets/img/n3.jpg',
      title: 'vị cool sảng khoái, trà dưa hấu vải',
      date: '17/03/2023, 18:42'
    },
    {
      img: './assets/img/n4.png',
      title: 'vị cool sảng khoái, trà dưa hấu vải',
      date: '17/03/2023, 18:42'
    },
    {
      img: './assets/img/n5.jpg',
      title: 'mạnh mẽ làm điều mình yêu!',
      date: '06/03/2023, 08:21'
    }
  ]
  apiMutual =[
    {
      img: './assets/img/c1.jpg',
      title: 'đêm trăng diệu kỳ cùng hightlands coffee',
      date: '10/09/2022, 19:44'
    },
    {
      img: './assets/img/c2.jpg',
      title: 'mag chút yêu thương mát lành đến miền ninh thuận nhiều nắng gió',
      date: '21/08/2022, 19:36'
    },
    {
      img: './assets/img/c3.jpg',
      title: 'hiến máu nhân dạo thường niên - tự hào dòng máu việt',
      date: '27/08/2022, 19:23'
    },{
      img: './assets/img/c4.jpg',
      title: 'trao tặn bánh - trọn thương yêu',
      date: '08/08/2022, 14:21'
    },{
      img: './assets/img/c5.png',
      title: 'highlands coffee cùng ý tưởng " lồng đèn xanh " thắp sáng "trung thu xanh" cho hơn...',
      date: '13/09/2019, 15:59'
    },
    {
      img: './assets/img/c5.png',
      title: 'trung thu yêu thương - lớp học cho em 2017',
      date: '09/10/2017, 21:39'
    },
  ]
  constructor() { }
}
