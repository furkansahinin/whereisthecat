# Where Is The Cat?

İstanbul'un küçük dükkânları, kayıp sahneleri ve kent hafızası arasında gezinen kurgusal bir kedi. Mobil öncelikli statik site: Türkçe/İngilizce, 30 kaynaklı hikâye, semt araması ve açık/koyu tema.

Canlı site: https://whereisthecat.com/

## Açık kaynak

Özgün kod, metin ve çizimler MIT lisansıyla paylaşılır. Bu depo 31 Ekim 2026 tarihinde denetlenmiş kaynaklardan temiz bir başlangıç olarak oluşturulmuştur; önceki özel Git geçmişi ve lisansı doğrulanmamış referans görseli bu depoya aktarılmamıştır. Proje erken aşamadadır.

## Yerel çalıştırma

Node.js 18 veya üzeri gerekir. Paket kurulumu ya da derleme adımı yoktur.

```sh
git clone https://github.com/furkansahinin/whereisthecat.git
cd whereisthecat
node server.cjs
```

http://127.0.0.1:4173 adresini aç. Sunucuyu Ctrl+C ile durdur.

## Kontroller

```sh
node test.cjs
```

Testler semt/koordinat aramasını, mesafe sıralamasını, 30 dakikalık konaklamayı, yenilemede süreyi korumayı ve kaçırılan aralıkları kapsar. Arayüz değişikliklerini ayrıca mobil ve masaüstünde, iki dilde ve iki temada kontrol et.

## Dosyalar

- `index.html`, `style.css`, `atlas.css`: arayüz.
- `memory-places.js`, `stories-tr.js`: kaynaklı İngilizce/Türkçe hikâyeler. Kimlik sırasını koru; yeni durağı sona ekle.
- `language.js`, `theme.js`: dil ve kalıcı tema.
- `location-search.js`: çevrimdışı semt sözlüğü ve kuş uçuşu mesafe.
- `cat-wander.js`, `explorer.js`: kurgusal kedi rotası ve harita.
- `cat-mark.svg`: bu yayın için sıfırdan çizilmiş geometrik logo maskesi; `cat-logo.svg`: favicon.
- [DEVAM-REHBERI.md](DEVAM-REHBERI.md): katkı ve bakım notları.

## Yayın paketi

```sh
node prepare-release.cjs
```

`release/` içeriği statik barındırmaya uygundur. LICENSE ve üçüncü taraf bildirimlerini paketle birlikte koru. Bu komut dosya üretir; canlı siteyi yayımlamaz. GitHub otomatik yayına bağlı değildir.

## Editoryal yaklaşım ve sınırlar

Kedi anlatıları kurgu; tarih bilgisi ve kaynak bağlantıları ayrıdır. İşaretler yaklaşık konumları veya tarihî izleri gösterir. Güncel giriş ve ziyaret saatleri ayrıca doğrulanmalıdır. Rota tarayıcıya özgüdür; gerçek bir kedinin GPS konumu değildir. Semt araması tam adres çözümleme veya yaya navigasyonu sağlamaz.

## Lisans ve üçüncü taraflar

Projenin hak sahibi tarafından onaylanan özgün kod, metin ve çizimler [MIT](LICENSE) lisanslıdır. Bağlantı verilen yayınların, arşivlerin ve markaların hakları ilgili sahiplerindedir; MIT bunlara uygulanmaz. OpenStreetMap verisi ve çevrimiçi sokak katmanı ayrı koşullara tabidir; haritadaki atıfları koru. Ayrıntılar: [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).

API anahtarı, parola, oturum çerezi veya özel hesap bilgilerini depoya ekleme.
