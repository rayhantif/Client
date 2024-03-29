import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Icon, Col, Card, Row } from 'antd';
import ImageSlider from '../../utils/ImageSlider';
import Header from '../Header/Header';

const { Meta } = Card;

function LandingPage() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    Axios.post('/api/product/getProducts').then(response => {
      if (response.data.success) {
        setProducts(response.data.products);
        console.log(response.data.products);
      } else {
        alert('Failed');
      }
    });
  }, []);

  const renderCards = Products.map((product, index) => {
    return (
      <Col lg={6} md={8} xs={24}>
        <Card hoverable={true} cover={<ImageSlider images={product.images} />}>
          <Meta title={product.title} description={product.description} />
        </Card>
      </Col>
    );
  });

  return (
    <div style={{ width: '75%', margin: '5rem auto' }}>
      <div style={{ textAlign: 'center', margin: '5rem' }}>
        <h2>
          {' '}
          Cari Barang Anda <Icon type="search" />{' '}
        </h2>
      </div>

      {Products.length === 0 ? (
        <div
          style={{
            display: 'flex',
            height: '300px',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h2>No post yet...</h2>
        </div>
      ) : (
        <div>
          <Row gutter={[16, 16]}>{renderCards}</Row>
        </div>
      )}
      <br />
      <br />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button>Load More</button>
      </div>
    </div>
  );
}

export default LandingPage;
