// import libs
import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

// import css
import "./page.css";

export const metadata: Metadata = {
  title: "About us",
  description:
    "ForCat Shop - nơi mang lại những trải nghiệm tuyệt vời cho bạn và thú cưng của bạn. Với đội ngũ đam mê và kinh nghiệm, chúng tôi cam kết cung cấp những sản phẩm chất lượng và dịch vụ tận tâm nhất. Hãy cùng tìm hiểu thêm về chúng tôi và cách chúng tôi có thể giúp bạn chăm sóc và yêu thương thú cưng của mình một cách tốt nhất!",
};
export default function AboutUsPage() {
  return (
    <main className="about-us__container">
      <section className="about-us__about-information white">
        <div className="about-us__about-information__wrapper">
          <h1 className="about-us__about-information__title">
            FORCAT SHOP - Cửa hàng Vật phẩm dành cho Mèo
            <span className="about-us__about-information__title-after"></span>
          </h1>
          <h4 className="about-us__about-information__subtitle">
            FORCAT tự hào là một trong những cửa hàng phụ kiện cho mèo lớn và
            đáng tin cậy nhất tại Sài Gòn, nơi có thể thỏa mãn niềm đam mê trong
            cuộc chơi của hàng triệu tín đồ yêu Thú cưng từ Nam ra Bắc.
          </h4>
        </div>
        <div className="about-us__service__container">
          <div className="about-us__service__wrapper">
            <div className="about-us__service__imgs__cover">
              <Image
                className="about-us__service__img"
                fill={true}
                src="/imgs/about-us/about02_infor_1_ico.webp"
                alt="Chất lượng thật - Giá trị thật"></Image>
            </div>
            <h3>Chất lượng thật - Giá trị thật</h3>
            <p>
              Số lượng sản phẩm và dịch vụ tốt nhất với chủng loại đa dạng,
              phong phú sẽ đáp ứng tất cả nhu cầu mua sắm của bạn.
            </p>
          </div>
          <div className="about-us__service__wrapper">
            <div className="about-us__service__imgs__cover">
              <Image
                className="about-us__service__img"
                fill={true}
                src="/imgs/about-us/about02_infor_2_ico.webp"
                alt="Tích điểm"></Image>
            </div>
            <h3>Tích điểm dựa trên hóa đơn của bạn</h3>
            <p>
              Tất cả các khách hàng đã mua sắm tại ForCat có tổng hóa đơn mua
              sắm tích lũy từ 1000 điểm sẽ được một phần quà giá trị tương
              đương.
            </p>
          </div>
          <div className="about-us__service__wrapper">
            <div className="about-us__service__imgs__cover">
              <Image
                className="about-us__service__img"
                fill={true}
                src="/imgs/about-us/about02_infor_3_ico.webp"
                alt="Hỗ trợ giao hàng toàn quốc"></Image>
            </div>
            <h3>Hỗ trợ giao hàng toàn quốc</h3>
            <p>
              Miễn phí vận chuyển nội thành thành phố Hồ Chí Minh cho các đơn
              hàng từ 399.000đ trở lên.
            </p>
          </div>
        </div>
        <div className="about-us__content-about">
          <div className="about-us__about-value__title">
            ForCat - Chúng tôi là ai?
            <span className="about-us__about-value__title-after"></span>
          </div>
          <p>
            <strong>FORCAT SHOP</strong> là điểm đến lý tưởng cho những người
            yêu mèo, nơi mang đến một thế giới rộng lớn của các vật phẩm độc đáo
            và chất lượng cho các vị thần mèo của bạn. Với mục tiêu làm hài lòng
            cả mèo và chủ nhân của chúng, chúng tôi tự hào là điểm đến đáng tin
            cậy để tìm kiếm mọi thứ từ thức ăn, đồ chơi, đến đồ dùng và phụ
            kiện.
          </p>
          <p>
            Chúng tôi hiểu rõ rằng mỗi chú mèo là một cá thể độc đáo với sở
            thích và nhu cầu riêng biệt. Đó là lý do tại{" "}
            <strong>FORCAT SHOP</strong>, chúng tôi không chỉ cung cấp các sản
            phẩm thông thường mà còn đưa ra những lựa chọn đa dạng, phong phú để
            bạn có thể tìm thấy điều phù hợp nhất cho thú cưng của mình. Từ
            những món đồ chơi kích thích trí thông minh đến các sản phẩm thú vị
            giúp giải trí và rèn luyện sức khỏe, chúng tôi cam kết đem đến trải
            nghiệm mua sắm đáng nhớ cho bạn và mèo của bạn.
          </p>
          <p>
            Sản phẩm tại <strong>FORCAT SHOP</strong> không chỉ đảm bảo về chất
            lượng mà còn mang đậm phong cách và sự độc đáo. Chúng tôi luôn cập
            nhật xu hướng mới nhất trong cộng đồng yêu mèo để đảm bảo bạn luôn
            có những sản phẩm mới nhất và phù hợp nhất với phong cách của bạn và
            thú cưng. Nếu bạn đang tìm kiếm một nơi đáng tin cậy để mua sắm các
            vật phẩm cho mèo của bạn, hãy ghé thăm <strong>FORCAT SHOP</strong>.
            Chúng tôi cam kết sẽ mang đến cho bạn trải nghiệm mua sắm tốt nhất,
            đồng thời giúp thú cưng của bạn có cuộc sống thú vị và hạnh phúc
            hơn.
          </p>
          <p>
            Thế mạnh của chúng tôi là sự đa dạng và sáng tạo trong việc cung cấp
            các sản phẩm và dịch vụ dành cho mèo. Chúng tôi tự hào về việc có
            một đội ngũ nhân viên chuyên nghiệp và đam mê, luôn sẵn lòng tư vấn
            và hỗ trợ khách hàng trong mọi vấn đề liên quan đến việc chăm sóc và
            nuôi dưỡng mèo. Không chỉ là một cửa hàng bán lẻ thông thường, chúng
            tôi còn là một trung tâm nơi mọi người có thể tìm kiếm thông tin và
            kiến thức về mèo. Ngoài ra, chúng tôi luôn đặt mức giá cạnh tranh và
            cam kết về chất lượng sản phẩm, giúp khách hàng có được sự hài lòng
            cao nhất mỗi khi mua sắm tại <strong>FORCAT SHOP</strong>. Sự đa
            dạng trong sản phẩm cùng với dịch vụ chăm sóc khách hàng tận tình và
            chuyên nghiệp là những điểm mạnh đặc biệt của chúng tôi, giúp chúng
            tôi phục vụ và thu hút cộng đồng người yêu mèo.
          </p>
        </div>
      </section>
      <section className="about-us__about-members brown-img">
        <div className="about-us__about-members__wrapper">
          <div className="about-us__about-members__title">
            Đội ngũ nhân viên
            <span className="about-us__about-members__title-after"></span>
          </div>
          <h4 className="about-us__about-members__subtitle">
            Chúng tôi tạo dựng môi trường làm việc thân thiện cho nhân viên, các
            cấp quản lý luôn lắng nghe, thấu hiểu, hỗ trợ cho nhân viên mình có
            thể phát huy mọi tiềm năng .
          </h4>
        </div>
        <div className="about-us__members__container">
          <div className="about-us__members__wrapper">
            <div className="about-us__members__imgs__cover">
              <Image
                className="about-us__members__img"
                fill={true}
                src="/imgs/about-us/nguyenthihongnhung.jpg"
                alt="Chất lượng thật - Giá trị thật"></Image>
            </div>
            <h4>Nguyễn Thị Hồng Nhung</h4>
            <p>&quot;I want it, I get it.&quot;</p>
          </div>
          <div className="about-us__members__wrapper">
            <div className="about-us__members__imgs__cover">
              <Image
                className="about-us__members__img"
                fill={true}
                src="/imgs/about-us/phannguyenhaiyen.webp"
                alt="Tích điểm"></Image>
            </div>
            <h4>Phan Nguyễn Hải Yến</h4>
            <p>&quot;Amor Fati. Hãy yêu lấy vận mệnh của bạn.&quot;</p>
          </div>
          <div className="about-us__members__wrapper">
            <div className="about-us__members__imgs__cover">
              <Image
                className="about-us__members__img"
                fill={true}
                src="/imgs/about-us/leducmanh.webp"
                alt="Hỗ trợ giao hàng toàn quốc"></Image>
            </div>
            <h4>Lê Đức Mạnh</h4>
            <p>
              &quot;Cái đẹp chỉ đơn giản là hiện thực được nhìn qua con mắt yêu
              thương.&quot;
            </p>
          </div>
          <div className="about-us__members__wrapper">
            <div className="about-us__members__imgs__cover">
              <Image
                className="about-us__members__img"
                fill={true}
                src="/imgs/about-us/letrunghieu.jpg"
                alt="Hỗ trợ giao hàng toàn quốc"></Image>
            </div>
            <h4>Lê Trung Hiếu</h4>
            <p>&quot;Deadline bất biến giữa dòng đời vạn biến.&quot;</p>
          </div>
          <div className="about-us__members__wrapper">
            <div className="about-us__members__imgs__cover">
              <Image
                className="about-us__members__img"
                fill={true}
                src="/imgs/about-us/nguyenvietkha.webp"
                alt="Hỗ trợ giao hàng toàn quốc"></Image>
            </div>
            <h4>Nguyễn Viết Kha</h4>
            <p>
              &quot;Be your own light, don&apos;t need to be too bright.&quot;
            </p>
          </div>
          <div className="about-us__members__wrapper">
            <div className="about-us__members__imgs__cover">
              <Image
                className="about-us__members__img"
                fill={true}
                src="/imgs/about-us/nguyennhattan.webp"
                alt="Hỗ trợ giao hàng toàn quốc"></Image>
            </div>
            <h4>Nguyễn Nhật Tấn</h4>
            <p>&quot;Mồn lèo.&quot;</p>
          </div>
        </div>
      </section>
      {/* <section className="about-us__banner">
        <Image
          className="about-us__banner-img"
          src="/imgs/about-us/banner-about-us-1.webp"
          fill={true}
          alt="about-us-banner-1"
        />
      </section> */}
      <section className="about-us__about-value brown">
        <div className="about-us__about-value__wrapper">
          <div className="about-us__about-value__title">
            Giá trị cốt lõi
            <span className="about-us__about-value__title-after"></span>
          </div>
          <h4 className="about-us__about-value__subtitle">
            Vì sứ mệnh tạo nên những giá trị thương hiệu, chúng tôi đã, đang và
            sẽ luôn nỗ lực hết mình vì sự phát triển – khẳng định thương hiệu
            Việt, mang lại những giá trị lâu dài cho doanh nghiệp.
          </h4>
        </div>
        <div className="about-us__value__container">
          <div className="about-us__value__wrapper">
            <div className="about-us__value__imgs__cover">
              <Image
                className="about-us__value__img"
                fill={true}
                src="/imgs/about-us/about02_services_1_ico.webp"
                alt="Giá trị cốt lõi"></Image>
            </div>
            <h4>Giá trị cốt lõi</h4>
            <p>
              Tại FORCAT SHOP, chúng tôi luôn coi khách hàng như người bạn thân
              thiết, mang đến những sản phẩm và dịch vụ vượt trội.
            </p>
          </div>
          <div className="about-us__value__wrapper">
            <div className="about-us__value__imgs__cover">
              <Image
                className="about-us__value__img"
                fill={true}
                src="/imgs/about-us/about02_services_2_ico.webp"
                alt="Tầm nhìn và sứ mệnh"></Image>
            </div>
            <h4>Tầm nhìn và sứ mệnh</h4>
            <p>
              Với phương châm luôn đề cao sự trải nghiêm, chúng tôi không ngừng
              cố gắng để cải thiện chất lượng sản phẩm và dịch vụ dành cho khách
              hàng.
            </p>
          </div>
          <div className="about-us__value__wrapper">
            <div className="about-us__value__imgs__cover">
              <Image
                className="about-us__value__img"
                fill={true}
                src="/imgs/about-us/about02_services_3_ico.webp"
                alt="Thế mạnh của chúng tôi"></Image>
            </div>
            <h4>Thế mạnh của chúng tôi</h4>
            <p>
              Chúng tôi tự hào về sự đa dạng sản phẩm, dịch vụ chuyên nghiệp và
              tận tình tại FORCAT SHOP.
            </p>
          </div>
          <div className="about-us__value__wrapper">
            <div className="about-us__value__imgs__cover">
              <Image
                className="about-us__value__img"
                fill={true}
                src="/imgs/about-us/about02_services_4_ico.webp"
                alt="Hỗ trợ 24/7"></Image>
            </div>
            <h4>Hỗ trợ 24/7</h4>
            <p>
              Chúng tôi sẵn lòng hỗ trợ khách hàng mọi lúc, mọi nơi. Đừng ngần
              ngại liên hệ với chúng tôi bất cứ khi nào bạn cần.
            </p>
          </div>
          <div className="about-us__value__wrapper">
            <div className="about-us__value__imgs__cover">
              <Image
                className="about-us__value__img"
                fill={true}
                src="/imgs/about-us/about02_services_5_ico.webp"
                alt="Tích điểm"></Image>
            </div>
            <h4>Chính sách đổi trả</h4>
            <p>
              Bạn có thể yên tâm mua sắm tại FORCAT SHOP vì chúng tôi chấp nhận
              đổi trả trong vòng 30 ngày kể từ ngày mua hàng.
            </p>
          </div>
          <div className="about-us__value__wrapper">
            <div className="about-us__value__imgs__cover">
              <Image
                className="about-us__value__img"
                fill={true}
                src="/imgs/about-us/about02_services_6_ico.webp"
                alt="Bảo mật thông tin"></Image>
            </div>
            <h4>Bảo mật thông tin</h4>
            <p>
              Chúng tôi cam kết tuân thủ các quy định pháp luật về bảo vệ dữ
              liệu và sử dụng thông tin cá nhân của khách hàng một cách cẩn thận
              và công bằng.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
