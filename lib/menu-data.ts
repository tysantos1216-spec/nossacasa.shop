export interface MenuItem {
  id: string
  name: string
  namePt?: string
  nameEs?: string
  description: string
  descriptionPt?: string
  descriptionEs?: string
  price: number
  sixPackPrice?: number
  twelvePackPrice?: number
  twentyFourPackPrice?: number
  category: 'portuguese' | 'mexican' | 'drinks' | 'packages' | 'azorean-cookies' | 'mexican-cookies' | 'house-cookies'
  status: 'available' | 'sold-out'
  image?: string
}

export const menuItems: MenuItem[] = [
  // Portuguese Items
  {
    id: 'malassadas',
    name: 'Classic Malassadas',
    namePt: 'Malassadas Clássicas',
    nameEs: 'Malassadas Clásicas',
    description: 'Azorean Fried Dough (No filling)',
    descriptionPt: 'Massa Frita Açoreana (Sem recheio)',
    descriptionEs: 'Masa Frita de las Azores (Sin relleno)',
    price: 2.50,
    sixPackPrice: 14.00,
    twelvePackPrice: 26.00,
    category: 'portuguese',
    status: 'available'
  },
  {
    id: 'donas-acucar',
    name: 'Donas de Açúcar',
    namePt: 'Donas de Açúcar',
    nameEs: 'Donas de Azúcar',
    description: 'Cinnamon Sugar Donuts',
    descriptionPt: 'Donuts de Açúcar e Canela',
    descriptionEs: 'Donas de Azúcar y Canela',
    price: 2.00,
    sixPackPrice: 11.00,
    twelvePackPrice: 20.00,
    category: 'portuguese',
    status: 'available'
  },
  {
    id: 'bolos-levedos',
    name: 'Bolos Lêvedos',
    namePt: 'Bolos Lêvedos',
    nameEs: 'Bolos Lêvedos',
    description: 'Sweet Griddle Cakes',
    descriptionPt: 'Bolos de Grelho Doces',
    descriptionEs: 'Tortas Dulces a la Plancha',
    price: 1.50,
    sixPackPrice: 8.00,
    twelvePackPrice: 15.00,
    category: 'portuguese',
    status: 'available'
  },
  {
    id: 'papo-secos',
    name: 'Papo Secos',
    namePt: 'Papo Secos',
    nameEs: 'Papo Secos',
    description: 'Traditional Hard Rolls',
    descriptionPt: 'Pãezinhos Tradicionais',
    descriptionEs: 'Panecillos Tradicionales',
    price: 1.25,
    sixPackPrice: 6.00,
    twelvePackPrice: 11.00,
    category: 'portuguese',
    status: 'available'
  },
  {
    id: 'pao-milho',
    name: 'Pão de Milho',
    namePt: 'Pão de Milho',
    nameEs: 'Pan de Maíz',
    description: 'Rustic Cornbread Loaf',
    descriptionPt: 'Pão de Milho Rústico',
    descriptionEs: 'Pan de Maíz Rústico',
    price: 6.00,
    category: 'portuguese',
    status: 'available'
  },
  // Mexican Items
  {
    id: 'conchas',
    name: 'Conchas',
    namePt: 'Conchas',
    nameEs: 'Conchas',
    description: 'Mexican Pan Dulce (Vanilla or Chocolate)',
    descriptionPt: 'Pão Doce Mexicano (Baunilha ou Chocolate)',
    descriptionEs: 'Pan Dulce (Vainilla o Chocolate)',
    price: 3.00,
    sixPackPrice: 17.00,
    twelvePackPrice: 32.00,
    category: 'mexican',
    status: 'available'
  },
  {
    id: 'pan-de-muerto',
    name: 'Pan de Muerto Style Buns',
    namePt: 'Pão de Muerto',
    nameEs: 'Pan de Muerto',
    description: 'Orange Blossom Buns',
    descriptionPt: 'Pãezinhos de Flor de Laranjeira',
    descriptionEs: 'Pan de Azahar',
    price: 3.50,
    sixPackPrice: 20.00,
    twelvePackPrice: 38.00,
    category: 'mexican',
    status: 'available'
  },
  {
    id: 'bolillos',
    name: 'Bolillos',
    namePt: 'Bolillos',
    nameEs: 'Bolillos',
    description: 'Mexican Crusty Rolls',
    descriptionPt: 'Pãezinhos Crocantes Mexicanos',
    descriptionEs: 'Bolillos Crujientes',
    price: 1.25,
    sixPackPrice: 6.00,
    twelvePackPrice: 11.00,
    category: 'mexican',
    status: 'available'
  },
  // Azorean Traditional Biscuits
  {
    id: 'biscoitos-canela',
    name: 'Biscoitos de Canela',
    namePt: 'Biscoitos de Canela',
    nameEs: 'Galletas de Canela Azoreanas',
    description: 'Traditional Azorean Cinnamon Biscuits',
    descriptionPt: 'Biscoitos Tradicionais Açoreanos de Canela',
    descriptionEs: 'Galletas Tradicionales de Canela de las Azores',
    price: 1.50,
    sixPackPrice: 8.00,
    twelvePackPrice: 15.00,
    twentyFourPackPrice: 28.00,
    category: 'azorean-cookies',
    status: 'available'
  },
  {
    id: 'biscoitos-orelha',
    name: 'Biscoitos de Orelha',
    namePt: 'Biscoitos de Orelha',
    nameEs: 'Galletas de Oreja',
    description: 'Traditional Azorean "Ear" Sugar Cookies',
    descriptionPt: 'Biscoitos de Orelha Tradicionais Açoreanos',
    descriptionEs: 'Galletas de Azúcar "Oreja" de las Azores',
    price: 1.50,
    sixPackPrice: 8.00,
    twelvePackPrice: 15.00,
    twentyFourPackPrice: 28.00,
    category: 'azorean-cookies',
    status: 'available'
  },
  // Mexican Traditional Cookies
  {
    id: 'marranitos',
    name: 'Marranitos / Puerquitos',
    namePt: 'Marranitos / Puerquitos',
    nameEs: 'Marranitos / Puerquitos',
    description: 'Traditional Mexican Piggy Gingerbread Cookies',
    descriptionPt: 'Biscoitos de Gengibre Mexicanos (Porquinhos)',
    descriptionEs: 'Galletas de Jengibre Tradicionales (Cochinitos)',
    price: 2.00,
    sixPackPrice: 11.00,
    twelvePackPrice: 20.00,
    twentyFourPackPrice: 38.00,
    category: 'mexican-cookies',
    status: 'available'
  },
  {
    id: 'polvorones',
    name: 'Polvorones',
    namePt: 'Polvorones',
    nameEs: 'Polvorones',
    description: 'Mexican Tricolor Shortbread Cookies',
    descriptionPt: 'Biscoitos Amanteigados Tricolor Mexicanos',
    descriptionEs: 'Galletas de Mantequilla Tricolor',
    price: 2.00,
    sixPackPrice: 11.00,
    twelvePackPrice: 20.00,
    twentyFourPackPrice: 38.00,
    category: 'mexican-cookies',
    status: 'available'
  },
  {
    id: 'galletas-canela',
    name: 'Galletas de Canela / Hojarascas',
    namePt: 'Galletas de Canela / Hojarascas',
    nameEs: 'Galletas de Canela / Hojarascas',
    description: 'Mexican Cinnamon Shortbread',
    descriptionPt: 'Biscoitos Amanteigados de Canela Mexicanos',
    descriptionEs: 'Galletas de Canela (Mantequilla)',
    price: 1.50,
    sixPackPrice: 8.00,
    twelvePackPrice: 15.00,
    twentyFourPackPrice: 28.00,
    category: 'mexican-cookies',
    status: 'available'
  },
  // Signature House Cookies
  {
    id: 'chocolate-chip',
    name: 'Classic Chocolate Chip Cookies',
    namePt: 'Cookies de Chocolate',
    nameEs: 'Galletas de Chispas de Chocolate',
    description: 'Soft-Baked House Favorite',
    descriptionPt: 'Favorito da Casa (Macios)',
    descriptionEs: 'Favorito de la Casa (Suaves)',
    price: 2.00,
    sixPackPrice: 11.00,
    twelvePackPrice: 20.00,
    twentyFourPackPrice: 38.00,
    category: 'house-cookies',
    status: 'available'
  },
  // Drinks
  {
    id: 'castello',
    name: 'Castello Mineral Water',
    namePt: 'Água Mineral Castello',
    nameEs: 'Agua Mineral Castello',
    description: 'Portuguese Mineral Water',
    descriptionPt: 'Água Mineral Portuguesa',
    descriptionEs: 'Agua Mineral Portuguesa',
    price: 2.00,
    sixPackPrice: 6.00,
    twelvePackPrice: 12.00,
    category: 'drinks',
    status: 'available'
  },
  {
    id: 'luso',
    name: 'Luso Water',
    namePt: 'Água Luso',
    nameEs: 'Agua Luso',
    description: 'Portuguese Mineral Water',
    descriptionPt: 'Água Mineral Portuguesa',
    descriptionEs: 'Agua Mineral Portuguesa',
    price: 2.00,
    category: 'drinks',
    status: 'available'
  },
  {
    id: 'sumol',
    name: 'Sumol',
    namePt: 'Sumol',
    nameEs: 'Sumol',
    description: 'Pineapple/Orange Soda',
    descriptionPt: 'Refrigerante de Ananás/Laranja',
    descriptionEs: 'Refresco de Piña/Naranja',
    price: 2.50,
    category: 'drinks',
    status: 'available'
  },
  {
    id: 'jarritos',
    name: 'Jarritos',
    namePt: 'Jarritos',
    nameEs: 'Jarritos',
    description: 'Mexican Soda (Mandarin/Lime)',
    descriptionPt: 'Refrigerante Mexicano (Tangerina/Lima)',
    descriptionEs: 'Refresco Mexicano (Mandarina/Lima)',
    price: 2.50,
    category: 'drinks',
    status: 'available'
  },
  {
    id: 'water',
    name: 'Bottled Water',
    namePt: 'Água',
    nameEs: 'Agua Embotellada',
    description: 'Still Water',
    descriptionPt: 'Água Sem Gás',
    descriptionEs: 'Agua Natural',
    price: 1.50,
    category: 'drinks',
    status: 'available'
  },
  // Package Deals
  {
    id: 'bom-dia-box',
    name: 'The "Bom Dia" Breakfast Box',
    namePt: 'Caixa "Bom Dia"',
    nameEs: 'Caja "Bom Dia"',
    description: '1 Loaf Pão de Milho, 6-Pack Bolos Lêvedos, 2 Classic Malassadas, 2 Sumol or Jarritos',
    descriptionPt: '1 Pão de Milho, 6 Bolos Lêvedos, 2 Malassadas Clássicas, 2 Sumol ou Jarritos',
    descriptionEs: '1 Pan de Maíz, 6 Bolos Lêvedos, 2 Malassadas Clásicas, 2 Sumol o Jarritos',
    price: 22.00,
    category: 'packages',
    status: 'available'
  },
  {
    id: 'sabor-sampler',
    name: 'The "Sabor" Sampler (Best Value)',
    namePt: 'O Sampler "Sabor" (Melhor Valor)',
    nameEs: 'El Sampler "Sabor" (Mejor Valor)',
    description: '6-Pack Papo Secos, 6-Pack Bolillos, 4 Conchas (Mix), 4 Donas de Açúcar, 4 Drinks of choice',
    descriptionPt: '6 Papo Secos, 6 Bolillos, 4 Conchas (Mix), 4 Donas de Açúcar, 4 Bebidas à escolha',
    descriptionEs: '6 Papo Secos, 6 Bolillos, 4 Conchas (Mix), 4 Donas de Azúcar, 4 Bebidas a elección',
    price: 35.00,
    category: 'packages',
    status: 'available'
  },
  {
    id: 'cookie-sampler',
    name: 'The "Nossa Casa" Cookie Sampler',
    namePt: 'Caixa de Biscoitos "Nossa Casa"',
    nameEs: 'Caja de Galletas "Nossa Casa"',
    description: '4 Chocolate Chip, 4 Marranitos, 4 Polvorones, 4 Biscoitos de Canela',
    descriptionPt: '4 Cookies de Chocolate, 4 Marranitos, 4 Polvorones, 4 Biscoitos de Canela',
    descriptionEs: '4 Galletas de Chocolate, 4 Marranitos, 4 Polvorones, 4 Biscoitos de Canela',
    price: 30.00,
    category: 'packages',
    status: 'available'
  }
]

export const allowedZipCodes = ["02910", "02920", "02921", "02893", "02886", "02907", "02909", "02908"]
