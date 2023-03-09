export interface Product {
  image: string,
  name: string,
  description: string,
  rating: number,
  link: string,
  id: number,
  category: string,
  likes: number
}

export const products = [
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h67/h95/33125682380830/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
    name: "MacBook Air 13",
    description: "Apple MacBook Air 13 MGN63 серый",
    rating: 5,
    link: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE#!/item",
    id: 1,
    category: "laptop",
    likes: 4
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h9b/h1b/67236399120414/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg",
    name: "Acer Nitro 5",
    description: "Acer Nitro 5 AN515-57 NH.QEKER.004 черный",
    rating: 5,
    link: "https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE",
    id: 2,
    category: "laptop",
    likes: 25
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h32/hd3/67940461608990/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874-1.jpg",
    name: "Lenovo Idea Pad",
    description: "Lenovo IdeaPad 1 14IGL05 81VU00H3RU серый",
    rating: 5,
    link: "https://kaspi.kz/shop/p/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE",
    id: 3,
    category: "laptop",
    likes: 7
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h7e/h89/67253149073438/hp-15s-eq1387ur-4z3a4ea-serebristyi-108203227-1.jpg",
    name: "HP 15s-eq1387ur",
    description: "HP 15s-eq1387ur 4Z3A4EA серебристый",
    rating: 5,
    link: "https://kaspi.kz/shop/p/hp-15s-eq1387ur-4z3a4ea-serebristyi-108203227/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE",
    id: 4,
    category: "laptop",
    likes: 154
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h12/ha8/65953424211998/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-1.jpg",
    name: "ASUS X515EA-BQ3144W",
    description: "ASUS X515EA-BQ3144W I385SUW1 90NB0TY1-M02ZL0 темно-серый",
    rating: 5,
    link: "https://kaspi.kz/shop/p/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE",
    id: 5,
    category: "laptop",
    likes: 42
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/ha2/he7/62100002570270/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg",
    name: "ASUS TUF Gaming A15",
    description: "ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0 черный",
    rating: 5,
    link: "https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE#!/item",
    id: 6,
    category: "laptop",
    likes: 12
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hdb/ha6/52324839653406/inven-tex-9090-105730872-1jpg.jpg",
    name: "Inven tex. 9090",
    description: "Футболка Inven tex. 9090 серый 56",
    rating: 5,
    link: "https://kaspi.kz/shop/p/futbolka-inven-tex-9090-seryi-56-105512696/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE#!/item",
    id: 7,
    category: "clothes",
    likes: 452
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hfa/h87/49863947321374/tespe-atk01-104384055-1jpg.jpg",
    name: "Tespe ATK01",
    description: "Tespe ATK017 черный 48",
    rating: 5,
    link: "https://kaspi.kz/shop/p/tespe-atk017-chernyi-48-103962769/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE#!/item",
    id: 8,
    category: "clothes",
    likes: 145
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h98/hea/64104728330270/futbolka-tespe-4195-1-sinii-56-sinii-107193143-1.jpg",
    name: "Tespe 4195-1",
    description: "Футболка Tespe 4195-1 синий",
    rating: 5,
    link: "https://kaspi.kz/shop/p/futbolka-tespe-4195-1-sinii-56-107193144/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE",
    id: 9,
    category: "clothes",
    likes: 47
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h88/h95/61824966819870/nike-dv0337-693-bezevyj-oranzevyj-m-bezevyj-oranzevyj-106129291-1.jpg",
    name: "Nike DV0337-693",
    description: "Nike DV0337-693 бежевый",
    rating: 5,
    link: "https://kaspi.kz/shop/p/nike-dv0337-693-bezhevyi-46-48-106129292/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE",
    id: 11,
    category: "clothes",
    likes: 74
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/he9/h88/62179818733598/nike-dn5800-106306538-1jpg.jpg",
    name: "Nike DN5800",
    description: "Nike DN5800-321 зеленый L",
    rating: 0,
    link: "https://kaspi.kz/shop/p/nike-dn5800-321-zelenyi-l-106178825/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE#!/item",
    id: 12,
    category: "clothes",
    likes: 2
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h30/hd2/64487157760030/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg",
    name: "Xiaomi Redmi Note 10 Pro",
    description: "Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ серый",
    rating: 5,
    link: "https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE#!/item",
    id: 10,
    category: "phone",
    likes: 74
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h27/hc9/46392664162334/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg",
    name: "iPhone 13",
    description: "Apple iPhone 13 128Gb белый",
    rating: 5,
    link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE#!/item",
    id: 13,
    category: "phone",
    likes: 54
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hab/hed/62948780671006/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
    name: "iPhone 14 Pro Max",
    description: "Apple iPhone 14 Pro Max 256Gb фиолетовый",
    rating: 5,
    link: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE",
    id: 14,
    category: "phone",
    likes: 122
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h61/hc2/46392660557854/apple-iphone-13-128gb-rozovyj-102298145-1-Container.jpg",
    name: "iPhone 13 128Gb",
    description: "Apple iPhone 13 128Gb розовый",
    rating: 5,
    link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE",
    id: 15,
    category: "phone",
    likes: 755
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hd6/hf8/33208262066206/apple-iphone-11-128gb-slim-box-belyj-100692385-1-Container.jpg",
    name: "iPhone 11",
    description: "Apple iPhone 11 128Gb Slim Box белый",
    rating: 5,
    link: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-belyi-100692385/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE#!/item",
    id: 16,
    category: "phone",
    likes: 78
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hcd/h32/50807988748318/askona-avinon-cernyj-sagren-101475576-1-Container.jpg",
    name: "Askona Avinon 140x200",
    description: "Askona Avinon 140x200 черный шагрень",
    rating: 5,
    link: "https://kaspi.kz/shop/p/askona-avinon-140x200-chernyi-shagren--101475576/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE",
    id: 17,
    category: "furniture",
    likes: 74
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/he3/hbb/47699746947102/arlando-skaf-4d-belyj-gorizont-103142592-1.jpg",
    name: "Горизонт Арландо 4Д",
    description: "Горизонт Арландо 4Д, 160x57x207, белый",
    rating: 5,
    link: "https://kaspi.kz/shop/p/gorizont-arlando-4d-160x57x207-belyi-103142592/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE#!/item",
    id: 18,
    category: "furniture",
    likes: 85
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h4b/h83/44592736272414/gorizont-nensi-belyj-glanec-dub-zolotoj-102073014-1.jpg",
    name: "Горизонт Ненси",
    description: "Горизонт Ненси белый глянец дуб золотой",
    rating: 5,
    link: "https://kaspi.kz/shop/p/gorizont-nensi-belyi-gljanets-dub-zolotoi-102073014/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE#!/item",
    id: 19,
    category: "furniture",
    likes: 96
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hb3/h64/33274051952670/sv-gorod-dvuh-arusnaa-90h200-asen-simo-svetlyj-simo-temnyj-100784378-1.jpg",
    name: "SV Город 80x186",
    description: "SV Город 80x186 ясень шимо темный - светлый",
    rating: 5,
    link: "https://kaspi.kz/shop/p/sv-gorod-80h186-jasen-shimo-temnyi---svetlyi-101100564/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE",
    id: 20,
    category: "furniture",
    likes: 72
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h96/h59/31577958842398/sonel-standart-komfort-180h200-belyj-13300555-1.jpg",
    name: "Sonel Стандарт Комфорт",
    description: "Sonel Стандарт Комфорт 180x200 Белый",
    rating: 5,
    link: "https://kaspi.kz/shop/p/sonel-standart-komfort-180h200-belyi-13300555/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE#!/item",
    id: 21,
    category: "furniture",
    likes: 45
  }
];