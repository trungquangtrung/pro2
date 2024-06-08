import React from 'react';
import bannerKOI from '../../../Image/BannerKoi.png'
import Header from '../../../Components/header/HeaderMain';
import './koi.css'
import Footer from '../../../Components/footer/Footer';
import BrandKOI from '../../../Image/BrandKOI.png'
const KOI = () => {
    return (
        <>
         <Header/>
         <h3>KOI Watch – Đồng hồ có chất lượng tốt nhất tầm giá 5 triệu</h3>
        <div className='banner'>
            <img src={bannerKOI} alt="Banner"></img>
        </div>
        <p>Đồng hồ đôi đẹp là sự “chắp cánh” tốt nhất cho tình yêu của hai bạn để bước thêm một nấc thang mới. Bạn sẽ thấy sức mạnh diệu kì đến từ món quà tặng tuyệt vời này, nó không chỉ nằm ở giá trị vật chất mà đồng hồ cặp (đôi) chính hãng còn mang những giá trị tinh thần hết sức ý nghĩa mà sẽ làm tình yêu đôi lứa bùng cháy và lưu giữ được những khoảng khắc thời gian lãng mạn trong tình yêu của hai bạn…</p>
        <p>
                    Đồng hồ đôi đẹp là sự “chắp cánh” tốt nhất cho tình yêu của hai bạn để bước thêm một nấc thang mới. 
                    Bạn sẽ thấy sức mạnh diệu kì đến từ món quà tặng tuyệt vời này, nó không chỉ nằm ở giá trị vật chất 
                    mà đồng hồ cặp (đôi) chính hãng còn mang những giá trị tinh thần hết sức ý nghĩa mà sẽ làm tình yêu đôi 
                    lứa bùng cháy và lưu giữ được những khoảng khắc thời gian lãng mạn trong tình yêu của hai bạn…
                </p>
                <h3>Lịch sử thành lập thương hiệu đồng hồ KOI</h3>
                <section>
                    <p>
                        KOI là một thương hiệu Việt Nam ra đời vào tháng 2 năm 2023. Sau một lần ghé thăm triển lãm đồng hồ lớn nhất thế giới 
                        tại Hong Kong vào năm 2018, ban lãnh đạo Đồng Hồ Hải Triều đã nung nấu giấc mơ về một thương hiệu do chính người Việt thiết kế.
                    </p>
                    <p>
                        Xa hơn là thương hiệu ấy sẽ được vươn ra thế giới, “sánh vai” cùng các tên tuổi lớn như Casio, Citizen hay Daniel Wellington,… 
                        Từ đó, mở ra tầm nhìn mới cho ngành đồng hồ Việt Nam trong tương lai gần. Và sau khoảng 5 năm ấp ủ và chuẩn bị chu đáo, KOI đã ra đời.
                    </p>
                    <div className='banner'>
                    <img src={BrandKOI} alt="BrandKOI"/>
                </div>
                    <p>
                        Từ ý tưởng sơ khai cho đến ngày thành hình hài nguyên vẹn, KOI luôn mang những cột mốc vàng son, ghi dấu các tích lũy quý giá 
                        của Hải Triều trong hơn 30 năm làm nghề với cỗ máy thời gian.
                    </p>
                    <p>
                        Điểm đặc biệt là dù sản phẩm của KOI mang ý tưởng sáng tạo của người Việt nhưng vẫn thể hiện đẳng cấp quốc tế trong từng chất liệu, thiết kế, cỗ máy,…
                    </p>
                    <p>
                        Với “sứ mệnh” là một thương hiệu đồng hồ Việt Nam dành cho giới trẻ, cặp đôi trong phân khúc giá bình dân, KOI dần nhận được sự đón nhận nhiệt tình 
                        và trở thành niềm tự hào của người Việt.
                    </p>
                </section>
        <Footer/>
    </>
    );
}

export default KOI;
