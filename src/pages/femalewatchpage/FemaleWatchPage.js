import React from 'react';
import ProductsFemaleWatch from './ProductsFemaleWatch';
import bannerFeMale from '../../Image/BannerFemaleWatch.png';
import Header from '../../Components/header/HeaderMain';
import "./FemaleWatch.css";
import Footer from '../../Components/footer/Footer';
const FemaleWatchPage = () => {
    return (
        <>
        <Header />
        <h3>Đồng hồ nữ đẹp, cao cấp chính hãng 100%, góp 0%, 1 đổi 1</h3>
        
        <div className='bannerFeMale'>
            <img src={bannerFeMale} alt="Banner"></img>
        </div>
        <p>Những mẫu đồng hồ nữ đẹp đã trở thành biểu tượng của giới mê thời trang bởi không chỉ thiết kế bắt mắt, mà còn nằm ở vật liệu bền bỉ theo thời gian, cỗ máy đáng tin cậy, tính năng hữu ích cho người sử dụng. Đặc biệt, các thương hiệu đồng hồ nữ thời trang như Daniel Wellington, Saga, Fossil,… làm rất tốt nhiệm vụ khi liên tục cho ra mắt bộ sưu tập mới hằng năm. Nếu bạn mê mẩn các sản phẩm đồng hồ đeo tay nữ cao cấp, Hải Triều là điểm đến tin cậy.</p>
        <ProductsFemaleWatch />
        <Footer/>
    </>
    );
}

export default FemaleWatchPage;