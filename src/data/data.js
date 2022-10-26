import YachtImageOne from '../assets/images/yachts/yacht1.png';
import YachtImageTwo from '../assets/images/yachts/yacht2.png';
import BravoImage from '../assets/images/yachts/bravo.jpg';
import RecordImage from '../assets/images/yachts/Record.jpg';
import PuraImage from '../assets/images/yachts/Pura.jpg';
import ChateauImage from '../assets/images/yachts/chateau.jpg';
export const Yachts = [
  {
    id: 1,
    image: YachtImageOne,
    name: 'MIA ELISE II',
    type: 'Motorboat',
    length: '110m (360 ft 11 in)',
    builder: 'John Doe/Refit',
    built: '2008/2020',
    startingPrice: 'USD 6,800 / day *',
    isFeatured: true
  },
  {
    id: 2,
    image: PuraImage,
    name: 'Pura Vida',
    type: 'Motorboat',
    length: '20.7 M (68 Ft 11 In)',
    builder: 'Princess',
    built: '2003/2017',
    startingPrice: 'USD 4,014 / day *',
    isFeatured: false
  },
  {
    id: 3,
    image: RecordImage,
    name: 'Record Year',
    type: 'Motorboat',
    length: '21.9 M (72 Ft 2 In)',
    builder: 'Galeon',
    built: '2020',
    startingPrice: 'USD 7,000 / day *',
    isFeatured: true
  },
  {
    id: 4,
    image: YachtImageTwo,
    name: 'Triple Net',
    type: 'Motorboat',
    length: '28 M (92 Ft)',
    builder: 'Monte Fino',
    built: '2021',
    startingPrice: 'USD 8,000 / day *',
    isFeatured: true
  },
  {
    id: 5,
    image: ChateauImage,
    name: 'Mon Chateau',
    type: 'Motorboat',
    length: '26.8 M (88 Ft)',
    builder: 'Sanlorenzo',
    built: '2020',
    startingPrice: 'USD 10,000 / day *',
    isFeatured: false
  },
  {
    id: 6,
    image: BravoImage,
    name: 'Bravo Delta',
    type: 'Motorboat',
    length: '23.8 M (78 Ft 7 In)',
    builder: 'Leopard',
    built: '2006/2016',
    startingPrice: 'USD 5,200 / day *',
    isFeatured: false
  }
]

export const lookingOptions = [
  {
    id: 1,
    value: 'Daily Charter'
  },
  {
    id: 2,
    value: 'Weekly Charter'
  },
  {
    id: 3,
    value: 'Buy Yacht'
  },
];

export const locationOptions = [
  {
    id: 1,
    value: 'Any'
  },
  {
    id: 2,
    value: 'Greece'
  },
  {
    id: 3,
    value: 'Croatia'
  },
  {
    id: 3,
    value: 'Turkey'
  },
];

export const yachtNamesOptions = [
  {
    id: 1,
    value: 'Any'
  },
  {
    id: 2,
    value: 'Bravo Delta'
  },
  {
    id: 3,
    value: 'Mon Chateau'
  },
  {
    id: 4,
    value: 'Triple Net'
  },
];

export const filterByOptions = [
  {
    id: 1,
    value: 'Featured only'
  },
  {
    id: 2,
    value: 'Non-featured only'
  },
];

export const yachtTypeOptions = [
  {
    id: 1,
    value: 'Both'
  },
  {
    id: 2,
    value: 'Motorboat'
  },
  {
    id: 3,
    value: 'Normal'
  },
];

export const builderOptions = [
  {
    id: 1,
    value: 'Any'
  },
  {
    id: 2,
    value: 'Galeon'
  },
  {
    id: 3,
    value: 'Leopard'
  },
  {
    id: 4,
    value: 'Princess'
  },
  {
    id: 5,
    value: 'Monte Feno'
  }
];

export const builtOptions = [
  {
    id: 1,
    value: 'Any'
  },
  {
    id: 2,
    value: '2022'
  },
  {
    id: 3,
    value: '2021'
  },
  {
    id: 4,
    value: '2020'
  },
  {
    id: 5,
    value: '2019'
  },
  {
    id: 6,
    value: '2018'
  },
  {
    id: 7,
    value: '2017'
  },
  {
    id: 8,
    value: '2016'
  },
];

export const refitOptions = [
  {
    id: 1,
    value: 'Any'
  },
  {
    id: 2,
    value: '2022'
  },
  {
    id: 3,
    value: '2021'
  },
  {
    id: 4,
    value: '2020'
  },
  {
    id: 5,
    value: '2019'
  },
  {
    id: 6,
    value: '2018'
  },
  {
    id: 7,
    value: '2017'
  },
  {
    id: 8,
    value: '2016'
  },
];

export const lengthOptions = [
  {
    id: 1,
    value: 'Ft'
  },
  {
    id: 2,
    value: 'Mt'
  },
];

export const currencyOptions = [
  {
    id: 1,
    value: 'USD'
  },
  {
    id: 2,
    value: 'EUR'
  },
  {
    id: 3,
    value: 'AED'
  },
];

export const toysOptions = [
  {
    id: 1,
    value: 'Any'
  },
  {
    id: 2,
    value: 'Toy One'
  },
  {
    id: 3,
    value: 'Toy Two'
  },
  {
    id: 4,
    value: 'Toy Three'
  },
];

export const amenitesOptions = [
  {
    id: 1,
    value: 'Any'
  },
  {
    id: 2,
    value: 'Option One'
  },
  {
    id: 3,
    value: 'Option Two'
  },
  {
    id: 4,
    value: 'Option Three'
  },
];

export const sortOptions = [
  {
    id: 1,
    value: 'Price Low to High'
  },
  {
    id: 2,
    value: 'Price High to Low'
  },
  {
    id: 3,
    value: 'Length Low to High'
  },
  {
    id: 4,
    value: 'Length High to Low'
  },
];

export const cabinsOptions = [
  {
    id: 1,
    value: 'Any'
  },
  {
    id: 2,
    value: '1'
  },
  {
    id: 3,
    value: '2'
  },
  {
    id: 4,
    value: '3'
  },
];