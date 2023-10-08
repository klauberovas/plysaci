import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import obrazekSlon from '../img/elephant.jpg';
import obrazekMys from '../img/mouse.jpg';
const name1 = 'Silvestr';
const image1 = './img/elephant.jpg';
const text1 =
  'Silvestr rád pozoruje dění za oknem a upřímně se usmívá na všechno kolemjdoucí.';

const name2 = 'Ctirad';
const image2 = obrazekMys;
const text2 =
  'Ctirad tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře.';

const Silvestr = () => {
  return (
    <div className="plushy">
      <img className="plushy__image" src={obrazekSlon} />
      <h2 className="plushy__name">{name1}</h2>
      <p className="plushy__text">{text1}</p>
    </div>
  );
};

const Ctirad = () => {
  return (
    <div className="plushy">
      <img className="plushy__image" src={image2} />
      <h2 className="plushy__name">{name2}</h2>
      <p className="plushy__text">{text2}</p>
    </div>
  );
};
document.querySelector('#root').innerHTML = render(
  <>
    <h1>Plyšáci</h1>
    <div className="plushies">
      <Silvestr />
      <Ctirad />
    </div>
  </>,
);
