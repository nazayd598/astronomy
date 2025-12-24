// main.js
import { getWeatherData } from './services/weather.js';
import { getSunTimes } from './services/astronomy.js';

async function main() {
    // Örnek: İstanbul Koordinatları
    const lat = 41.0082;
    const lon = 28.9784;

    console.log(`--- Mikro Mimari Stateless Raporu (${new Date().toLocaleDateString()}) ---`);
    console.log(`Konum: Lat ${lat}, Lon ${lon}\n`);

    // İki API'yi eşzamanlı (parallel) çağırıyoruz
    const [weather, astro] = await Promise.all([
        getWeatherData(lat, lon),
        getSunTimes(lat, lon)
    ]);

    console.log(">> HAVA DURUMU SERVİSİ:");
    console.log(`Durum: ${weather.condition}, Sıcaklık: ${weather.temp}°C`);

    console.log("\n>> ASTRONOMİ SERVİSİ:");
    console.log(`Güneş Doğuş: ${astro.sunrise}`);
    console.log(`Güneş Batış: ${astro.sunset}`);
    console.log(`Gün Süresi: ${Math.floor(astro.day_length / 3600)} saat`);
    
    console.log("\n-------------------------------------------");
}

main();
