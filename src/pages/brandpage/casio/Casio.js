import React from 'react';
import bannerCasio from '../../../Image/Banner Casio.png';
import Header from '../../../Components/header/HeaderMain';
import Footer from '../../../Components/footer/Footer';
import './casio.css';
import BrandCasio from '../../../Image/BrandCasio.png'
import BrandCasio2 from '../../../Image/BrandCasio2.png'
import BrandCasio3 from '../../../Image/BrandCasio3.png'
const Casio = () => {
    return (
        <>
            <Header/>
            <main>
                <h3>Đồng hồ Casio đẹp, chính hãng, BH 5 năm, 1 đổi 1, góp 0%</h3>
                <div className='banner'>
                    <img src={bannerCasio} alt="Banner Casio"/>
                </div>
                <p>
                    Đồng hồ đôi đẹp là sự “chắp cánh” tốt nhất cho tình yêu của hai bạn để bước thêm một nấc thang mới. 
                    Bạn sẽ thấy sức mạnh diệu kì đến từ món quà tặng tuyệt vời này, nó không chỉ nằm ở giá trị vật chất 
                    mà đồng hồ cặp (đôi) chính hãng còn mang những giá trị tinh thần hết sức ý nghĩa mà sẽ làm tình yêu đôi 
                    lứa bùng cháy và lưu giữ được những khoảng khắc thời gian lãng mạn trong tình yêu của hai bạn…
                </p>
                <h3>Lịch sử phát triển gần 1 thế kỷ của thương hiệu Casio</h3>
                <section>
                    <h4>Giai đoạn 1946 – 1970: Xây dựng và tập trung phát triển máy tính</h4>
                    <p>
                        Tính đến hiện tại, Casio đã có lịch sử gần 80 năm huy hoàng trong ngành công nghiệp sản xuất đồng hồ, 
                        máy tính với nhiều cột mốc chói lọi.
                    </p>
                    <p>
                        Tháng 4/1946, Casio được thành lập tại Tokyo bởi ông Tadao Kashio và ba anh em của mình. Ban đầu, công ty 
                        tập trung vào sản xuất các mẫu máy tính. Năm 1957, Casio chế tạo thành công máy tính chạy hoàn toàn bằng 
                        điện đầu tiên trên thế giới.
                    </p>
                </section>
                <section>
                    <h4>Giai đoạn 1970 – 1980: Cuộc cách mạng của đồng hồ điện tử</h4>
                    <p>
                        Những năm 1970 là thời kỳ chứng kiến sự ra đời của cỗ máy thời gian sử dụng chất liệu thạch anh. Casio đã 
                        nhận ra rằng mình có thể tận dụng tối đa kinh nghiệm và công nghệ đã sử dụng trên máy tính để sản xuất 
                        đồng hồ điện tử.
                    </p>
                    <p>
                        Năm 1974, Casio đã cho ra mắt Casiotron – thiết kế điện tử đầu tiên trên thế giới sử dụng màn hình LCD, đã 
                        trở thành sự kiện tiên tiến lớn trong ngành công nghiệp xa xỉ. Ngoài ra, sản phẩm này còn được trang bị lịch 
                        ngày tự động điều chỉnh theo tháng, không phải phải đặt lịch lại vào đầu tháng.
                    </p>
                    <p>
                        Với sự thành công của Casiotron, Casio đã tiếp tục nghiên cứu và phát triển các sản phẩm điện tử có công nghệ 
                        tiên tiến, chẳng hạn như khả năng tính toán, chơi trò chơi,…
                    </p>
                    <div className='BrandCasio'>
                    <img src={BrandCasio} alt="BrandCasio"/>
                </div>
                </section>
                <section>
                    <h4>Giai đoạn 1980 – 1990: Sự ra đời của G-Shock</h4>
                    <p>
                        Năm 1983, Casio cho ra mắt dòng G-Shock, đánh dấu bước ngoặt lớn trong lịch sử phát triển của thương hiệu. G-Shock – 
                        dòng đồng hồ chống va đập, chống nước, chống bụi,… thiết kế dành cho người chơi thể thao, hoạt động ngoài trời.
                    </p>
                    <p>
                        Sau đó, thương hiệu này tiếp tục đầu tư nâng cao chất lượng của sản phẩm, đưa ra dây đeo kim loại đi cùng để phù hợp 
                        hơn với tệp khách hàng trưởng thành. G-Shock đã nhanh chóng trở thành một hiện tượng toàn cầu, và là một trong những 
                        dòng sản phẩm bán chạy nhất mọi thời đại của hãng.
                    </p>
                    <p>
                        Tháng 8/2017, thương hiệu G-Shock đã cán mốc 100 triệu chiếc được xuất xưởng trên toàn thế giới, là minh chứng mạnh 
                        mẽ về giá trị G-Shock mang lại cho tín đồ yêu phụ kiện.
                    </p>
                    <div className='BrandCasio'>
                    <img src={BrandCasio2} alt="BrandCasio2"/>
                </div>
                </section>
                <section>
                    <h4>Giai đoạn 1990 – 2000: Đa dạng hóa sản phẩm</h4>
                    <p>
                        Trong giai đoạn này, Casio tiếp tục mở rộng các dòng sản phẩm của mình. Ngoài đồng hồ điện tử, Casio còn sản xuất dòng 
                        analog, thời trang, trẻ em,… Năm 1994, thiết kế chống sốc Baby-G đầu tiên được ra mắt, cùng với G-Shock trở thành hai 
                        thương hiệu con đình đám nhất của Casio.
                    </p>
                    <div className='BrandCasio'>
                    <img src={BrandCasio3} alt="BrandCasio3"/>
                </div>
                </section>
                <section>
                    <h4>Giai đoạn 2000 – nay: Không ngừng mở rộng</h4>
                    <p>
                        Khi có vị thế vững chắc trong ngành công nghiệp cỗ máy thời gian, Casio đã đẩy nhanh tốc độ phát triển và mở rộng thị 
                        trường ra hơn 100 quốc gia trên thế giới. Hiện nay, Casio đang là một trong những thương hiệu lớn trên toàn cầu.
                    </p>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default Casio;
