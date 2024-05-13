import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import '../../css/ProductDetail.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; // useParams를 사용하여 URL 파라미터를 가져옴

import kaleImage from '../../images/kale.jpg';

// 제품 데이터
const products = [
    {
        id: 1,
        product_title: '케일',
        product_price: 25000,
        product_seller: '판매자 이름',
        product_address: '경산하양시',
        product_description: '케일 설명들, 케일 설명들, 케일 설명들, 케일 설명들,\n 케일 설명들, 케일 설명들, 케일 설명들, 케일 설명들, 케일 설명들, 케일 설명들,\n 케일 설명들, 케일 설명들, 케일 설명들 \n\n 케일 팝니다 \n\n \n\n \n\n \n\n \n\n\n\nddddd\n\n\n\ndddddddddd\n\n\n\n\dddddn\n\n\n\n\n\ddddddddn\n\n\n\n\n',
        product_image_path: kaleImage,
        created_at: '2023-05-10',
    },
    {
        id: 2,
        product_title: '당근',
        product_price: 3000,
        product_seller: '판매자 이름',
        product_address: '경산하양시',
        product_description: '당근 설명들, 당근 설명들, 당근 설명들...',
        product_image_path: kaleImage,
        created_at: '2024-05-13',
    },
    // 다른 상품 추가 가능
];

// 날짜를 포맷하는 함수
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // 'YYYY-MM-DD' 형식의 날짜 문자열을 읽기 쉬운 형식으로 변환
};

function ProductDetailPage() {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const { id } = useParams(); // URL에서 id 파라미터를 가져옴

    // 선택된 상품 찾기
    const selectedProduct = products.find(product => product.id === parseInt(id));

    // 설명을 축약하여 일부만 보여주는 함수
    const getShortDescription = (description) => {
        const maxCharacters = 100; // 최대 표시 문자 수
        if (description.length <= maxCharacters) {
            return description; // 설명이 짧은 경우 전체를 보여줌
        }
        return description.slice(0, maxCharacters) + '...<더보기>'; // 설명이 긴 경우 축약
    };

    if (!selectedProduct) return <div>상품을 찾을 수 없습니다.</div>;

    return (
        <div>
            <NavBar />
            <div className='product-detail-container'>
                <div className='product-detail'>
                    <img
                        className='product-detail-img'
                        src={selectedProduct.product_image_path}
                        alt={selectedProduct.product_title}
                    />
                    <div className='product-detail-info'>
                        <Container>
                            <Row>
                                <Col md={4}>
                                    <h2>{selectedProduct.product_title}</h2>
                                    <p><strong>판매자:</strong> {selectedProduct.product_seller}</p>
                                    <p><strong>주소:</strong> {selectedProduct.product_address}</p>
                                </Col>
                                <Col md={{ span: 4, offset: 4 }}>
                                    <p><strong>가격:</strong> {selectedProduct.product_price}원</p>
                                </Col>
                            </Row>

                            {/* 설명 부분 */}
                            <div style={{ whiteSpace: 'pre-line' }}>
                                {showFullDescription 
                                    ? selectedProduct.product_description 
                                    : getShortDescription(selectedProduct.product_description)}
                            </div>

                            {/* 더 보기/축소하기 버튼 */}
                            <Button
                                onClick={() => setShowFullDescription(!showFullDescription)}
                                aria-controls="product-description"
                                aria-expanded={showFullDescription}
                            >
                                {showFullDescription ? '설명 축소하기' : '설명 더 보기'}
                            </Button>

                            <div className='product-created-at'>
                                <strong>등록일:</strong> {formatDate(selectedProduct.created_at)}
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetailPage;

