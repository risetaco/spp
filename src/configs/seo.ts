import { type SeoProps } from "../types/seo";

const seo: SeoProps = {
  url: "https://shopeepay.co.id",
  titleDefault: "ShopeePay | Metode Pembayaran #1 Belanja Online",
  description:
    "Mulai dari pembayaran belanja online di aplikasi Shopee sampai pembayaran offline di Merchant ShopeePay, ShopeePay adalah fitur uang elektronik terdepan. Nikmati beragam keuntungan, seperti Cashback, transfer saldo yang cepat dan mudah hingga Voucher ShopeePay yang dapat digunakan untuk pembelanjaan berikutnya!",
  titleTemplate: "%s | ShopeePay | Metode Pembayaran #1 Belanja Online",
  languageAlternates: [
    { hrefLang: "en-EN", href: "https://shopeepay.com" },
    { hrefLang: "id-ID", href: "https://shopeepay.co.id" },
    { hrefLang: "vi-VN", href: "https://shopeepay.vn" },
    { hrefLang: "th-TH", href: "https://shopeepay.co.th" },
    { hrefLang: "vi-VN", href: "https://shopeepay.ph" },
    { hrefLang: "en-MY", href: "https://shopeepay.com.my" },
    { hrefLang: "en-SG", href: "https://shopeepay.sg" },
    { hrefLang: "br-PT", href: "https://shopeepay.com.br" },
  ],
  openGraph: {
    basic: {
      title: "ShopeePay | Metode Pembayaran #1 Belanja Online",
      type: "website",
      image:
        "https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-sg/assets/ca5d12864c12916c05640b36e47ac5c9.png",
    },
    optional: {
      description:
        "Mulai dari pembayaran belanja online di aplikasi Shopee sampai pembayaran offline di Merchant ShopeePay, ShopeePay adalah fitur uang elektronik terdepan. Nikmati beragam keuntungan, seperti Cashback, transfer saldo yang cepat dan mudah hingga Voucher ShopeePay yang dapat digunakan untuk pembelanjaan berikutnya!",
      siteName: "ShopeePay",
      locale: "id_ID",
    },
    image: {
      url: "https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-sg/assets/ca5d12864c12916c05640b36e47ac5c9.png",
      secureUrl:
        "https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-sg/assets/ca5d12864c12916c05640b36e47ac5c9.png",
      type: "image/jpeg",
      width: 1200,
      height: 630,
      alt: "ShopeePay | Metode Pembayaran #1 Belanja Online",
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@ShopeePayID",
    creator: "@ShopeePayID",
    title: "ShopeePay | Metode Pembayaran #1 Belanja Online",
    description:
      "Mulai dari pembayaran belanja online di aplikasi Shopee sampai pembayaran offline di Merchant ShopeePay, ShopeePay adalah fitur uang elektronik terdepan. Nikmati beragam keuntungan, seperti Cashback, transfer saldo yang cepat dan mudah hingga Voucher ShopeePay yang dapat digunakan untuk pembelanjaan berikutnya!",
    image:
      "https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-sg/assets/ca5d12864c12916c05640b36e47ac5c9.png",
  },
};

export default seo;
