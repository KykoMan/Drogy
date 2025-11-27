import Image from 'next/image';

export default function QRDonate() {
  // Show a static QR image. Upload a QR image at `public/images/qr-donate.png`.
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-lg font-semibold mb-4">Podpořte naši činnost</h3>
      <div className="p-4 inline-block rounded">
        <Image
          src="/images/qr-donate.png"
          alt="QR kód pro darování"
          width={192}
          height={192}
          className="rounded"
        />
      </div>
      <p className="text-sm text-gray-600 mt-4">Naskenujte QR kód pro finanční příspěvek</p>
      <div className="mt-4 text-xs text-gray-500">Číslo účtu: 123456789/0100</div>
    </div>
  );
}