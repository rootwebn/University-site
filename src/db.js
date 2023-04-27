import img1Section2 from '../public/img/img2.png';
import img2Section2 from '../public/img/img3.jpg';
import img3Section2 from '../public/img/img4.png';
import { 
  section2Item1, 
  section2Item1Small, 
  section2Item2,
  section2Item2Small,
  section2Item3,
  section2Item3Small,
  section4Item1,
  section4Item2,
  section4Item3,
  section4Item4 
} from './variants';

export const section2Data = [
  {
    id: 0,
    animation: section2Item1,
    animationSmallScreen: section2Item1Small,
    header: 'Practical task 1.8-1.9',
    tagName: 'Practical tasks',
    imgSrc: img3Section2,
    authorName: 'Made by: Stecenko Viacheslav',
    date: 'Made at: 17.04.2023',
    linkWork: 'https://docs.google.com/spreadsheets/d/1OVER5Hsf9VL0K-zWaulDcQPt8lf4TbLSlCAJrydsp_U/edit?usp=sharing',
  },
  {
    id: 1,
    animation: section2Item2,
    animationSmallScreen: section2Item2Small,
    header: 'Independent task',
    tagName: 'Tasks',
    imgSrc: img2Section2,
    authorName: 'Made by: Stecenko Viacheslav',
    date: 'Made at: 17.04.2023',
    linkWork:'https://docs.google.com/spreadsheets/d/10NpuG-qHGrprzP0u2Cj8K9km7Kd52pk7QJqltwEmx7w/edit?usp=sharing',
  },
  {
    id: 2,
    animation: section2Item3,
    animationSmallScreen: section2Item3Small,
    header: 'Practical task 1.7',
    tagName: 'Practical tasks',
    imgSrc: img1Section2,
    authorName: 'Made by: Stecenko Viacheslav',
    date: 'Made at: 17.04.2023',
    linkWork:'',
  },
];

export const section4Data = [
  {
    id: 0,
    animation: section4Item1,
    pData: 'Vectors and icons by',
    aData: 'SVG Repo',
    aHref: 'https://www.svgrepo.com'
  },
  {
    id: 1,
    animation: section4Item2,
    pData: '',
    aData: 'Vector Flat style Illustration. Vectors by Vecteezy',
    aHref: 'https://www.vecteezy.com/vector-art/560307-happy-businessman-working-on-a-personal-computer-sitting-on-a-brown-leather-chair-behind-the-office-desk-vector-flat-style-illustration'
  },
  {
    id: 2,
    animation: section4Item3,
    pData: '',
    aData: 'Image from Pinterest',
    aHref: 'https://www.pinterest.com.mx/pin/31736372359977462/'
  },
  {
    id: 3,
    animation: section4Item4,
    pData: '',
    aData: 'Source code site',
    aHref: 'https://github.com/rootwebn/University-site'
  },
];