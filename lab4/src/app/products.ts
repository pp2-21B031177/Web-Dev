export interface Product {
  image: string,
  name: string,
  description: string,
  rating: number,
  link: string,
  id: number
}

export const products = [
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h67/h95/33125682380830/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
    name: "MacBook Air 13",
    description: "Apple MacBook Air 13 MGN63 серый",
    rating: 5,
    link: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE#!/item",
    id: 1
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h9b/h1b/67236399120414/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg",
    name: "Acer Nitro 5",
    description: "Acer Nitro 5 AN515-57 NH.QEKER.004 черный",
    rating: 5,
    link: "https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE",
    id: 2
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h32/hd3/67940461608990/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874-1.jpg",
    name: "Lenovo Idea Pad",
    description: "Lenovo IdeaPad 1 14IGL05 81VU00H3RU серый",
    rating: 5,
    link: "https://kaspi.kz/shop/p/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE",
    id: 3
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h7e/h89/67253149073438/hp-15s-eq1387ur-4z3a4ea-serebristyi-108203227-1.jpg",
    name: "HP 15s-eq1387ur",
    description: "HP 15s-eq1387ur 4Z3A4EA серебристый",
    rating: 5,
    link: "https://kaspi.kz/shop/p/hp-15s-eq1387ur-4z3a4ea-serebristyi-108203227/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE",
    id: 4
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h12/ha8/65953424211998/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-1.jpg",
    name: "ASUS X515EA-BQ3144W",
    description: "ASUS X515EA-BQ3144W I385SUW1 90NB0TY1-M02ZL0 темно-серый",
    rating: 5,
    link: "https://kaspi.kz/shop/p/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE",
    id: 5
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/ha2/he7/62100002570270/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg",
    name: "ASUS TUF Gaming A15",
    description: "ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0 черный",
    rating: 5,
    link: "https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE#!/item",
    id: 6
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hdb/ha6/52324839653406/inven-tex-9090-105730872-1jpg.jpg",
    name: "Inven tex. 9090",
    description: "Футболка Inven tex. 9090 серый 56",
    rating: 5,
    link: "https://kaspi.kz/shop/p/futbolka-inven-tex-9090-seryi-56-105512696/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE#!/item",
    id: 7
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hfa/h87/49863947321374/tespe-atk01-104384055-1jpg.jpg",
    name: "Tespe ATK01",
    description: "Tespe ATK017 черный 48",
    rating: 5,
    link: "https://kaspi.kz/shop/p/tespe-atk017-chernyi-48-103962769/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE#!/item",
    id: 8
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h98/hea/64104728330270/futbolka-tespe-4195-1-sinii-56-sinii-107193143-1.jpg",
    name: "Tespe 4195-1",
    description: "Футболка Tespe 4195-1 синий",
    rating: 5,
    link: "https://kaspi.kz/shop/p/futbolka-tespe-4195-1-sinii-56-107193144/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE",
    id: 9
  },
  {
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h30/hd2/64487157760030/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg",
    name: "Xiaomi Redmi Note 10 Pro",
    description: "Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ серый",
    rating: 5,
    link: "https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAk--dBhABEiwAchIwkZWFYz3I6YFj1grSuEKt3odw1XSsrCI6-ei7Nhks9ihgBkQHzFzmbhoCdToQAvD_BwE#!/item",
    id: 10
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/