import * as React from 'react';
import './Yacht.styles.scss';
import {ReactComponent as HeartIcon} from "../../../assets/icons/heart.svg";
import {ReactComponent as UploadIcon} from "../../../assets/icons/upload.svg";
import {ReactComponent as PdfIcon} from "../../../assets/icons/pdf.svg";
import FeaturedFullIcon from '../../../assets/icons/featured_full.png';
import FeaturedIcon from '../../../assets/icons/featured.png';

const Yacht = ({yacht}) => {
  return (
    <div className='yacht'>
      <div className='yacht__image'>
        <div className='yacht__image-featured'>
          <div className='icons'>
            <div className='small'>
              <img src={FeaturedIcon} alt='small'/>
            </div>
            <div className='full'>
              <img src={FeaturedFullIcon} alt='full' />
            </div>
          </div>
        </div>
        <img src={yacht.image} alt='Yacht Name' className='main'/>
      </div>
      <p className='yacht__name'>
        {yacht.name}
      </p>
      <div className='yacht__info'>
        <div className='yacht__info-row'>
          <div className='yacht__info-block left'>
            <span className='yacht__info-label'>Type</span>
            <span className='yacht__info-value'>{yacht.type}</span>
          </div>
          <div className='yacht__info-block right'>
            <span className='yacht__info-label'>Length</span>
            <span className='yacht__info-value'>{yacht.length}</span>
          </div>
        </div>
        <div className='yacht__info-row'>
          <div className='yacht__info-block left'>
            <span className='yacht__info-label'>Builder</span>
            <span className='yacht__info-value'>{yacht.builder}</span>
          </div>
          <div className='yacht__info-block right'>
            <span className='yacht__info-label'>Built/Refit</span>
            <span className='yacht__info-value'>{yacht.built}</span>
          </div>
        </div>

      </div>
      <div className='yacht__price'>
        <span className='yacht__price-label'>Starting from</span>
        <span className='yacht__price-value'>USD 6,800 / day *</span>
      </div>
      <div className='yacht__operations'>
        <button className='yacht__btn--add-inquiry'>+ Add to Inquiry List</button>
        <button className='yacht__btn-icon heart'>
          <HeartIcon />
        </button>
        <button className='yacht__btn-icon'>
          <UploadIcon />
        </button>
        <button className='yacht__btn-icon'>
          <PdfIcon />
        </button>
      </div>
    </div>
  );
};


export default Yacht;