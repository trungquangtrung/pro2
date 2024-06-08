import React from 'react';
import ProductsMaleWatch from '../malewatchpage/ProductsMaleWatch';
import Header from '../../Components/header/HeaderMain';
import bannerMale from '../../Image/BannerMaleWatch.png';
import "./MaleWatch.css";
import Footer from '../../Components/footer/Footer';
const MaleWatchPage = () => {
    return (
        <>
            <Header />
            <h3>Đồng hồ nam đẹp chính hãng, cao cấp, mẫu mới 2024, góp 0%</h3>
            <div className='bannerMale'>
                <img src={bannerMale} alt="Banner"></img>
            </div>
           <p>Những mẫu đồng hồ nam đẹp luôn là món phụ kiện thời trang hoàn hảo cho tất cả các dịp, giúp nam giới tự tin hơn – khẳng định phong cách. Đặc biệt khi mà nhiều thương hiệu đồng hồ nam thời trang quốc tế du nhập vào Việt Nam, việc mua sắm chiếc đồng hồ đeo tay nam phù hợp rất dễ dàng bởi sự đa dạng về mẫu mã, màu sắc, tính năng và kiểu dáng. Shop Đồng Hồ Hải Triều hiện là đại lý ủy quyền của gần 30 thương hiệu, mang cả thế giới đồng hồ về trưng bày tại hơn 25 chi nhánh trên toàn quốc.</p>
            <ProductsMaleWatch />
            <Footer/>
        </>
    );
}
export default MaleWatchPage;
