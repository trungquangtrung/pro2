import React from 'react';
import bannerSeiko from '../../../Image/Banner Seiko.png'
import Header from '../../../Components/header/HeaderMain';
import './seiko.css'
import Footer from '../../../Components/footer/Footer';
import BrandSeiko from '../../../Image/BrandSeiko.png'
import BrandSeiko2 from '../../../Image/BrandSeiko2.png'
import BrandSeiko3 from '../../../Image/BrandSeiko3.png'
const Seiko = () => {
    return (
        <>
            <Header />
            <h3>Đồng hồ Seiko chính hãng, cao cấp, BH 5 năm, 1 đổi 1, góp 0%</h3>
            <div className='banner'>
                <img src={bannerSeiko} alt="Banner"></img>
            </div>
            <p>Đồng hồ đôi đẹp là sự “chắp cánh” tốt nhất cho tình yêu của hai bạn để bước thêm một nấc thang mới. Bạn sẽ thấy sức mạnh diệu kì đến từ món quà tặng tuyệt vời này, nó không chỉ nằm ở giá trị vật chất mà đồng hồ cặp (đôi) chính hãng còn mang những giá trị tinh thần hết sức ý nghĩa mà sẽ làm tình yêu đôi lứa bùng cháy và lưu giữ được những khoảng khắc thời gian lãng mạn trong tình yêu của hai bạn…</p>
            <h3>Lịch sử hình thành gần 150 năm của hãng đồng hồ Seiko</h3>
            <p>Seiko được biết đến là thương hiệu đồng hồ đeo tay lâu đời nhất tại Nhật Bản có gần 150 năm phát triển với nhiều cột mốc đáng nhớ.</p>
            <selection>
                <h4>Giai đoạn 1: Khởi đầu suôn sẻ (1881-1895)</h4>

                <p>Năm 1881, doanh nhân trẻ Kintaro Hattori mở một cửa hàng bán lẻ và sửa chữa đồng hồ đeo tay ở trung tâm thành phố Tokyo.
                    11 năm sau, ông mua lại một nhà máy bỏ hoang ở Tokyo và thành lập Seikosha (Trong tiếng Nhật, “Seiko” có nghĩa là thành công và “sha” là ngôi nhà).</p>


                <p>Trong suốt những năm 1890, sự thành công trong việc kinh doanh đồng hồ treo tường của Seikosha ngày càng tăng và Kintaro đã tìm cách mở rộng phạm vi kinh doanh của mình.</p>

                <p>Năm 1895, ông tạo ra phụ kiện xem giờ bỏ túi có tên là “Timekeeper”, mở đường cho chiếc đồng hồ đeo tay đầu tiên của Nhật Bản.</p>
            </selection>

            <selection>
            <div className='banner'>
                <img src={BrandSeiko} alt="BrandSeiko"></img>
            </div>
                <h4>Giai đoạn 2: Bước đột phá và tiên phong (1899-1922)</h4>

                <p>Năm 1899, Seiko bắt đầu sản xuất đồng hồ báo thức. 10 năm sau, hãng đã tự chế tạo riêng cho mình bánh răng tự động.</p>

                <p>Vào đầu thời đại Taisho, phụ kiện xem giờ bỏ túi vẫn rất phổ biến và chỉ có một số ít mẫu đeo tay nhập khẩu vào Nhật Bản. Tuy nhiên, Kintaro đã quyết tâm đi trước một bước và bắt tay vào nhiệm vụ gian khổ là tạo ra cỗ máy thời gian đeo tay đầu tiên của Nhật Bản.</p>

                <p>Năm 1913, ông đã thành công và Seiko Laurel ra đời. Trong những ngày đầu, công ty chỉ có thể sản xuất 30 đến 50 chiếc đồng hồ mỗi ngày.</p>

                <p>Nhưng đến năm 1915, Seiko Watch nhận được đơn đặt hàng cực lớn từ Anh và Pháp với tổng số sản phẩm cần phải làm là 900.000 chiếc.</p>
            </selection>
            <selection>
            <div className='banner'>
                <img src={BrandSeiko2} alt="BrandSeiko"></img>
            </div>
                <h4>Giai đoạn 3: Biến cố và xoay chuyển tình thế (1923-1929)</h4>

                <p>Tháng 9 năm 1923, một trận động đất lớn tại Kanto đã khiến cho toàn bộ nhà máy Seikosha bị phá hủy. Dù bị thiệt hại lớn về tài sản nhưng hãng đã đưa ra một quyết định táo bạo, giúp thương hiệu nhận được sự yêu mến từ công chúng.</p>

                <p>Đó là hãng sẽ sửa chữa, thay thế miễn phí tất cả sản phẩm bị phá hủy trong thảm họa động đất thành những cỗ máy thời gian hoàn toàn mới.</p>

                <p>Vào năm 1924, thiết kế mang thương hiệu Seiko đầu tiên ra đời, đánh dấu cho sự trở lại và phát triển mạnh mẽ của hãng.</p>

                <p>Tiếp nối thành công, năm 1929, phụ kiện xem giờ bỏ túi Seiko được bổ nhiệm làm “đồng hồ đường sắt” chính thức của hãng Đường sắt Quốc gia Nhật Bản.</p>
            </selection>
            <selection>
            <div className='banner'>
                <img src={BrandSeiko3} alt="BrandSeiko"></img>
            </div>
                <h4>Giai đoạn 4: Phát triển mạnh mẽ (1932-1969)</h4>

                <p>Năm 1937, nhà máy Daini Seikosha (nay là Seiko Instruments Inc.) được thành lập.</p>

                <p>Năm 1956, hãng phát minh ra cơ chế chống sốc “Diashock”. Cũng trong năm này, Seiko Marvel – chiếc đồng hồ tự lên dây cót đầu tiên trang bị hệ thống “Magic Lever” độc quyền ra đời.</p>

                <p>Năm 1960, đồng hồ Grand Seiko được công nhận là cỗ máy thời gian có độ chính xác cao nhất thế giới.</p>

                <p>Năm 1964, Seiko Chronograph đầu tiên ra đời. Một năm sau, hãng ra mắt chiếc đồng hồ lặn chống thấm nước ở độ sâu 150m với cấu trúc đóng gói kép để chịu áp lực nước cao.</p>

                <p>Đến năm 1969, thương hiệu Nhật Bản gây tiếng vang mạnh mẽ trên thế giới với chiếc đồng hồ thạch anh đầu tiên: Seiko Quartz Astron. Độ sai số chỉ 5 giây mỗi tháng.</p>
                <h4>Giai đoạn 5: Thời đại công nghệ lên ngôi (1973-nay)</h4>

                <p>Năm 1975, Seiko trình làng thiết kế Professional Diver’s 600m có vỏ titanium với khả năng lặn sâu đến 600m.
                </p>
                <p>Năm 1982, đồng hồ truyền hình đầu tiên trên thế giới ra đời, được trang bị đài FM, bộ dò kênh và giắc cắm tai nghe để xem TV mọi lúc, mọi nơi.</p>

                <p>Năm 1983, đồng hồ Seiko thạch anh analog có chức năng bấm giờ Chronograph ra mắt.</p>

                <p>Năm 1998, một thế hệ sử dụng máy cơ Grand Seiko mới ra đời sau 20 năm.</p>

                <p>Năm 2005, giới thiệu bộ máy lên dây tự động Grand Seiko Spring Drive đầu tiên, dự trữ năng lượng đến 72 giờ. Chỉ Spring Drive mới thể hiện dòng thời gian một cách tự nhiên và mượt mà, không có tiếng ‘tích tắc’ khi các kim di chuyển theo chuyển động lướt hoàn hảo.</p>

                <p>Năm 2012, bằng cách phát triển bộ thu GPS tiêu thụ năng lượng thấp, hãng đã có thể tạo ra đồng hồ Seiko Astron có thể nhận tín hiệu GPS và xác định dữ liệu múi giờ, thời gian và ngày bằng mạng lưới vệ tinh toàn cầu, mở ra một kỷ nguyên mới.</p>

                <p>Đến 2017, Grand Seiko trở thành một thương hiệu độc lập với Seiko do sự khác biệt trong thiết kế, đặc điểm, bộ máy. Ngoài ra, đồng hồ Grand Seiko muốn hướng đến nhiều đối tượng hơn nên lựa chọn tách riêng với Seiko cũng là điều dễ hiểu.</p>

                <p>Quả thật, sau khi khám phá hết lịch sử phát triển của hãng, chúng ta có thể hiểu tại sao thương hiệu này lại tồn tại lâu đời và giữ vững vị thế của mình đến như vậy.</p>
            </selection>


            <Footer />
        </>
    );
}

export default Seiko;
