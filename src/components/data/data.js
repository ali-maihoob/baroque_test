import YachtImageOne from '../../assets/images/yachts/yacht1.png';
import YachtImageTwo from '../../assets/images/yachts/yacht2.png';
import BravoImage from '../../assets/images/yachts/bravo.jpg';
import RecordImage from '../../assets/images/yachts/Record.jpg';
import PuraImage from '../../assets/images/yachts/Pura.jpg';
import ChateauImage from '../../assets/images/yachts/chateau.jpg';
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