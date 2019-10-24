window.onload = function(){
  $('.two-dimension-code').mouseover(function () {
    $(this).addClass('change')
  })
  $('.two-dimension-code').mouseout(function () {
    $(this).removeClass('change')
  })
// contain
var data = [
  // section: 'news'
  {
  	cloumn: [
  	 {data: [
  		  {
  		    tab: '吃货日记《美味博物馆》',
  		    video: 'https://movie.douban.com/trailer/235344/',
  		    bgImg: 'img/1.png'
  		  },
  		  {
  		    tab: '南｜光芒引领。',
  		    video: 'https://movie.douban.com/trailer/234779/#',
  		    bgImg: 'img/2.png'
  		  },
        {
          tab: '圃生厨房（自己动手，丰衣足食）',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/3.png'
        },
        {
          tab: '新安江畔 ',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/4.png'
        }
  		]
  	 }
    ]
  },
  // section: 'time',
  {
    section: 'time',  //section 分区板块
    cloumn: [
     {data: [
        {
          tab: '30天掌握讲故事的技能——写作成长营第3期',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1534942473(1).png'
        },
        {
          tab: '古典音乐的奇幻之旅——从入门到上瘾的108堂课',
          video: 'https://movie.douban.com/trailer/234779/#',
          bgImg: 'img/1535486165(1).png'
        },
        {
          tab: '花知道答案——中日名师插花课',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535486177(1).png'
        },
        {
          tab: '52倍人生——戴锦华大师电影课',
          video: 'https://movie.douban.com/trailer/234779/#',
          bgImg: 'img/1535486191(1).png'
        },
        {
          tab: '花鸟鱼虫的生活意见——博物君的自然笔记',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535486203(1).png'
        },
        {
          tab: '美剧大爆炸——创作、脑洞与文化密码',
          video: 'https://movie.douban.com/trailer/234779/#',
          bgImg: 'img/1535486219(1).png'
        },
        {
          tab: '哲学闪耀时——不一样的西方哲学史',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535486231(1).png'
        },
        {
          tab: '黑镜人生——网络生活的传播学肖像',
          video: 'https://movie.douban.com/trailer/234779/#',
          bgImg: 'img/1535486241(1).png'
        },
        {
          tab: '一个故事的诞生——22堂创意思维写作课',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535486251(1).png'
        },
        {
          tab: '12文豪——围绕日本文学的冒险',
          video: 'https://movie.douban.com/trailer/234779/#',
          bgImg: 'img/1535486262(1).png'
        },
      ]
     }
    ]
  },
  // section: 'video',
  {
  	section: 'video',  //section 分区板块
  	cloumn: [
  	 {data: [
  		  {
  		    tab: '陈坤公开三大bug，原来你是这样的厂花',
  		    video: 'https://movie.douban.com/trailer/235344/',
  		    bgImg: 'img/1534992481.png'
  		  },
  		  {
  		    tab: '李冰冰不服被称磨皮狂魔，自认颜值输陈坤',
  		    video: 'https://movie.douban.com/trailer/234779/#',
  		    bgImg: 'img/1534992743(1).png'
  		  },
        {
          tab: '黄渤回应毒评机智满分，不愧为“叔圈101”实力担当',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1534992843(1).png'
        },
        {
          tab: '蔡明亮：创作有时候是一种命运的安排',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535470117(1).png'
        },
        {
          tab: '徐克：身不由己的地方就是江',
          video: 'https://movie.douban.com/trailer/234779/#',
          bgImg: 'img/1534992976(1).png'
        },
        {
          tab: '张杨：一切创作都来源于个体的生命体验 | 观影会客厅',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535470143(1).png'
        },
  		]
  	 }
    ]
  },
  // section: 'section-4 movie'
  {
    section: 'section-4 movie',  //section 分区板块
    cloumn: [
     {data: [
        {
          tab: '一出好戏',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1534994210(1).png'
        },
        {
          tab: '巨齿鲨',
          video: 'https://movie.douban.com/trailer/234779/#',
          bgImg: 'img/1534994836(1).png'
        },
        {
          tab: '快把我哥带走',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1534994884(1).png'
        },
        {
          tab: '精灵旅社3',
          video: 'https://movie.douban.com/trailer/234779/#',
          bgImg: 'img/1534994912(1).png'
        },
        {
          tab: '欧洲攻略',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1534995061(1).png'
        },
        {
          tab: '西虹市首富',
          video: 'https://movie.douban.com/trailer/234779/#',
          bgImg: 'img/1534995089(1).png'
        },
        {
          tab: '新乌龙院之笑闹...',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1534995114(1).png'
        },
        {
          tab: '浴血广昌',
          video: 'https://movie.douban.com/trailer/234779/#',
          bgImg: 'img/1534995019(1).png'
        },
      ]
     }
    ]
  },
  // section: 'section-5 group',
  {
    section: 'section-5 group',  //section 分区板块
    cloumn: [
     {data: [
        {
          tab: '帮帮组™加入这个组就有人帮你了！',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535018444(1).png'
        },
        {
          tab: '我爱三毛',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535471221(1).png'
        },
        {
          tab: '沙发客',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535471250(1).png'
        },
        {
          tab: '刘慈欣',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535471260(1).png'
        },
        {
          tab: '西双版纳',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535471271(1).png'
        },
        {
          tab: '记事本圆梦小组',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535471285(1).png'
        },
        {
          tab: '搭讪学',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535471301(1).png'
        },
        {
          tab: '这辈子一定要做几件疯狂的事',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535471317(1).png'
        },
        {
          tab: '自己给自己剪头发',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535471334(1).png'
        },
        {
          tab: '我们就是要做衣服给自己穿',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535471345(1).png'
        },
        {
          tab: '对象太他妈难找了党-单身凸^-^凸',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535471355(1).png'
        },
      ]
     }
    ]
  },
  // section: 'section-6 reading',
  {
    section: 'section-6 reading',  //section 分区板块
    cloumn: [
     {data: [
        {
          tab: '轻寒',
          span:'金宇澄',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535026251(1).png'
        },
        {
          tab: '胡林的子女',
          span:'〔英〕J.R....',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535474228(1).png'
        },
        {
          tab: '同情者',
          span:'〔美 〕阮清越...',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535474244(1).png'
        },
        {
          tab: '圣殿春秋',
          span:'〔英〕肯·福莱...',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535474255(1).png'
        },
        {
          tab: '不速之客',
          span:'三七',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535474274(1).png'
        },
        {
          tab: '鹌鹑',
          span:'郭沛文',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535474286(1).png'
        },
        {
          tab: '人间食客',
          span:'李静玮',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535474296(1).png'
        },
        {
          tab: '一生一次',
          span:'七月果',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535474309(1).png'
        },
      ]
     }
    ]
  },
  //section-7 music
  {
    section: 'section7',  //section 分区板块
    cloumn: [
     {data: [
        { span: '蔡徐坤',
          tab: '1.1',
          p:'★★★☆☆5.9',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535476294(1).png'
        },
        { span: '易烊千玺 Jackson Yee',
          tab: '2.丹青千里',
          p:'★★★★☆7.1',
          video: 'https://movie.douban.com/trailer/234779/#',
          bgImg: 'img/1535476313(1).png'
        },
        { span: '火箭少女101 Rocket Girls 101',
          tab: ' 3.撞',
          p:'★★★☆☆6.4',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535476434(1).png'
        },
        { span: '娄艺潇',
          tab: ' 4.LOURA',
          p:'★★★☆☆5.9',
          video: 'https://movie.douban.com/trailer/234779/#',
          bgImg: 'img/1535476448(1).png'
        },
        { span: 'Ariana Grande',
          tab: ' 5.Sweetener',
          p:'★★★☆☆6.1',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535476460(1).png'
        },
        { span: 'Nicki Minaj',
          tab: '6.Queen',
          p:'★★★★☆8.2',
          video: 'https://movie.douban.com/trailer/234779/#',
          bgImg: 'img/1535476470(1).png'
        },
        { span: '红色天鹅绒 Red Velve',
          tab: ' 7.Summer Magic',
          p:'★★★☆☆6.5',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535476470(1).png'
        },
        { span: 'Perfume',
          tab: '8. Future Pop (通常盤)',
          p:'★★★☆☆6.5',
          video: 'https://movie.douban.com/trailer/234779/#',
          bgImg: 'img/1535476482(1).png'
        },
        {
          tab: ' Free Will',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535476514(1).png'
        },
        {
          tab: ' 日光之下 并无新事',
          video: 'https://movie.douban.com/trailer/234779/#',
          bgImg: 'img/1535476536.png'
        },
        {
          tab: ' Alone II.',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535476551(1).png'
        },
        {
          tab: ' Future Pop (通常盤)',
          video: 'https://movie.douban.com/trailer/234779/#',
          bgImg: 'img/1535476564(1).png'
        },
        {
          tab: ' 走れ！',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535476575(1).png'
        },
        {
          tab: ' 献给蘑菇的999首心歌~001',
          video: 'https://movie.douban.com/trailer/234779/#',
          bgImg: 'img/1535476594(1).png'
        },
      ]
     }
    ]
  },
  //section-8 豆品
  {
    section: 'section-8',  //section 分区板块
    cloumn: [
     {data: [
        {
          span: "￥30",
          tab: '豆瓣电影日历2018',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535200404(1).png'
        },
        {
          span:" ￥40",
          tab: '面精装本',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535206797(1).png'
        },
        {
          span: "￥50",
          tab: '豆瓣电影日历2018',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535206826(1).png'
        },
        {
          span: "￥60",
          tab: '豆瓣电影日历2018',
          video: 'https://movie.douban.com/trailer/235344/',
          bgImg: 'img/1535206859(1).png'
        },
      ]
     }
    ]
  },
]
$('.contain').eq(1).find('li').append('<p class="sp2">成长营</p>');
$('.contain').eq(3).find('li').append('<span>★★★★★7.3</span><input type="button" name="" value="选座购票">');
$('.contain').eq(4).find('li').append('<span>15598 个成员</span>');
$('.contain').eq(5).find('li').append('<span></span><a href="#">免费试读</a>');
$('.contain').eq(6).find('li').append('<span></span><p></p>');
$('.contain').eq(7).find('li').append('<span></span>');
for(var i = 0;i < data.length; i++){   //外部的section循环
  //section里的内容
	var liobjs = $('.contain').eq(i).find('li')
  liobjs.prepend('<a href=""><img></a><a href="#"></a>')
  for (var j = 0; j < liobjs.length; j++) {
    var thisData = data[i].cloumn[0].data[j]
    if(thisData.tab =='献给蘑菇的999首心歌~001'){debugger}
    liobjs.eq(j).find('a').first().attr('url',thisData.video)
    liobjs.eq(j).find('img').attr('src',thisData.bgImg)
    liobjs.eq(j).find('a').eq(1).text(thisData.tab)
    liobjs.eq(j).find('span').text(thisData.span)
    liobjs.eq(j).find('p').text(thisData.p)
  }
}
}
