import React from 'react';
import BannerCouple from '../../Image/CoupleWatch.png';
import ProductsCoupleWatch from './ProductsCoupleWatch';
import Header from '../../Components/header/HeaderMain';
import Footer from '../../Components/footer/Footer';
const CoupleWatchPage = () => {
    return (
        <>
         <Header/>
         <h3>Đồng hồ đôi (cặp) đẹp, chính hãng 100%, trả góp 0%</h3>
        <div className='bannerCouple'>
            <img src={BannerCouple} alt="Banner"></img>
        </div>
        <p>Đồng hồ đôi đẹp là sự “chắp cánh” tốt nhất cho tình yêu của hai bạn để bước thêm một nấc thang mới. Bạn sẽ thấy sức mạnh diệu kì đến từ món quà tặng tuyệt vời này, nó không chỉ nằm ở giá trị vật chất mà đồng hồ cặp (đôi) chính hãng còn mang những giá trị tinh thần hết sức ý nghĩa mà sẽ làm tình yêu đôi lứa bùng cháy và lưu giữ được những khoảng khắc thời gian lãng mạn trong tình yêu của hai bạn…</p>
        <ProductsCoupleWatch />
        <Footer/>
    </>
    );
}

export default CoupleWatchPage;
