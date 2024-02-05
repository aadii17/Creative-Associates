import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { yPosContext, portfolioContext } from '../context/global-state';
import '../styles/portfolio_detail.css';
import Loading from './Loading';

function PortfolioDetail() {
  const { year, slug } = useParams();
  const { yPos, setYPos } = useContext(yPosContext);
  const { portfolioData, setPortfolioData } = useContext(portfolioContext);

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [desc, setDesc] = useState('');
  const [imageList, setImageList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const handleScroll = () => setYPos(window.pageYOffset);

  const default_URL = '/project/portfolios';

  // Check if portfolio exists
  if (typeof portfolioData.data !== 'undefined') {
    let found = false;

    portfolioData.data.Years.forEach((data) => {
      if (data === year) {
        found = true;
      }
    });

    if (!found) {
      alert('Portfolio tidak ada');
      window.location = '/';
    } else {
      found = false;
      portfolioData.data.result[portfolioData.data.Years.indexOf(year)].Projects.forEach((data) => {
        if (data.Name === slug) {
          found = true;
        }
      });

      if (!found) {
        alert('Portfolio tidak ada');
        window.location = '/';
      }
    }
  }

  useEffect(() => {
    document.title = `Portfolio - ${slug}`;

    if (typeof portfolioData.data !== 'undefined') {
      setLoading(false);

      portfolioData.data.result[portfolioData.data.Years.indexOf(year)].Projects.forEach((data) => {
        if (data.Name === slug) {
          setTitle(data.Name);
          setSubtitle(data.Subtitle || '');
          setDesc(data.Desc);
          setImageList(data.Pictures);
        }
      });
    } else {
      setLoading(true);
    }
  }, [portfolioData, year, slug]);

  const gallery_tile_l = [];
  const gallery_tile_r = [];

  imageList.forEach((image, index) => {
    if (index % 2 !== 0) {
      gallery_tile_l.push(
        <img
          key={index}
          className='gallery-tile'
          src={`${default_URL}/${year}/${slug}/${image}`}
          alt={`gallery-${index}`}
        />
      );
    } else {
      gallery_tile_r.push(
        <img
          key={index}
          className='gallery-tile'
          src={`${default_URL}/${year}/${slug}/${image}`}
          alt={`gallery-${index}`}
        />
      );
    }
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className='portfolio-detail-parent'>
      <div className='left'>
        <div className='portfolio-detail-bg'>
          <img
            src={imageList.length > 0 ? `${default_URL}/${year}/${slug}/${imageList[0]}` : ''}
            alt='project'
          />
        </div>
        <div className='portfolio-desc-parent'>
          <h2 className='subtitle'>{subtitle}</h2>
          <div className='portfolio-desc'>
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
        </div>
      </div>
      <div className='right'>
        <div className='gallery gallery-l'>{gallery_tile_l}</div>
        <div className='gallery gallery-r'>{gallery_tile_r}</div>
      </div>
    </div>
  );
}

export default PortfolioDetail;
