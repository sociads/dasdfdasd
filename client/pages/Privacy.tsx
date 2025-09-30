import React from "react";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container py-20">
        <h1 className="text-3xl font-bold">Gizlilik Politikası</h1>
        <p className="mt-4 text-muted-foreground">
          Sociads olarak kullanıcıların kişisel verilerini korumaya büyük önem
          veriyoruz. Bu politika, hangi verileri topladığımızı, neden
          topladığımızı ve nasıl işlediğimizi açıklar.
        </p>

        <h2 className="mt-6 font-semibold">1. Veri Sorumlusu</h2>
        <p className="text-muted-foreground">
          Veri sorumlusu: Sociads. İletişim: info@sociads.com.tr
        </p>

        <h2 className="mt-6 font-semibold">2. Toplanan Veriler</h2>
        <ul className="list-disc list-inside text-muted-foreground">
          <li>
            Kullanıcı tarafından sağlanan veriler: ad, soyad, e-posta, telefon,
            şirket bilgisi, başvuru metinleri, dosya linkleri.
          </li>
          <li>
            Otomatik toplanan veriler: IP adresi, tarayıcı türü, cihaz
            bilgileri, çerez verileri, ziyaret süreleri.
          </li>
          <li>
            Üçüncü taraf verileri: entegrasyonlar ve analiz araçlarından elde
            edilen anonim veriler.
          </li>
        </ul>

        <h2 className="mt-6 font-semibold">3. Verilerin Kullanım Amaçları</h2>
        <p className="text-muted-foreground">
          Toplanan veriler aşağıdaki amaçlarla kullanılabilir:
        </p>
        <ul className="list-disc list-inside text-muted-foreground">
          <li>
            Hizmetlerin sunulması, taleplerin işlenmesi ve müşteri iletişimi.
          </li>
          <li>
            Hizmet deneyiminin iyileştirilmesi, kullanıcı davranış analizi ve
            A/B testleri.
          </li>
          <li>
            Hukuki yükümlülüklerin yerine getirilmesi ve güvenlik amaçları.
          </li>
        </ul>

        <h2 className="mt-6 font-semibold">4. Yasal Dayanak</h2>
        <p className="text-muted-foreground">
          Veri işlemleri kullanıcı rızası, sözleşmenin ifası, yasal
          yükümlülüklerin yerine getirilmesi veya meşru menfaatler temelinde
          gerçekleştirilir.
        </p>

        <h2 className="mt-6 font-semibold">
          5. Çerezler ve İzleme Teknolojileri
        </h2>
        <p className="text-muted-foreground">
          Sitemiz kullanımına ilişkin analiz ve performans çerezleri
          kullanılmaktadır. Kullanıcılar çerez tercihlerini tarayıcı veya cihaz
          ayarlarından yönetebilir.
        </p>

        <h2 className="mt-6 font-semibold">6. Verilerin Paylaşımı</h2>
        <p className="text-muted-foreground">
          Kişisel veriler, ilgili yasal gereklilikler veya hizmetin sağlanması
          için gerekli üçüncü taraf sağlayıcılarla paylaşılabilir (ör. e-posta
          sağlayıcıları, hosting, analiz). Bu sağlayıcılarla gizlilik
          sözleşmeleri yapılmıştır.
        </p>

        <h2 className="mt-6 font-semibold">7. Uluslararası Veri Aktarımları</h2>
        <p className="text-muted-foreground">
          Veriler uluslararası sunuculara aktarılabilir. Bu tür aktarımlarda
          ilgili yasal gerekliliklere uygun tedbirler alınır.
        </p>

        <h2 className="mt-6 font-semibold">8. Veri Saklama Süresi</h2>
        <p className="text-muted-foreground">
          Kişisel veriler, saklanma amaçları ortadan kalkana kadar veya ilgili
          mevzuatın öngördüğü süreler boyunca saklanır.
        </p>

        <h2 className="mt-6 font-semibold">9. Kullanıcı Hakları</h2>
        <p className="text-muted-foreground">
          Kullanıcılar; erişim, düzeltme, silme, işlemeyi kısıtlama, itiraz etme
          ve veri taşınabilirliği haklarına sahiptir. Talepler
          info@sociads.com.tr adresine iletilmelidir.
        </p>

        <h2 className="mt-6 font-semibold">10. Güvenlik</h2>
        <p className="text-muted-foreground">
          Veriler, teknik ve idari güvenlik önlemleriyle korunur. Erişim
          kontrolleri, şifreleme ve düzenli güvenlik denetimleri uygulanır.
        </p>

        <h2 className="mt-6 font-semibold">11. Çocukların Gizliliği</h2>
        <p className="text-muted-foreground">
          Hizmetlerimiz 18 yaş altı çocuklar için tasarlanmamıştır. Çocuklardan
          bilerek kişisel veri toplanmaz.
        </p>

        <h2 className="mt-6 font-semibold">12. Politika Değişiklikleri</h2>
        <p className="text-muted-foreground">
          Bu politika zaman zaman güncellenebilir. Önemli değişiklikler sitede
          duyurulacaktır.
        </p>

        <h2 className="mt-6 font-semibold">13. İletişim</h2>
        <p className="text-muted-foreground">
          Gizlilik ile ilgili talepleriniz için info@sociads.com.tr adresine
          başvurabilirsiniz.
        </p>
      </section>
    </main>
  );
}
