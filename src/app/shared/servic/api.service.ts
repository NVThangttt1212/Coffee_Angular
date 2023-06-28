import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

//-----------------------------------------------------------------
  // handle inject data
  private card: Subject<number> = new Subject<number>();

  getCard(): Observable<number> {
    return this.card.asObservable();
  }

  setCard(value: number): void {
    this.card.next(value);
  }

  // handle cart khi mà 2 component mặc định chưa được hiển thị cùng nhau dùng BehaviorSubject
  private product: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  getProduct(): Observable<any> {
    return this.product.asObservable();
  }

  setProduct(value: any): void {
    this.product.next(value);
  }

  private numberProduct: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  getNumberProduct(): Observable<any> {
    return this.numberProduct.asObservable();
  }

  setNumberProduct(value: any): void {
    this.numberProduct.next(value);
  }

  //handle lấy ra tiền của từng size
  private selectedSizeValue: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  getSelectedSizeValue(): Observable<number> {
    return this.selectedSizeValue.asObservable();
  }

  setSelectedSizeValue(value: number): void {
    this.selectedSizeValue.next(value);
  }
  API: any ={
    apiProduct: [
        {
          id: 1,
          title: 'Cà Phê phin',
          price: { sizeS: 55000 ,sizeM: 60000,sizeL: 65000},
          image: 'assets/img/1c.jpg',
          des:'Một thức uống ngon lạ miệng bởi sự kết hợp hoàn hảo giữa cookies sô cô la giòn xốp cùng hỗn hợp sữa tươi cùng sữa đặc đem say với đá viên, và cuối cùng không thể thiếu được chính là lớp kem whip mềm mịn cùng cookies sô cô la say nhuyễn.'
        },
        {
          id: 2,
          title: 'phindi kem sữa',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/2c.jpg',
          des:'Một thức uống ngon lạ miệng bởi sự kết hợp hoàn hảo giữa cookies sô cô la giòn xốp cùng hỗn hợp sữa tươi cùng sữa đặc đem say với đá viên, và cuối cùng không thể thiếu được chính là lớp kem whip mềm mịn cùng cookies sô cô la say nhuyễn.'

        },
        {
          id: 3,
          title: 'bạc xỉu',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/3c.jpg',
          des:'Một thức uống ngon lạ miệng bởi sự kết hợp hoàn hảo giữa cookies sô cô la giòn xốp cùng hỗn hợp sữa tươi cùng sữa đặc đem say với đá viên, và cuối cùng không thể thiếu được chính là lớp kem whip mềm mịn cùng cookies sô cô la say nhuyễn.'

        },
        {
          id:4,
          title: 'cappicino',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/4c.jpg',
          des:'Một thức uống ngon lạ miệng bởi sự kết hợp hoàn hảo giữa cookies sô cô la giòn xốp cùng hỗn hợp sữa tươi cùng sữa đặc đem say với đá viên, và cuối cùng không thể thiếu được chính là lớp kem whip mềm mịn cùng cookies sô cô la say nhuyễn.'

        },
        { id:5,
          title: 'caramel macchiato',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/1c.jpg',
          des:'Một thức uống ngon lạ miệng bởi sự kết hợp hoàn hảo giữa cookies sô cô la giòn xốp cùng hỗn hợp sữa tươi cùng sữa đặc đem say với đá viên, và cuối cùng không thể thiếu được chính là lớp kem whip mềm mịn cùng cookies sô cô la say nhuyễn.'

        },
        { id:6,
          title: 'americano',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/2c.jpg',
          des:'Một thức uống ngon lạ miệng bởi sự kết hợp hoàn hảo giữa cookies sô cô la giòn xốp cùng hỗn hợp sữa tươi cùng sữa đặc đem say với đá viên, và cuối cùng không thể thiếu được chính là lớp kem whip mềm mịn cùng cookies sô cô la say nhuyễn.'

        },
        { id: 7,
          title: 'phindi choco',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/3c.jpg',
          des:'Một thức uống ngon lạ miệng bởi sự kết hợp hoàn hảo giữa cookies sô cô la giòn xốp cùng hỗn hợp sữa tươi cùng sữa đặc đem say với đá viên, và cuối cùng không thể thiếu được chính là lớp kem whip mềm mịn cùng cookies sô cô la say nhuyễn.'

        },
        { id: 8,
          title: 'espesso',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/4c.jpg',
          des:'Một thức uống ngon lạ miệng bởi sự kết hợp hoàn hảo giữa cookies sô cô la giòn xốp cùng hỗn hợp sữa tươi cùng sữa đặc đem say với đá viên, và cuối cùng không thể thiếu được chính là lớp kem whip mềm mịn cùng cookies sô cô la say nhuyễn.'

        },
        { id: 9,
          title: 'capuccino',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/5c.jpg',
          des:'Một thức uống ngon lạ miệng bởi sự kết hợp hoàn hảo giữa cookies sô cô la giòn xốp cùng hỗn hợp sữa tươi cùng sữa đặc đem say với đá viên, và cuối cùng không thể thiếu được chính là lớp kem whip mềm mịn cùng cookies sô cô la say nhuyễn.'

        },

      //-----------------------------------------------------------

        { id:10,
          title: 'cream',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/haha.png',
          des: 'Thức uống chinh phục những thực khách khó tính! Sự kết hợp độc đáo giữa trà Ô long, hạt sen thơm bùi và củ năng giòn tan. Thêm vào chút sữa sẽ để vị thêm ngọt ngào.'
        },
        { id:11,
          title: 'freeze sô cô la ',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/hehe.png',
          des: 'Thức uống chinh phục những thực khách khó tính! Sự kết hợp độc đáo giữa trà Ô long, hạt sen thơm bùi và củ năng giòn tan. Thêm vào chút sữa sẽ để vị thêm ngọt ngào.'

        },
        { id:12 ,
          title: 'freeze trà xanh',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/hoho.png',
          des: 'Thức uống chinh phục những thực khách khó tính! Sự kết hợp độc đáo giữa trà Ô long, hạt sen thơm bùi và củ năng giòn tan. Thêm vào chút sữa sẽ để vị thêm ngọt ngào.'

        },
        { id: 13,
          title: 'caramel phin',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/k1.jpg',
          des: 'Thức uống chinh phục những thực khách khó tính! Sự kết hợp độc đáo giữa trà Ô long, hạt sen thơm bùi và củ năng giòn tan. Thêm vào chút sữa sẽ để vị thêm ngọt ngào.'

        },
        { id: 14,
          title: 'classic phin freeze ',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/k2.jpg',
          des: 'Thức uống chinh phục những thực khách khó tính! Sự kết hợp độc đáo giữa trà Ô long, hạt sen thơm bùi và củ năng giòn tan. Thêm vào chút sữa sẽ để vị thêm ngọt ngào.'

        },
        { id: 15,
          title: 'freeze coolies',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/k3.jpg',
          des: 'Thức uống chinh phục những thực khách khó tính! Sự kết hợp độc đáo giữa trà Ô long, hạt sen thơm bùi và củ năng giòn tan. Thêm vào chút sữa sẽ để vị thêm ngọt ngào.'

        },
        { id : 16,
          title: 'freeze sô cô la ',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/k4.jpg',
          des: 'Thức uống chinh phục những thực khách khó tính! Sự kết hợp độc đáo giữa trà Ô long, hạt sen thơm bùi và củ năng giòn tan. Thêm vào chút sữa sẽ để vị thêm ngọt ngào.'

        },
        { id: 17 ,
          title: 'freeze trà xanh',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/k5.jpg',
          des: 'Thức uống chinh phục những thực khách khó tính! Sự kết hợp độc đáo giữa trà Ô long, hạt sen thơm bùi và củ năng giòn tan. Thêm vào chút sữa sẽ để vị thêm ngọt ngào.'

        },
        { id: 18,
          title: 'cookies & cream',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/k6.jpg',
          des: 'Thức uống chinh phục những thực khách khó tính! Sự kết hợp độc đáo giữa trà Ô long, hạt sen thơm bùi và củ năng giòn tan. Thêm vào chút sữa sẽ để vị thêm ngọt ngào.'

        },

      //-----------------------------------------------------------

        { id: 19,
          title: 'Trà Sen Vàng',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/t1.jpg',
          des:'Với 100% hạt cà phê Moka thượng hạng trồng ở vùng cao nguyên của Việt Nam được rang và phối trộn theo công thức độc đáo tại Highlands Moka là loại hạt cà phê cao cấp nhất của Việt Nam, có giá trị dinh dưỡng và chất lượng tốt nhất Cà phê Highlands Coffee được đóng gói tiện lợi cho việc sử dụng và bảo quản. Không chỉ dùng trong gia đình, với bao bì lịch sự còn thích hợp làm quà tặng ý nghĩa dành cho người thân, bạn bè và đồng nghiệp.'
        },
        { id : 20,
          title: 'trà thạch vải',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/t2.jpg',
          des:'Với 100% hạt cà phê Moka thượng hạng trồng ở vùng cao nguyên của Việt Nam được rang và phối trộn theo công thức độc đáo tại Highlands Moka là loại hạt cà phê cao cấp nhất của Việt Nam, có giá trị dinh dưỡng và chất lượng tốt nhất Cà phê Highlands Coffee được đóng gói tiện lợi cho việc sử dụng và bảo quản. Không chỉ dùng trong gia đình, với bao bì lịch sự còn thích hợp làm quà tặng ý nghĩa dành cho người thân, bạn bè và đồng nghiệp.'

        },
        { id: 21,
          title: 'trà thạch đào',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/t3.jpg',
          des:'Với 100% hạt cà phê Moka thượng hạng trồng ở vùng cao nguyên của Việt Nam được rang và phối trộn theo công thức độc đáo tại Highlands Moka là loại hạt cà phê cao cấp nhất của Việt Nam, có giá trị dinh dưỡng và chất lượng tốt nhất Cà phê Highlands Coffee được đóng gói tiện lợi cho việc sử dụng và bảo quản. Không chỉ dùng trong gia đình, với bao bì lịch sự còn thích hợp làm quà tặng ý nghĩa dành cho người thân, bạn bè và đồng nghiệp.'

        },
        { id : 22,
          title: 'trà tuyết xoài ',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/t4.jpg',
          des:'Với 100% hạt cà phê Moka thượng hạng trồng ở vùng cao nguyên của Việt Nam được rang và phối trộn theo công thức độc đáo tại Highlands Moka là loại hạt cà phê cao cấp nhất của Việt Nam, có giá trị dinh dưỡng và chất lượng tốt nhất Cà phê Highlands Coffee được đóng gói tiện lợi cho việc sử dụng và bảo quản. Không chỉ dùng trong gia đình, với bao bì lịch sự còn thích hợp làm quà tặng ý nghĩa dành cho người thân, bạn bè và đồng nghiệp.'

        },
        { id: 23,
          title: 'trà xanh đậu đỏ ',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/t5.png',
          des:'Với 100% hạt cà phê Moka thượng hạng trồng ở vùng cao nguyên của Việt Nam được rang và phối trộn theo công thức độc đáo tại Highlands Moka là loại hạt cà phê cao cấp nhất của Việt Nam, có giá trị dinh dưỡng và chất lượng tốt nhất Cà phê Highlands Coffee được đóng gói tiện lợi cho việc sử dụng và bảo quản. Không chỉ dùng trong gia đình, với bao bì lịch sự còn thích hợp làm quà tặng ý nghĩa dành cho người thân, bạn bè và đồng nghiệp.'

        },
        { id : 24,
          title: 'trà tuyết phúc bồn tử',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/t6.png',
          des:'Với 100% hạt cà phê Moka thượng hạng trồng ở vùng cao nguyên của Việt Nam được rang và phối trộn theo công thức độc đáo tại Highlands Moka là loại hạt cà phê cao cấp nhất của Việt Nam, có giá trị dinh dưỡng và chất lượng tốt nhất Cà phê Highlands Coffee được đóng gói tiện lợi cho việc sử dụng và bảo quản. Không chỉ dùng trong gia đình, với bao bì lịch sự còn thích hợp làm quà tặng ý nghĩa dành cho người thân, bạn bè và đồng nghiệp.'

        },
        { id : 25,
          title: 'trà sen vàng(sen)',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/t1.jpg',
          des:'Với 100% hạt cà phê Moka thượng hạng trồng ở vùng cao nguyên của Việt Nam được rang và phối trộn theo công thức độc đáo tại Highlands Moka là loại hạt cà phê cao cấp nhất của Việt Nam, có giá trị dinh dưỡng và chất lượng tốt nhất Cà phê Highlands Coffee được đóng gói tiện lợi cho việc sử dụng và bảo quản. Không chỉ dùng trong gia đình, với bao bì lịch sự còn thích hợp làm quà tặng ý nghĩa dành cho người thân, bạn bè và đồng nghiệp.'

        },
        { id : 26,
          title: 'trà sen vàng(củ năng)',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},

          image: 'assets/img/t4.jpg',
          des:'Với 100% hạt cà phê Moka thượng hạng trồng ở vùng cao nguyên của Việt Nam được rang và phối trộn theo công thức độc đáo tại Highlands Moka là loại hạt cà phê cao cấp nhất của Việt Nam, có giá trị dinh dưỡng và chất lượng tốt nhất Cà phê Highlands Coffee được đóng gói tiện lợi cho việc sử dụng và bảo quản. Không chỉ dùng trong gia đình, với bao bì lịch sự còn thích hợp làm quà tặng ý nghĩa dành cho người thân, bạn bè và đồng nghiệp.'

        },
        { id : 27,
          title: 'trà thanh đào',
          price: {sizeS: 55000 ,sizeM: 60000,sizeL: 65000},
          image: 'assets/img/t7.jpg',
          des:'Với 100% hạt cà phê Moka thượng hạng trồng ở vùng cao nguyên của Việt Nam được rang và phối trộn theo công thức độc đáo tại Highlands Moka là loại hạt cà phê cao cấp nhất của Việt Nam, có giá trị dinh dưỡng và chất lượng tốt nhất Cà phê Highlands Coffee được đóng gói tiện lợi cho việc sử dụng và bảo quản. Không chỉ dùng trong gia đình, với bao bì lịch sự còn thích hợp làm quà tặng ý nghĩa dành cho người thân, bạn bè và đồng nghiệp.'

        }
    ],
    apimenu :{
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
      ]

    },
    ApiNews : [
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
    ],
    apiMutual :[
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
    ],
    apiAbout: [
      {
        id: 1,
        title: 'nguồn gốc',
        bg: 'fff',
        img: './assets/img/sec1.jpg',
        titleDes: 'CÂU CHUYỆN NÀY LÀ CỦA CHÚNG MÌNH',
        des: 'Highlands Coffee® được thành lập vào năm 1999, bắt nguồn từ tình yêu dành cho đất Việt cùng với cà phê và cộng đồng nơi đây. Ngay từ những ngày đầu tiên, mục tiêu của chúng mình là có thể phục vụ và góp phần phát triển cộng đồng bằng cách siết chặt thêm sự kết nối và sự gắn bó giữa người với người.',
        desDetail:'Highlands Coffee® được thành lập vào năm 1999, bắt nguồn từ tình yêu dành cho đất Việt cùng với cà phê và cộng đồng nơi đây. Tinh thần cộng đồng luôn chảy trong ADN của mỗi người Việt mình. Ngay từ những ngày đầu tiên, mục tiêu của chúng mình là có thể phục vụ và góp phần phát triển cộng đồng bằng cách siết chặt thêm sự kết nối và sự gắn bó giữa người với người. Ngày hôm nay, với hàng trăm cửa hàng trên khắp Việt Nam và trên Thế Giới, thứ chúng mình đem lại không chỉ dừng lại ở cà phê. Chúng mình còn là nơi để thuộc về, là nơi để kết nối tất cả mọi người với nhau. Từ đó, Highlands Coffee® trở thành nơi dành riêng cho cộng đồng.\n' +
          '\n' +
          'Trong tương lai, chúng mình sẽ luôn thấy một Việt Nam đang phát triển và một Highlands Coffee® không ngừng cải tiến. Highlands Coffee® - điểm tụ họp của cộng đồng, nơi mọi người có thể kết nối và gắn kết với nhau bằng tình yêu dành cho cà phê, trà và các món ăn ngon. Tại Highlands Coffee®, chúng mình luôn sát cánh cùng bạn, chúng mình luôn ủng hộ bạn và chúng mình luôn đồng hành với nhau như một cộng đồng.',
        text: 'Highlands Coffee® Là Của Chúng Mình.'
      },
      {
        id:2,
        title: 'dịch vụ',
        bg: 'bd945d',
        titleDes: 'dịch vụ này là của chúng mình',
        img: './assets/img/sec2.jpg',
        des: 'Highlands Coffee® là không gian của chúng mình nên mọi thứ ở đây đều vì sự thoải mái của chúng mình. Đừng giữ trong lòng, hãy chia sẻ với chúng mình điều bạn mong muốn để cùng nhau giúp Highlands Coffee® trở nên tuyệt vời hơn.',
        desDetail: 'Highlands Coffee® là không gian của chúng mình nên mọi thứ ở đây đều vì sự thoải mái của chúng mình.\n' +
          '\n' +
          'Đừng giữ trong lòng, hãy chia sẻ với chúng mình điều bạn mong muốn để cùng nhau giúp Highlands Coffee® của chúng mình trở nên tuyệt vời hơn.',
        text1: 'Chúng mình có thể làm gì để hoàn thiện Highlands Coffee®?',
        text2: 'Đừng ngại chia sẻ ý kiến của bạn tại:',
        mxh: 'Facebook: https://www.facebook.com/highlandscoffeevietnam/\n' +
          '\n' +
          'Hoặc bạn có thể gửi email cho chúng mình đến địa chỉ: customerservice@highlandscoffee.com.vn, chúng mình sẽ phản hồi trong thời gian sớm nhất có thể.'
      },
      {
        id:3,
        title: 'nghề nghiệp',
        bg: '8e5a2d',
        img: './assets/img/sec3.jpg',
        titleDes: 'CƠ HỘI NÀY LÀ CỦA CHÚNG MÌNH',
        des: 'Là điểm hội tụ của cộng đồng, Highlands Coffee® luôn tìm kiếm những thành viên mới với mong muốn không ngừng hoàn thiện một không gian dành cho tất cả mọi người. Chúng mình luôn chào đón bạn trở thành một phần của Highlands Coffee® để cùng nhau siết chặt thêm những kết nối và sự gắn bó giữa người với người.',
        desDetail:'Chúng mình biết rằng để thành công, bạn muốn làm việc với những đồng nghiệp tuyệt vời, tận hưởng những khoảng thời gian đẹp nhất, hiệu quả nhất, thể hiện được tài năng, đam mê của mình và được là chính mình nhất. Tại cộng đồng Highlands của chúng mình, bạn sẽ được truyền cảm hứng từ các cơ hội việc làm chúng mình có và trở thành phiên bản tốt nhất của chính bản thân trong cộng đồng của chúng mình.\n' +
          '\n' +
          'Chúng mình hoàn toàn tin tưởng rằng nhiệm vụ của Highlands là trao quyền cho bạn, hỗ trợ bạn trong quá trình bạn tỏa sáng, tạo kiện tốt nhất để bạn nâng cấp kỹ năng vốn có của bạn cũng như khai phá những tố chất tiềm ẩn để bạn chạm đến PHIÊN BẢN TỐT NHẤT của bản thân. Cho dù bạn mới bắt đầu sự nghiệp hay đang là một chuyên gia có thật nhiều kinh nghiệm, tương lai của bạn đều có thể bắt đầu từ đây để hoàn thiện chính mình trong hành trình chinh phục những thử thách đầy hoài bão.\n' +
          '\n' +
          'Bạn đã sẵn sàng để nắm lấy cơ hội kiến tạo sự nghiệp cùng chúng mình để góp sức dựng xây một',
        text: 'Highlands Coffee® Là Của Chúng Mình?',
        bonus: 'HÃY CÙNG CHÚNG MÌNH KHÁM PHÁ NHÉ:'

      }
    ]

  }

  // lấy ra dữ liệu mà id được click
  getDataByIdAbout(id: number): Observable<any>{
    const item: any = this.API.apiAbout.find((item: any) => item.id === id);
    return of(item)
  }
  //lấy ra dữ liệu mà id không được click
  getOtherDataAbout(id: number): Observable<any[]> {
    const otherItems: any[] = this.API.apiAbout.filter((item: any) => item.id !== id);
    return of(otherItems);
  }


  getDataByIdDetail(id: number): Observable<any> {
    const item = this.API.apimenu.itemsMenu.find((item: any) => item.id === id);
    return of(item)
  }

  getDataById(id: number): Observable<any> {
    const item = this.API.apiProduct.find((item: any) => item.id === id);
    return of(item)
  }
  constructor() { }
}
