import React from 'react';
import bannerSaga from '../../../Image/Banner Saga.png';
import Header from '../../../Components/header/HeaderMain';
import './saga.css';
import Footer from '../../../Components/footer/Footer';
import BrandSaga from '../../../Image/BrandSaga.png'
import BrandSaga2 from '../../../Image/BrandSaga2.png'
const Saga = () => {
    return (
        <>
            <Header/>
            <main className="container">
                <h3>SAGA – Đồng hồ, trang sức đính đá Swarovski chính hãng</h3>
                <div className='banner'>
                    <img src={bannerSaga} alt="Banner Saga"/>
                </div>
                <section>
                    <p>Đồng hồ đôi đẹp là sự “chắp cánh” tốt nhất cho tình yêu của hai bạn để bước thêm một nấc thang mới. Bạn sẽ thấy sức mạnh diệu kì đến từ món quà tặng tuyệt vời này, nó không chỉ nằm ở giá trị vật chất mà đồng hồ cặp (đôi) chính hãng còn mang những giá trị tinh thần hết sức ý nghĩa mà sẽ làm tình yêu đôi lứa bùng cháy và lưu giữ được những khoảng khắc thời gian lãng mạn trong tình yêu của hai bạn…</p>
                </section>
                <section>
                    <h4>Đôi nét về thương hiệu Saga</h4>
                    <p>Saga là một thương hiệu Mỹ thuộc tập đoàn Dailywin Watch Group, được thành lập vào năm 1950. Sau hơn 70 năm phát triển, Saga trở thành một mảnh ghép không thể thiếu trong bức tranh đồng hồ thời trang toàn cầu.</p>
                    <p>Từ thiết kế đến sản xuất, Saga đều mang tính độc nhất vô nhị, sáng tạo đỉnh cao. Hãng sở hữu cho mình một đội ngũ đến từ Thụy Sỹ và Hong Kong, có kiến thức chuyên môn, trải nghiệm sống đa dạng để cho ra đời những ý tưởng đáng kinh ngạc.</p>
                    <div className='banner'>
                    <img src={BrandSaga2} alt="BrandSaga2"/>
                </div>
                    <p>Tuy là thương hiệu Mỹ nhưng Saga lại có 3 cơ sở sản xuất và lắp ráp ở Trung Quốc với hơn 800 nhân công. Khoảng 3,6 triệu chiếc đồng hồ Saga xa xỉ đã được gửi đến khắp nơi trên thế giới mỗi năm.</p>
                    <p>Kể từ khi thành lập, hãng luôn tuân thủ vào kim chỉ nam: “Sáng tạo nghệ thuật bằng công nghệ”. Nhà mốt này luôn áp dụng khoa học công nghệ để duy trì và sáng tạo ra nhiều tuyệt tác thời gian đỉnh cao.</p>
                    <div className='banner'>
                    <img src={BrandSaga} alt="BrandSaga"/>
                </div>
                    <p>Lấy cảm hứng từ tháp phóng tên lửa, Saga đã tung ra bộ sưu tập Saga Zenith có mặt số lộ cơ toàn phần skeleton. Vẻ đẹp của vũ trụ rộng lớn xa xôi như được tái hiện gần gũi thông qua mặt số Saga Zenith.</p>
                    <p>Năm 2017, Saga trở thành đối tác chính thức duy nhất của Dự án Thám hiểm mặt trăng CLEP Trung Quốc, hỗ trợ giám sát quá trình thám hiểm hành tinh.</p>
                    <p>Điều đặc biệt hơn cả là Saga không lựa chọn bộ máy Nhật Bản mà đã bắt tay hợp tác với nhà máy Ronda – một trong những cơ sở sản xuất bộ máy danh giá nhất Thụy Sỹ.</p>
                    <p>Việc này giúp Saga nâng cao chất lượng đạt tiêu chuẩn Swiss Movt – điều mà nhiều thương hiệu mơ ước.</p>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default Saga;
