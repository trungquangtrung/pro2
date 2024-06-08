import React, { useState } from 'react';
import './Contact.css';
import HeaderMain from '../../Components/header/HeaderMain';
import Footer from '../../Components/footer/Footer';
import BannerBlogs from '../../Image/BannerBlogs.png'
const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const posts = [
        { id: 1, title: 'Đồng hồ cơ không kim', content: 'Đồng hồ cơ không kim là loại đồng hồ không sử dụng kim và được trang bị bộ máy cơ, cung cấp năng lượng từ chuyển động của cổ tay hoặc vặn dây cót thủ công. Máy cơ là bộ máy được làm hoàn toàn từ các chi tiết kỹ thuật cơ khí để vận hành.',image:'https://www.watchstore.vn/upload_images/images/2024/06/03/dong-ho-khong-kim-2(1).jpg'  },
        { id: 2, title: 'Đồng hồ Casio của nước nào?', content: 'Casio là một công ty chế tạo thiết bị điện tử Nhật Bản được thành lập vào năm 1946 bởi ông Tadao Kashio, một kỹ sư chuyên về công nghệ chế tạo. Casio có trụ sở đặt tại Tokyo, Nhật Bản. Thương hiệu này được biết đến nhiều nhất là về các loại máy tính và các thiết bị như đồng hồ, thiết bị âm thanh, nhạc cụ,...', image: 'https://cdn.tgdd.vn/hoi-dap/1176831/dong-ho-casio-cua-nuoc-nao-uu-diem-va-dong-san-ph-1-800x450.jpg' },
        { id: 3, title: 'Đồng hồ lên dây cót là gì?', content: 'Đồng hồ lên dây cót hay còn gọi là đồng hồ cơ, sử dụng nguồn năng lượng sinh ra từ dây cót để hoạt động. Tuy nhiên, nguồn năng lượng này lại không tồn tại vĩnh cửu mà cần phải nạp thường xuyên thông qua nhiều hình thức khác nhau.', image: 'https://bizweb.dktcdn.net/100/330/998/articles/day-cot-cua-dong-ho-1.png?v=1555839965383' }
    ];

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    return (
        <>
        <HeaderMain/>
        <div className="blog">
            <h1 className="blog-title">Kiến Thức Về Đồng Hồ</h1>
            <div className='Banner'>
                <img src={BannerBlogs} alt="BannerBlogs"></img>
            </div>
            <h4>Tất tần tật về đồng hồ, chúng được chia thành nhiều chủ đề khác nhau giúp bạn tìm kiếm nhanh chóng thông tin mình cần. Kiến thức chuẩn xác và điều chỉnh liên tục bởi đội ngũ chuyên gia (có chứng nhận đào tạo từ hãng).</h4>
            <div className="blog-content">
                <div className="blog-list">
                    <h2>Danh sách bài viết</h2>
                    <ul>
                        {posts.map(post => (
                            <li key={post.id} onClick={() => handlePostClick(post)}>
                                {post.title}
                            </li>
                        ))}
                    </ul>
                </div>
                {selectedPost && (
                    <div className="blog-post">
                        <h2>{selectedPost.title}</h2>
                        <img src={selectedPost.image} alt={selectedPost.title} />
                        <p>{selectedPost.content}</p>
                    </div>
                )}
            </div>
        </div>
        <Footer/>
        </>

    );
};

export default Blog;
